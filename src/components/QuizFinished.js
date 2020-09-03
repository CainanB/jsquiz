import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import '../componentstyles/finished.css'
import ExplanationModal from './ExplanationModal'
import GameTimer from './GameTimer'
import ImageModal from './ImageModal'
const QuizFinished = ({score, playAgain}) => {
    let incorrectlyAnsweredQuestions = useSelector(state => state.incorrectlyAnsweredQuestions)
    let finishedTime = useSelector(state => state.finishedTime)
   
    useEffect(() => {
     console.log(incorrectlyAnsweredQuestions)
    }, [])
  return (
    <>
        {/* <div className="quizFinishedContainer">
       <h1 className="highScoreHeading">Quiz Complete score: {score}</h1>
       <table style={{border: "1px solid white"}}>
           <tbody>
           <tr>
               <td style={{border: "1px solid white"}}>Incorrectly Answered Questions</td>
               <td style={{border: "1px solid white"}}>Your Answer</td>
               <td style={{border: "1px solid white"}}>Correct Answer</td>
            </tr>
            
       {incorrectlyAnsweredQuestions.map(q => {
           return (
                    <>
                    <tr>
                   <td style={{border: "1px solid white"}}>{q.question.question}</td>
                  <td style={{border: "1px solid white"}}>{q.yourAnswer}</td>
                  <td style={{border: "1px solid white"}}>{q.question.correct_answer}</td>
                  </tr>
               </>
           )
       })}
       
       </tbody>
       </table>
      
        <button onClick={playAgain}>Play Again</button>
        </div> */}
            <h1 className="finishedHeading">Quiz Complete! Score: {score} </h1>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Incorrectly Answered Questions</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
                <th>Explanation</th>
                </tr>
            </thead>
            <tbody>
                {incorrectlyAnsweredQuestions.map(q => {
                    return (
                                <>
                                <tr id={q.question.number}>
                            <td>Question: {q.question.number}
                            {/* <img style={{cursor: "pointer"}} height="50px" width="80px" src={q.question.imageURL} alt="pic"/> */}
                            <ImageModal imgURL={q.question.imageURL}/>
                            </td>
                            <td>{q.yourAnswer}</td>
                            <td>{q.question.correct_answer}</td>
                            <td>
                            {/* <Button variant="info">View Explanation</Button> */}
                            <ExplanationModal video={q.question.videoEmbed}/>
                            
                            </td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
            </Table>
            <Button variant="primary" onClick={playAgain}>Play Again</Button>
    </>
  )
}

export default QuizFinished


// JS questions
// Passed by value vs pass by reference

// Question 1
// let a = 3;
// let b = a;

// b++

// let obj1 = {name: "Bob", password: 123};
// let obj2 = obj1;

// obj2.name = "Jim";

// console.log(a,obj1.name)

//Question 2
// let obj1 = {
//     a: 'a',
//     b: 'b',
//     c: {
//         inner: "inner c"
//     }
// }

// let obj2 = {...obj1}
// obj1.c.inner = "c"

// console.log(obj2.c.inner)