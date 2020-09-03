import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BaseLayout = (props) => {
  return (
    <>
        {/* |
        <Link to="/hooks">Hooks</Link> */}
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">JS Quiz</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link><Link style={{color: 'white'}}to="/home">Quiz</Link> </Nav.Link>
            <Nav.Link><Link style={{color: 'white'}}to="/highscores">High Scores</Link> </Nav.Link>
            <Nav.Link><Link style={{color: 'white'}}to="/about">About</Link> </Nav.Link>
          
            </Nav>
           </Navbar>
        <br />
        <br />
      {props.children}
    </>
  )
}

export default BaseLayout
