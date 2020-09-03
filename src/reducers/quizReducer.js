const initialState = {
    questions: [],
    user: "Cainan",
    score: 0,
    questionsAnswered: 0,
    incorrectlyAnsweredQuestions: [],
    finishedTime: ""
}


const quizReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_QUESTIONS":
            return{
                ...state,
                questions: action.questions,
                score: 0,
                questionsAnswered: 0,
                incorrectlyAnsweredQuestions: []
            }
        case "UPDATE_SCORE":
            return{
                ...state,
                score: state.score + 1
            }
        case "UPDATE_INCORRECT_ANSWERS":
            return {
                ...state,
                incorrectlyAnsweredQuestions: [...state.incorrectlyAnsweredQuestions, action.question]
            }
        case "SET_FINISHED_TIME":
            return {
                ...state,
                finishedTime: action.finishedTime
            }
        default:
            return state;
    }

}

export default quizReducer