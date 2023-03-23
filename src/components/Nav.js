import React from 'react';
import logo from '../images/logo.png'

// Style Sheet
import '../styles/Container.css';

// Bootstrap-react
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation({ currentPage, handlePageChange }){
    return (
    <div>
        <div className='announcement'>
            <div>
                <p>Book Today! Call/Text 512-829-7997 or send us a message from the site!</p>
            </div>
        </div>
        <h1>
            <a href="#home"
               onClick={() => handlePageChange('home')} >
                <img src={logo} className='logo' alt='Avielle Jay Beuaty' width={'380px'}/>
            </a>
        </h1>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-container">
                    <Nav.Link href="#about"
                              onClick={() => handlePageChange('About')}
                              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                              About
                    </Nav.Link>
                    <Nav.Link href="#services"
                              onClick={() => handlePageChange('Services')}
                              className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}>
                              Services
                    </Nav.Link>
                    <Nav.Link href="#gallery"
                              onClick={() => handlePageChange('Gallery')}
                              className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}>
                              Gallery
                    </Nav.Link>
                    <Nav.Link href="#contact"
                              onClick={() => handlePageChange('Contact')}
                              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                              Contact
                    </Nav.Link>
                    <div className="nav-link">
                        <button className='book-online'>
                            <a href="mailto:email@gmail.com">Book Online</a>
                            <div className='book-online-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M172,134a12,12,0,0,1-12-12V63a12,12,0,0,1,24,0v59A12,12,0,0,1,172,134Z"></path>
                                    <path d="M340,135a12,12,0,0,1-12-12V64a12,12,0,0,1,24,0v59A12,12,0,0,1,340,135Z"></path>
                                    <path d="M424,92H368v31a28,28,0,0,1-56,0V92H200v30a28,28,0,0,1-56,0V92H88a12,12,0,0,0-12,12V449a12,12,0,0,0,12,12H424a12,12,0,0,0,12-12V104A12,12,0,0,0,424,92ZM412,437H100V197.46H412Z"></path>
                                    <rect x="290" y="231" width="88" height="88" rx="12.34"></rect>
                                </svg>
                            </div>
                        </button>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )
}

export default Navigation;