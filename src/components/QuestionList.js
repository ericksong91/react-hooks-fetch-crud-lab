import { render } from "@testing-library/react";
import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions, setQuestions] = useState({})
  const url = "http://localhost:4000/questions"

  useEffect(()=>{
    fetch(url)
    .then((r)=>r.json())
    .then((data)=>setQuestions(data))
  }, [])

  console.log(questions)

  // function renderQuestions(arr){
  //   const newArr = arr.map((question)=>{
  //     <QuestionItem question={question} />
  //   })
  //   return newArr
  // }


  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* <ul>{renderQuestions(questions)}</ul> */}
    </section>
  );
}

export default QuestionList;
