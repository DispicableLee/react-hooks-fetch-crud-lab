import React, {useState} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questionList}) {
  console.log(questionList)
  //===================== fetch then set state, then pass as props =============================
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        <QuestionItem questionList={questionList}/> 
      </ul>
    </section>
  );
}

export default QuestionList;
