import React from "react";

function QuestionItem({ question, onDeleteItem, onChangeAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDeleteClick (){
    console.log("Deleting item:", id);

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })

    .then((r)=>r.json())
    .then(()=>onDeleteItem(id))
  }

  function handleDropDown (e) {
    console.log(e.target.value)

    fetch(`http://localhost:4000/questions/${id}`, {
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex": parseInt(e.target.value),
      }),
    })
    .then((r)=>r.json())
    .then((updatedItem)=>onChangeAnswer(updatedItem))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleDropDown}>{options}</select>
      </label>
      <button className="Delete" onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
