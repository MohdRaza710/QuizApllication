import React from "react";

const Result = ({ score, restartQuiz }) => {
  return (
    <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
      <h2 className="text-lg">
        Your Score: <span className="text-yellow-400 font-semibold">{score}</span>
      </h2>
      <button
        onClick={restartQuiz}
        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
      >
        Start Again
      </button>
    </div>
  );
};

export default Result;
