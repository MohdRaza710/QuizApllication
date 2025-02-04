import React, { useState } from "react";
import Start from "../src/components/Start";
import Quiz from "../src/components/Quiz";
import Result from "../src/components/Result";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Quiz Application</h1>
      {!quizStarted && !showResult && <Start onStart={startQuiz} />}
      {quizStarted && !showResult && <Quiz setScore={setScore} setShowResult={setShowResult} />}
      {showResult && <Result score={score} />}
    </div>
  );
};

export default App;
