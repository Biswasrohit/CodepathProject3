import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer, category, difficulty }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShow = () => {
    setShowAnswer(!showAnswer);
  };

  // Determine card styles based on difficulty level
  const getCardStyle = () => {
    switch (difficulty) {
      case "Easy":
        return "flashcard easy";
      case "Medium":
        return "flashcard medium";
      case "Hard":
        return "flashcard hard";
      default:
        return "flashcard";
    }
  };

  return (
    <div className={getCardStyle()} onClick={toggleShow}>
      <div className="flashcard-content">
        {showAnswer ? <p>{answer}</p> : <p>{question}</p>}
      </div>
      <div className="flashcard-footer">
        <p>Category: {category}</p>
        <p>Difficulty: {difficulty}</p>
      </div>
    </div>
  );
};

export default Flashcard;
