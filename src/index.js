import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'rect-redux'
import App from './App';
import reducer from './reducers/reducer'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// creating store inside of redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    
  ,
  document.getElementById('root')
);





