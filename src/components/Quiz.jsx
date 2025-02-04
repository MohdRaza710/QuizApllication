import React, { useState } from "react";
import Start from "../src/components/Start";

const questions = [
    {
        question: "What is React js?",
        options: [
            "An open source library",
            "Framework",
            "Programming language",
            "All above"],
        answer: "an open source library"
    },
    {
        question: "Who is known as the father of computers?",
        options: [
            "Steve Jobs",
            "Bill Gates",
            "Charles Babbage",
            "Alan Turing"],
        answer: "Charles Babbage"
    },
    {
        question: "Which of the following is a front-end language?",
        options: [
            "Java",
            "Python",
            "HTML",
            "Ruby"],
        answer: "HTML",
    },
    {
        question: "Which of the following is a back-end language?",
        options: [
            "Java",
            "Python",
            "HTML",
            "Ruby"],
        answer: "Java",
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Transfer Markup Language",
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink and Text Management Language"],
        answer: "Hyper Transfer Markup Language",
    },
    {
        question: "What is the correct way to declare a JavaScript variable?",
        options: [
            'ariable name = John;',
            'var name = "John";',
            'v name = "John";',
            'string name = "John";'],
        answer: 'var name = "John";',
    },
    {
        question: "What is JSX?",
        options: [
            "JavaScript Syntax Extension",
            "Java Syntax Exchange",
            "JSON XML",
            "JavaScript XML"],
        answer: "JavaScript XML",
    }

];

const Quiz = ({ onStart, setScore, setShowResult }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, updateScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswer = (selectedOption) => {
        setSelectedOption(selectedOption);

        if (selectedOption === questions[currentQuestion].answer) {
            updateScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
            } else {
                setScore(score + (selectedOption === questions[currentQuestion].answer ? 1 : 0));
                setShowResult(true);
            }
        }, 1000); // Delay before moving to next question
    };


    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
            <div className="grid grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option) => (
                    <button
                        key={option}
                        className={`px-4 py-2 font-semibold rounded-md transition ${selectedOption
                                ? option === questions[currentQuestion].answer
                                    ? "bg-green-500 text-white"
                                    : option === selectedOption
                                        ? "bg-red-500 text-white"
                                        : "bg-blue-500 hover:bg-blue-600 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                            }`}
                        onClick={() => handleAnswer(option)}
                        disabled={selectedOption !== null} // Disable buttons after selecting
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div>
                <h1 className="text-center mt-10 text-2xl">Welcome to the Quiz</h1>
                <button className="text-center " onClick={onStart}>Start Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;
