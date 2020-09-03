import React from 'react'
import '../componentstyles/landing.css'
// import styled from 'styled-components'

import Button from 'react-bootstrap/Button'


const Landing = ({playQuiz}) => {
  return (
    <>
       
        <div className="landingContainer">
            <div className="landingBox">
                <div>
                <h1 className="landingHeader">Javascript Quiz</h1>
                </div>
                
                <div>
                   <Button onClick={playQuiz}variant="secondary" className="playButton">Play Quiz</Button>
                </div>
                
            </div>

        </div>
 
      
    </>
  )
}

export default Landing
