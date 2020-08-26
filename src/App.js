import React, {Component} from 'react';
import {connect} from 'react-redux'


import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
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


export default connect(null,null)(App)// connects App component to the provider

