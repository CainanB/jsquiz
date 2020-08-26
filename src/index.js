import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import reducer from './reducers/reducer'
import CounterHook from './components/CounterHook'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// creating store inside of redux

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/hooks" component={CounterHook}/>
      </Switch>
      </BaseLayout>
     </BrowserRouter>
  </Provider>
    
  ,
  document.getElementById('root')
);





