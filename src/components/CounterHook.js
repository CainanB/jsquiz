import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import counterActions from '../actions/counteractions'

const CounterHook = () => {

    //useSelector is like mapStateToProps (pull down date form the global state)
    // useDispath is like mapDispatchToProps (update global state)

    let count = useSelector(state => state.counter)
    let dispatch = useDispatch()
  return (
    <>

    <h1>inside of counter hook</h1>
     <h2>{count}</h2> 
     <button onClick={()=>{dispatch(counterActions())}}>hook incrementer</button>
    </>
  )
}

export default CounterHook
