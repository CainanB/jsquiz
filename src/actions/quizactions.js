export const loadQuestionsAction = (questions)=>{
    return{
        type: "LOAD_QUESTIONS",
        questions: [...questions]
    }
}
export const updateScore = ()=>{
    return{
        type: "UPDATE_SCORE",
        
    }
}
export const updateIncorrectAnswers = (question) => {
  return {
      type: "UPDATE_INCORRECT_ANSWERS",
      question: {...question}
  }
}
export const setFinishedTime = (time) => {
  return {
      type: "SET_FINISHED_TIME",
      time: time
  }
}


