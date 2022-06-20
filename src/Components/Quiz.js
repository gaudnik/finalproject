import React,{useState} from "react";
import {questions} from './Questions';


const Quiz = () => {
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [myAnswer, setMyAnswer] = useState("");
 const [score, setScore] = useState(0);
 const [finish, setFinish] = useState(false);
 const [show, setShow] = useState(false);
 const [clickAnswer, setClickAnswer] = useState(false);
}


export default Quiz