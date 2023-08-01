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
            <Nav.Link href="#action3">Gallery</Nav.Link>
            <Nav.Link href="#action4">Event</Nav.Link>
            <Nav.Link href="#action5">Services</Nav.Link>
            <Nav.Link href="#action6">Donate</Nav.Link>
            <NavDropdown title="Pages" id="#">
            </NavDropdown>
            </Nav>
            <div className="nav-content d-flex align-center justify-content">
            <a href='#' className='px-2 mt-2'><i class="fa-solid fa-phone"></i></a>
            <h5 className='px-2 mt-2'>(225) 555-0118</h5>
            </div>
            <div className='social-icon px-2'>
            <a href='#' className='px-2 mt-2'><i class="fa-brands fa-facebook"></i></a>
            <a href='#' className='px-2 mt-2'><i class="fa-brands fa-twitter"></i></a>
            <a href='#' className='px-2 mt-2'><i class="fa-brands fa-instagram"></i></a>
            <a href='#' className='px-2 mt-2'><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    );
};

export default Header;