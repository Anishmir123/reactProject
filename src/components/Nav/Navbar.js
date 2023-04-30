import React from "react";
import {Navbar , Container , NavDropdown ,  Nav ,Collapse } from 'react-bootstrap';
import './Nav.css';

import { BsFillArrowRightSquareFill } from 'react-icons/bs';







const Navbars = () =>{
    return (
        <Navbar expand="lg">
        <Container>
          <Navbar.Brand ><h1><b>KAAS</b></h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
              <Nav.Link  className="active">Home</Nav.Link>
             
              <NavDropdown title="About us" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Information</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Doctors profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Working hours</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Appointment</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>

              </NavDropdown>
              
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Departments</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Location</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
  

              </NavDropdown>

              <NavDropdown title="Latest news" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Classic list</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Classic without avatar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Columns view</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">blog tiles</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">blog grid</NavDropdown.Item>
                
              </NavDropdown>

              <Nav.Link >Contact us</Nav.Link>
              <Nav.Link>search</Nav.Link>
              <Nav.Link>
                <button>contact us <span> <BsFillArrowRightSquareFill/></span></button>
              </Nav.Link>
             
             </Nav>
            
             </Navbar.Collapse>
              </Container>
      </Navbar>
    )
}



export default Navbars;

