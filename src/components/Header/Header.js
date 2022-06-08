import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div style={{ backgroundColor: '#FBFBFB' }} className="header">
            <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#">Shahin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto menu">
                       <Link className='ms-4' to='/home'>Home</Link>
                       <Link className='ms-4' to='/home'>Projects</Link>
                       <Link className='ms-4' to='/home'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;