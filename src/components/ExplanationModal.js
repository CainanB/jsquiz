import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const ExplanationModal = ({video}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <>
    <Button variant="info" onClick={handleShow}>
        View Explanation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Answer Explanation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="460" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button width="50%" variant="info" onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
      </>
    );
 
}

export default ExplanationModal




