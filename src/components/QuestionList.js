import React, {useState} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questionList, handleDelete}) {
  console.log(questionList)
  //===================== fetch then set state, then pass as props =============================
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        <QuestionItem handleDelete={handleDelete} questionList={questionList}/> 
      </ul>
    </section>
  );
}

export default QuestionList;
