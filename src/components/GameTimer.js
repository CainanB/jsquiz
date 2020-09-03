import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setFinishedTime} from '../actions/quizactions'

const GameTimer = ({getFinishedTime}) => {

    const [time, setTime] = useState({s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const [resetted, setResetted] = useState(false);
    // Not started = 0
    // started = 1
    // stopped = 2
    const dispatch = useDispatch();
    const start = () => {
        
      run();
      setStatus(1);
      setInterv(setInterval(run, 1000));
    };
  
    var updatedS = time.s, updatedM = time.m, updatedH = time.h;
  
    const run = () => {
      if(updatedM === 60){
        updatedH++;
        updatedM = 0;
      }
      if(updatedS === 60){
        updatedM++;
        updatedS = 0;
      }
      updatedS++;
      setTime({s:updatedS, m:updatedM, h:updatedH});
    };
  
    const stop = () => {
      clearInterval(interv);
      setStatus(2);
    };
  
    const reset = () => {
      clearInterval(interv);
      setStatus(0);
      setTime({s:0, m:0, h:0})
      setResetted(!resetted)
    //   start();
    };

    useEffect(()=>{
        start();

       
    },[])

    useEffect(()=>{
        return function cleanUp(){
            getFinishedTime(`${updatedM} minutes, ${updatedS} seconds`)
            console.log(`${updatedM} minutes, ${updatedS} seconds`)
            
        }
    },[])
  return (
    <>
      {time.m > 10 ? time.m : "0" + time.m}:{time.s >= 10 ? time.s : "0"+ time.s}
    </>
  )
}

export default GameTimer
