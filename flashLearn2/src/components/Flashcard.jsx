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
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle input change using onChange to track user input
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle the submission of the answer
  const handleSubmit = () => {
    // Check if the user's answer matches the card's answer
    const isCorrect =
      userInput.trim().toLowerCase() === card.answer.trim().toLowerCase();
    setFeedback(isCorrect ? "Correct!" : "Incorrect, try again!");

    // Call onSubmitAnswer to update the parent's state if needed
    onSubmitAnswer(isCorrect);

    // Reset the input box only after submission
    setUserInput("");
  };

  // Handle card flip
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-wrapper">
      <div className={`flashcard-container ${isFlipped ? "flipped" : ""}`}>
        <div className="flashcard">
          <div className="front">
            <p>{card.question}</p>
          </div>
          <div className="back">
            <p>{card.answer}</p>
          </div>
        </div>
      </div>

      <div className="input-area">
        <label htmlFor="user-input">Guess the answer here:</label>
        <input
          id="user-input"
          type="text"
          value={userInput}
          onChange={handleInputChange} /* Tracks changes in the input */
          placeholder="Enter your guess"
        />
        <button onClick={handleSubmit}>Submit Guess</button>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={() => {
            onPrevious();
            setUserInput(""); // Reset input when navigating to the previous card
            setFeedback(null); // Clear feedback on card change
          }}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <button
          onClick={() => {
            onNext();
            setUserInput(""); // Reset input when navigating to the next card
            setFeedback(null); // Clear feedback on card change
          }}
          disabled={currentIndex === totalCards - 1}
        >
          &#8594;
        </button>
        <button onClick={handleFlip}>
          {isFlipped ? "See Question" : "Flip to See Answer"}
        </button>
      </div>

      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default Flashcard;
