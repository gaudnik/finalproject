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