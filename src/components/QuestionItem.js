import React, { useState } from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {  
  const { id, prompt, answers, correctIndex } = question;

  
  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then((r) => {
      if (r.ok) {
        onDeleteQuestion(id);
      }
    });
}

  function handleCorrectAnswerChange(event) {
    const newCorrectIndex = parseInt(event.target.value);

    onUpdateQuestion({ ...question, correctIndex: newCorrectIndex });
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
        <select value={correctIndex} onChange={handleCorrectAnswerChange}>
          {options}
          </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>  
       </li>
  );
}

export default QuestionItem;
