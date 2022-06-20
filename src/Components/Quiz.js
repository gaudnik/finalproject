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

 if (finish) {
  return (
    <div></div>
  );

 }else {
  return (
    <div></div>
  )
 }

}


export default Quiz