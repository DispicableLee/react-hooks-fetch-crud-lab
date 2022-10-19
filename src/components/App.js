import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
//================================ initial question fetch ===============================
const [questionList, setQuestionList] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((res)=>res.json())
    .then(json=>setQuestionList(json))
  },[])
  console.log(questionList)




  return (
    <main>
      <AdminNavBar setPage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questionList={questionList}/>}
    </main>
  );
}

export default App;
