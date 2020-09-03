import React, {useState, useEffect} from 'react'

const Timer = ({questionNumber}) => {

    const[lapse,setLapse] =useState(0)
    let timer;
 
    useEffect(()=>{
        console.log("ran")
        const startTime = Date.now()
        timer = setInterval(() => {
            setLapse((Date.now() - startTime)/1000)
            
            console.log("1 second")
            
        }, 1000)
    },[])
    
 
  return (
    <>
      {lapse.toFixed(0)}
      {lapse > 20 ? "hint" : null}
    </>
  )
}

export default Timer
