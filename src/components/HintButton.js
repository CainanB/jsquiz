import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

const HintButton = ({hint}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);



  return (
    <>
       <Button variant="info" ref={target} onClick={() => setShow(!show)}>
        Show Hint
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {hint}
          </Tooltip>
        )}
      </Overlay>
    
    </>
  )
}

export default HintButton
