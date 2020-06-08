import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Button from "react-bootstrap/Button";
const NavBar = () => {
  const activeStyle = {"backgroundColor": "lightblue", "fontWeight": "bold"}
  return (
    <div className="NavBar">
        <LinkContainer exact activeStyle={activeStyle} to="/">
            <Button variant="primary">Home</Button>
        </LinkContainer> |  <LinkContainer exact activeStyle={activeStyle} to="/words">
            <Button variant="primary"> Word List</Button>
        </LinkContainer> |  <LinkContainer exact activeStyle={activeStyle} to="/words/new">
            <Button variant="primary">New Word</Button>
        </LinkContainer>

    </div>
  )
}

export default NavBar
