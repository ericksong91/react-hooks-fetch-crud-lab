import { render } from "@testing-library/react";
import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions, setQuestions] = useState([])
  const url = "http://localhost:4000/questions"

  useEffect(()=>{
    fetch(url)
    .then((r)=>r.json())
    .then((data)=>setQuestions(data))
  }, [])

  function handleDeleteQuestion(deletedItem) {
    console.log("Deleted Item:", deletedItem)
    const updatedQuestions = questions.filter((question)=> question.id !== deletedItem);
    return setQuestions(updatedQuestions);
  }

  function handleCorrectAnswer(updatedItem) {
    console.log("Updated Answer:", updatedItem)
    return setQuestions(questions)
  }

  function renderQuestions(arr){
    const newArr = arr.map((question)=>{
      return <QuestionItem question={question} onDeleteItem={handleDeleteQuestion} onChangeAnswer={handleCorrectAnswer}/>
    })
    return newArr
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul className="Questions">
        {renderQuestions(questions)}
      </ul>
    </section>
  );
}

export default QuestionList;
