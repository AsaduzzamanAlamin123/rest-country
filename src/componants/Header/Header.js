import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ms-auto">
      <Link to='/'>Home</Link>
      <Link to='/countries'>Countries</Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;