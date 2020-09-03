import React,{useState, useEffect} from 'react'
import { v1 as uuidv1 } from 'uuid'; // useDispatch
import {useSelector, useDispatch} from 'react-redux'
import {updateScore} from '../actions/quizactions'
import {updateIncorrectAnswers} from '../actions/quizactions'
// import Timer from './Timer'


const Answers = ({showHint, question, correctAnswer, incorrectAnswers, nextQuestion, setQuestionsRemaining}) => {
    
    const dispatch = useDispatch()
    const score = useSelector(state => state.score)
    const [time, setTime] = useState({s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const [resetted, setResetted] = useState(false);
    // Not started = 0
    // started = 1
    // stopped = 2
  
    const start = () => {
        
      run();
      setStatus(1);
      setInterv(setInterval(run, 1000));
    };
  
    var updatedS = time.s, updatedM = time.m, updatedH = time.h;
  
    const run = () => {
       if(updatedS > 30 || updatedM > 1){
           showHint()
       } 
      if(updatedM === 60){
        updatedH++;
        updatedM = 0;
      }
      if(updatedS === 60){
        updatedM++;
        updatedS = 0;
      }
      updatedS++;
      setTime({s:updatedS, m:updatedM, h:updatedH});
    };
  
    const stop = () => {
      clearInterval(interv);
      setStatus(2);
    };
  
    const reset = () => {
      clearInterval(interv);
      setStatus(0);
      setTime({s:0, m:0, h:0})
      setResetted(!resetted)
    //   start();
    };
  
    const resume = () => start();

    useEffect(()=>{
        start();
    },[resetted])
    
    


    const checkAnswer = (e) => {
        reset()
        let clickedAnswer = e.target.innerText
        if(clickedAnswer === correctAnswer){
            dispatch(updateScore())
        }else{
            dispatch(updateIncorrectAnswers({question: question, yourAnswer: clickedAnswer}))
        }
        console.log(score)
     
      nextQuestion()
    }
  
    const makeAnswerButton = (text)=>{
        return <a onClick={checkAnswer} href="#" className='superBtn'>{text}</a>
    }
    let buttons =  incorrectAnswers.map(a => {
        return makeAnswerButton(a)
    })

    
  return (
    <>
    {/* <button onClick={checkAnswer} value={correctAnswer}>{correctAnswer}</button> */}
    <div className="answerBox">
            <div className="answersRow flex">
                    <a onClick={checkAnswer} href="#" className='superBtn'>{correctAnswer}</a>
                    {buttons[0]}
            </div>
            <div className="answersRow flex">
                    {buttons[1]}
                    {buttons[2]}
            </div>
            <div style={{color:"white"}}>
            {time.m}:{time.s}
            </div>
            {/* <button onClick={start}>start</button>
            <button onClick={stopTimer}>stop</button>
            <button onClick={reset}>reset</button> */}
        </div>

        
        {/* // <button onClick={checkAnswer} key={uuidv1()} value={a}>{a}</button> */}
    



    </>
  )
}

export default Answers
