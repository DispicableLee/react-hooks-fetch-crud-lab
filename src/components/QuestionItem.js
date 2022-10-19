import React from "react";

function QuestionItem({ questionList }) {
  console.log(questionList)
  //==================== setting answers =============================
  const answerList = []
  for(let i = 0; i<questionList.length; i++){
    answerList.push(questionList[i].answers)
  }
  console.log(answerList)
  const options = (i) => answerList[i].map((a) => (
    <option >
      {a}
    </option>
  ));



  const questions = questionList.map((q,i) => {
    return (
      <li>
        <h4>Question{q.id}</h4>
        <h5>Prompt: {q.prompt}</h5>
        <label>
          Correct Answer:
          <select defaultValue={q.correctIndex}>{options(i)}</select>
        </label>
        <button>Delete Question</button>
      </li>
    );
  });


  return (
    <div>
      {questions}

    </div>
  );
}

export default QuestionItem;
