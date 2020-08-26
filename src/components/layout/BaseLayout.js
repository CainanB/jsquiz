import React from 'react'
import {Link} from 'react-router-dom'

const BaseLayout = (props) => {
  return (
    <>
        <Link to="/">Home</Link> |
        <Link to="/hooks">Hooks</Link>
        <br />
        <br />
      {props.children}
    </>
  )
}

export default BaseLayout
