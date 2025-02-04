import React from "react";

const Start = ({ onStart }) => {
  return (
    <div>
      <h1 className="text-center mt-10 text-2xl">Welcome to the Quiz</h1>
      <button className="text-center " onClick={onStart}>Start Quiz</button>
    </div>
  );
};

export default Start;
