import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({
  card,
  currentIndex,
  totalCards,
  onNext,
  onPrevious,
  onSubmitAnswer,
}) => {
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    // Check if the user's answer matches the card's answer
    const isCorrect =
      userInput.trim().toLowerCase() === card.answer.trim().toLowerCase();
    setFeedback(isCorrect ? "Correct!" : "Incorrect, try again!");
    onSubmitAnswer(isCorrect);
  };

  return (
    <div className={`flashcard ${card.difficulty.toLowerCase()}`}>
      <div className="flashcard-content">
        <p>{card.question}</p>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your answer here"
      />
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p className="feedback">{feedback}</p>}
      <div className="flashcard-footer">
        <p>Category: {card.category}</p>
        <p>Difficulty: {card.difficulty}</p>
        <p>
          Card {currentIndex + 1} of {totalCards}
        </p>
      </div>
      <div className="navigation-buttons">
        <button onClick={onPrevious} disabled={currentIndex === 0}>
          Back
        </button>
        <button onClick={onNext} disabled={currentIndex === totalCards - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
