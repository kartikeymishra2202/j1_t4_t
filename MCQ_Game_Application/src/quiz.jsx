import { useState } from "react";
import questions from "./Mcq_data/data.js";
import "./App.css";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {isCompleted ? (
        <div className="result-card">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score}/{questions.length}
          </p>
          <button
            className="primary-button"
            onClick={() => {
              setScore(0);
              setCurrentIndex(0);
              setIsCompleted(false);
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h3>
            Question {currentIndex + 1} of {questions.length}
          </h3>
          <p className="question">{questions[currentIndex].question}</p>
          <div className="options">
            {questions[currentIndex].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
