import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import App from './App';
// import reducer from './reducers/reducer'
import CounterHook from './components/CounterHook'
import quizReducer from './reducers/quizReducer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Quiz from './components/Quiz'
import HighScores from './components/HighScores'

let store = createStore(quizReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// creating store inside of redux

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
      <Switch>
        <Route exact path="/home" component={Quiz}/>
        <Route exact path="/" component={Quiz}/>
        {/* <Route exact path="/" component={App}/> */}
        <Route path="/hooks" component={CounterHook}/>
        <Route path="/highscores" component={HighScores}/>
      </Switch>
      </BaseLayout>
     </BrowserRouter>
  </Provider>
    
  ,
  document.getElementById('root')
);





