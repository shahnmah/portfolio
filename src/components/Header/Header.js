import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div style={{ backgroundColor: '#FBFBFB' }} className="header">
            <Navbar expand="lg">
            <Container className='header-container'>
                <Navbar.Brand href="#">
                    <img className='w-75 pt-1' src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto menu">
                        <a className='ms-4' href="#banner">Home</a>
                        <a className='ms-4' href="#about">About</a>
                        <a className='ms-4' href="#projects">Projects</a>
                        <a className='ms-4' href="#contact">Contact</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;