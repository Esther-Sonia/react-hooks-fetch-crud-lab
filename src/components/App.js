import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import "whatwg-fetch";



function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await 
        fetch("http://localhost:4000/questions");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();

    return () => {

    };
  }, []);



  function handleDeleteQuestion(Id) {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q.id !== Id)
    );
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === updatedQuestion.id ? updatedQuestion : q
      )
    );
  }
  
  function handleAddQuestion(newQuestion) {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateQuestion={handleUpdateQuestion}
        />
      )}
    </main>
  );
}

export default App;
