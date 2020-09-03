import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const ImageModal = ({imgURL}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <>
      <img style={{cursor: "pointer"}} height="50px" width="80px" src={imgURL} alt="pic" onClick={handleShow}/> 
       

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <img height="315" width="460" src={imgURL} alt="pic" /> 
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

export default ImageModal