import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadQuestionsAction} from '../actions/quizactions'
import QuestionBox from './QuestionBox'
import { v1 as uuidv1 } from 'uuid';
import Landing from './Landing';
import jsQuestions from '../data/jsquestions'

class Quiz extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questionsLoaded: false,
       playQuiz: false
    }
  }
  

  fetchQuestions = async()=>{
    let response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    let results = await response.json();
    let questions = results.results
    // console.log(questions)
    let newQuestions = questions.map(question => {
     let newQuestion = question.question.replace(/&quot;/g,'"')
     newQuestion = newQuestion.replace(/&#039;/g,"'")
     newQuestion = newQuestion.replace(/&shy;/g,"")
     newQuestion = newQuestion.replace(/&ldquo;/g,'"')
     newQuestion = newQuestion.replace(/&rsquo;/g,"'")
     newQuestion = newQuestion.replace(/&hellip;/g,"...")
     newQuestion = newQuestion.replace(/&rdquo;/g,'"')
     let newIncorrectAnswers = question.incorrect_answers.map(a => a.replace(/&#039;/g,"'"))
     newIncorrectAnswers = newIncorrectAnswers.map(a => a.replace(/&amp;/g,"&"))
     newIncorrectAnswers = newIncorrectAnswers.map(a => a.replace(/Adi&oacute;s/g,"Adios"))
     let newCorrectAnswer = question.correct_answer.replace(/&amp;/g,"&")
     newCorrectAnswer = newCorrectAnswer.replace(/&#039;/g,"'")
     newCorrectAnswer = newCorrectAnswer.replace(/&oacute;/g,"o") 
      
      return {
        ...question,
        question: newQuestion,
        incorrect_answers: newIncorrectAnswers,
        correct_answer: newCorrectAnswer,
        id: uuidv1()
      }
      
      
      
      
      
    })
    console.log(newQuestions)
    // this.props.loadQuestions(newQuestions)
    this.props.loadQuestions(jsQuestions)
    this.setState({
      questionsLoaded: true
      
    })
  }

  componentDidMount = () => {
    this.fetchQuestions()
  }

  playQuiz = () => {
    this.setState({playQuiz:true})
  }
  
  playAgain = ()=>{
    this.setState({
      questionsLoaded: false,
      playQuiz:false
    })
    this.fetchQuestions()
  }
  
  render() {
    return (
      <>
      <div className="container flex">
      {this.state.questionsLoaded && this.state.playQuiz === true
       ? <QuestionBox questions={this.props.questions} playAgain={this.playAgain}/> 
       : this.state.questionsLoaded 
       ? <Landing playQuiz={this.playQuiz}/>
       : "Loading Quiz"
      }

      </div>
      
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    questions: state.questions
  }
  
}

const mapDispatchToProps = (dispatch) =>{
  //dispatch function sends message to store
  return{
      loadQuestions:  (questions) => dispatch(loadQuestionsAction(questions))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz)

