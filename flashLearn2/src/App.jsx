import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

const App = () => {
  // Initial list of flashcards with categories and difficulty, no image property
  const initialFlashcards = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      category: "Geography",
      difficulty: "Easy",
    },
    {
      question: "What is 2 + 2?",
      answer: "4",
      category: "Math",
      difficulty: "Easy",
    },
    {
      question: "Who wrote '1984'?",
      answer: "George Orwell",
      category: "Literature",
      difficulty: "Medium",
    },
    {
      question: "Who was the first President of the United States?",
      answer: "George Washington",
      category: "History",
      difficulty: "Easy",
    },
    {
      question: "In which year did World War II end?",
      answer: "1945",
      category: "History",
      difficulty: "Medium",
    },
    {
      question: "What empire was ruled by Julius Caesar?",
      answer: "Roman Empire",
      category: "History",
      difficulty: "Medium",
    },
    {
      question: "What is the chemical symbol for water?",
      answer: "H2O",
      category: "Chemistry",
      difficulty: "Easy",
    },
    {
      question: "What planet is known as the Red Planet?",
      answer: "Mars",
      category: "Astronomy",
      difficulty: "Easy",
    },
    {
      question: "Who proposed the theory of general relativity?",
      answer: "Albert Einstein",
      category: "Physics",
      difficulty: "Medium",
    },
    {
      question: "What is the powerhouse of the cell?",
      answer: "Mitochondria",
      category: "Biology",
      difficulty: "Easy",
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      answer: "Carbon Dioxide",
      category: "Biology",
      difficulty: "Medium",
    },
    {
      question: "What is the value of Pi to two decimal places?",
      answer: "3.14",
      category: "Math",
      difficulty: "Easy",
    },
    {
      question: "What is 15 multiplied by 3?",
      answer: "45",
      category: "Math",
      difficulty: "Easy",
    },
    {
      question: "What is the square root of 144?",
      answer: "12",
      category: "Math",
      difficulty: "Medium",
    },
    {
      question: "What is the derivative of x^2?",
      answer: "2x",
      category: "Calculus",
      difficulty: "Hard",
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      answer: "Jane Austen",
      category: "Literature",
      difficulty: "Medium",
    },
    {
      question: "What is the name of Sherlock Holmes' assistant?",
      answer: "Dr. John Watson",
      category: "Literature",
      difficulty: "Easy",
    },
    {
      question: "In which novel does the character 'Big Brother' appear?",
      answer: "1984",
      category: "Literature",
      difficulty: "Medium",
    },
    {
      question: "What does 'HTTP' stand for?",
      answer: "HyperText Transfer Protocol",
      category: "Technology",
      difficulty: "Medium",
    },
    {
      question: "Who is known as the father of computers?",
      answer: "Charles Babbage",
      category: "Technology",
      difficulty: "Medium",
    },
    {
      question: "What does 'CPU' stand for in computers?",
      answer: "Central Processing Unit",
      category: "Technology",
      difficulty: "Easy",
    },
    {
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest",
      category: "General Knowledge",
      difficulty: "Easy",
    },
    {
      question: "Which language has the most native speakers?",
      answer: "Mandarin Chinese",
      category: "General Knowledge",
      difficulty: "Medium",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answer: "Diamond",
      category: "General Knowledge",
      difficulty: "Medium",
    },
  ];

  // State to hold the remaining cards and the current card
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [flashcards, setFlashcards] = useState(initialFlashcards);

  const handleNextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAnswerSubmission = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleShuffleCards = () => {
    setFlashcards([...flashcards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  return (
    <div className="app">
      <h1>Flashcards Study App</h1>
      <p>
        Description: A simple flashcard app to help you study and learn various
        topics.
      </p>
      <p>Correct Answers: {correctAnswers}</p>
      <button onClick={handleShuffleCards}>Shuffle Cards</button>
      <Flashcard
        card={flashcards[currentIndex]}
        currentIndex={currentIndex}
        totalCards={flashcards.length}
        onNext={handleNextCard}
        onPrevious={handlePreviousCard}
        onSubmitAnswer={handleAnswerSubmission}
      />
    </div>
  );
};

export default App;
