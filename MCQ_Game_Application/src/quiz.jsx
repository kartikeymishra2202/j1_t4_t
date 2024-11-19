import { useState } from "react";
import questions from "./Mcq_data/data.js";

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
        <div className="result">
          <h1>
            Your Score: {score}/{questions.length}
          </h1>
        </div>
      ) : (
        <div className="question">
          <h2>{questions[currentIndex].question}</h2>
          {questions[currentIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
