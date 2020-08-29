import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {
  NavLink
} from "react-router-dom";

const Navigation = () => {

return(
  <Navbar bg="secondary" variant="dark" expand="lg">
  <Navbar.Brand>Daksh Tiwari</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav mx-auto text-center">
        <NavLink className='nav-link' exact to='/'>Home</NavLink>
        <NavLink className='nav-link' exact to='/Education'>Education</NavLink>
        <NavLink className='nav-link' exact to='/Projects'>Projects</NavLink>
        <NavLink className='nav-link' exact to='/Contact'>Contact</NavLink>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

}

export default Navigation;