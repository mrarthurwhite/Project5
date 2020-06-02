import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const activeStyle = {"backgroundColor": "lightcyan", "fontWeight": "bold"}
  return (
    <div className="NavBar">
      <NavLink exact activeStyle={activeStyle} to="/"> Home </NavLink> |
      <NavLink exact activeStyle={activeStyle} to="/words"> Word List </NavLink> |
      <NavLink exact activeStyle={activeStyle} to="/words/new"> New Word </NavLink>
    </div>
  )
}

export default NavBar
