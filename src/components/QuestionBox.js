import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { v1 as uuidv1 } from 'uuid';
import Answers from './Answers'
import QuizFinished from './QuizFinished';
import Timer from './Timer'
import GameTimer from './GameTimer'
import HintButton from './HintButton'


const QuestionBox = ({questions, playAgain}) => {
    // const[time,setTime] =useState(0)
    
    
    // const[running,setRunning] =useState(false)
     //useSelector is like mapStateToProps (pull down date form the global state)
    // useDispath is like mapDispatchToProps (update global state)
    // let questions;
    // let correctAnswer = useRef()
    console.log(questions)
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    let [questionsRemaining, setQuestionsRemaining] = useState(questions.length)
    let [slideIn, setSlideIn] = useState(false)
    let [hint, setHint] = useState(false)
    let [finishedTime, setFinishedTime] = useState(0)

    // console.log(questionsRemaining)
    let score = useSelector(state => state.score)
    
    const showHint = () => {
        setHint(true)
    }
    const nextQuestion = () => {
        setHint(false)
        console.log("clicked")
        
        setQuestionsRemaining(questionsRemaining - 1)
      if(questionsRemaining > 1){
          console.log(questionsRemaining)
        setSlideIn(false)
        setTimeout(()=>{
            setCurrentQuestionIndex(currentQuestionIndex + 1)
           
            setSlideIn(true)
        },700)
      }
     
    }

    useEffect(()=>{
        console.log("Slidein true")
        setSlideIn(true)
    },[])

    const getFinishedTime = (time) =>{
        setFinishedTime(time)
    }

 
    
    
    let renderQuestions = ()=>{
        // setSlideIn(true)
        if(questionsRemaining > 0 ){
            return(
                <>
                <h1 className="questionsRemaining">{questionsRemaining === 1 ? "Final Question" : "Questions Remaining: " + questionsRemaining + " "}{hint ? <HintButton hint={questions[currentQuestionIndex].hint}/> : null}</h1>
                
                {/* <div id="quizContainer" className="quizContainer"> */}
                <div className="questionBox flex">
                        <img style={{borderRadius: "20px"}}height="100%" width="100%" src={questions[currentQuestionIndex].imageURL}/>
                    
                    <div id="questionText" className="question">
                    {/* {questions[currentQuestionIndex].question} */}
                    
                    </div>
                </div>
                <Answers 
                question={questions[currentQuestionIndex]}
                correctAnswer={questions[currentQuestionIndex].correct_answer}
                incorrectAnswers={questions[currentQuestionIndex].incorrect_answers}
                nextQuestion={nextQuestion}
                showHint = {showHint}
                
                />
                {/* </div> */}
                </>
            )
        }else{
        return <>
            <QuizFinished playAgain={playAgain} score={score} finishedTime={finishedTime}/>
        </>
        }

   
    }
    // let dispatch = useDispatch()
  return (
    <>
        {slideIn ? <div id="quizContainer" className="quizContainer slideIn"> {renderQuestions()}</div>
        : <div id="quizContainer" className="quizContainer"> {renderQuestions()}</div>
        }

       
       
        
       

                

    </>
  )
}

export default QuestionBox
