import React,{useState} from "react";
import {questions} from './Questions';


const Quiz = () => {
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [myAnswer, setMyAnswer] = useState("");
 const [score, setScore] = useState(0);
 const [finish, setFinish] = useState(false);
 const [show, setShow] = useState(false);
 const [clickAnswer, setClickAnswer] = useState(false);

 let requestOptions = {
  method: 'GET',
  redirect: 'follow'
 };

 fetch("http://localhost:3000/questions", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));

 const checkAnswer = (variant) => {
  setMyAnswer(variant);
  setClickAnswer(true);
 };

 const checkCorrectAnswer = () => {
  if (myAnswer === questions[currentQuestion].answer) {
   setScore(score + 1);
  }
 };

 const showAnswer = () => {
  setShow(true);
 };

 const reset = () => {
  setShow(false);
  setClickAnswer(false);
 };

 const finishHandler = () => {
  if (currentQuestion === questions.length - 1) {
   setFinish(true);
  }
 };

 const startOver = () => {
  setCurrentQuestion(0);
  setFinish(false);
  setMyAnswer("");
  setScore(0);
 };

 if (finish) {
  return (
      <div className="container">
       <div className="wrapper">
        <h3 className="final__score">
         {`Your final score is
          ${score}/${questions.length - 1}
          points.`}
        </h3>
        <button type= "button" className="btn btn__start__over" onClick={() => startOver()}>
         Start Over
        </button>
       </div>
      </div>
  );

 }else {
  return (
    <div className="container">
     <div className="wrapper">
      <h2 className="questions">
       {questions[currentQuestion].question}
      </h2>
      <span className="text__center">
       {`${currentQuestion}/${questions.length -1}`}
      </span>
      {questions[currentQuestion].variants.map((variant) => (
          <div className="variants">
           <p
               key={variant.id}
               className={`variant ${
                   myAnswer === variant
                       ? myAnswer === questions[currentQuestion].answer
                           ? "correctAnswer"
                           : "incorrectAnswer"
                       : null
               }`}
               onClick={() => checkAnswer(variant)}
           >
            {variant}
           </p>
          </div>
      ))}
      {clickAnswer && (
          <button type="button" className="btn btn__answer" onClick={() => showAnswer()}>
           Show Answer
          </button>
      )}
      {show && (
          <p className="text__center">
           Correct Answer: {questions[currentQuestion].answer}
          </p>
      )}
      {currentQuestion < questions.length - 1 && (
          <button
              className="btn btn__current__question"
              onClick={() => {
               setCurrentQuestion(currentQuestion + 1);
               checkCorrectAnswer();
               reset();
              }}
          >
           NEXT
          </button>
      )}
      {currentQuestion === questions.length - 1 && (
          <button type="button" className="btn btn__finish" onClick={() => finishHandler()}>
           FINISH
          </button>
      )}
     </div>
    </div>
  )
 }
}


export default Quiz