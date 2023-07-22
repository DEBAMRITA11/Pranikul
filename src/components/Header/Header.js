import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Headertop from "../Headertop/Headertop";
import "./Header.css";

const Header = () => {
    return (
        <header className='header-area'>
         <Headertop />
         <Navbar expand="lg" className="colorbg">
         <Container>
         <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Animals</Nav.Link>
            <Nav.Link href="#action2">Gallery</Nav.Link>
            <Nav.Link href="#action2">Event</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">Donate</Nav.Link>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
            </NavDropdown>
            </Nav>
            <div className='nav-icon d-flex'>
            <button><i class="fa-brands fa-facebook"></i></button>
            <h5>(225) 555-0118 </h5>
            </div>
            <div className='social-icon d-flex' >
    
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    );
};

export default Header;