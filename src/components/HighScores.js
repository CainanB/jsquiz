import React from 'react'
import '../componentstyles/highscores.css'
import Table from 'react-bootstrap/Table'

const HighScores = () => {
  return (
    <>
        <div className="highscoreContainer">
            <div>
            <h1>High Scores</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Cainan</td>
                    <td>10</td>
                    <td>0:43</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>9</td>
                    <td>1:43</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Jim</td>
                    <td>8</td>
                    <td>2:50</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Bob</td>
                    <td>7</td>
                    <td>3:52</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Steve</td>
                    <td>5</td>
                    <td>10:45</td>
                    </tr>
                </tbody>
        </Table>
          
            </div>
            
        </div>
  
      
    </>
  )
}

export default HighScores
