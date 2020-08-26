import React, {Component} from 'react';
import {connect} from 'react-redux'
import counterActions from './actions/counteractions'

class App extends Component {
  render() {
    return (
      <>
      <button onClick={this.props.onIncrement}>Plus One</button>
        {this.props.count}
      </>
    )
  }
}// end of the class


//purpose is to map redux global state to a prop we can use inside react
const mapStateToProps = (state) => {
  //mapped react prop count to state.counter
  return{
    count: state.counter
  }
}

const mapDispatchToProps = (dispatch) =>{
  //dispatch function sends message to store
  return{
      onIncrement:  () => dispatch(counterActions())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)// connects App component to the provider

