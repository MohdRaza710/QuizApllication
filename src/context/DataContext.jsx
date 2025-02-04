// import React, { useState } from "react";

// const quizHistory = [
//   {
//     date: "2025-02-04",
//     questions: [
//       { question: "What is 2 + 2?", userAnswer: "4", correctAnswer: "4" },
//       { question: "What is the capital of France?", userAnswer: "London", correctAnswer: "Paris" },
//     ],
//     score: 1,
//   },
//   {
//     date: "2025-02-03",
//     questions: [
//       { question: "What is the largest planet?", userAnswer: "Jupiter", correctAnswer: "Jupiter" },
//       { question: "Who wrote 'Hamlet'?", userAnswer: "Shakespeare", correctAnswer: "Shakespeare" },
//     ],
//     score: 2,
//   },
// ];

// const DataContext = () => {
//   const [selectedHistory, setSelectedHistory] = useState(null);

//   return (
//     <div>
//       <h1>Quiz History</h1>
//       {quizHistory.map((entry, index) => (
//         <div key={index}>
//           <button onClick={() => setSelectedHistory(index)}>
//             View History - {entry.date}
//           </button>
//         </div>
//       ))}

//       {selectedHistory !== null && (
//         <div>
//           <h2>History for {quizHistory[selectedHistory].date}</h2>
//           <ul>
//             {quizHistory[selectedHistory].questions.map((q, i) => (
//               <li key={i}>
//                 <strong>Q:</strong> {q.question} <br />
//                 <strong>Your Answer:</strong> {q.userAnswer} <br />
//                 <strong>Correct Answer:</strong> {q.correctAnswer}
//               </li>
//             ))}
//           </ul>
//           <h3>Score: {quizHistory[selectedHistory].score}</h3>
//           <button onClick={() => setSelectedHistory(null)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataContext;
