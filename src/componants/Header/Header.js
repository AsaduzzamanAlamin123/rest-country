import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink';

import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ms-auto">
      <div className='link-style'>
     
      
      <CustomLink className='list' to='/'>Home</CustomLink>
      <CustomLink className='list' to='/countries'>Countries</CustomLink>
      <CustomLink className='list' to='/blog'>Blog</CustomLink>
      <CustomLink className='list'  to='/about'>About Us</CustomLink>
      
      
      </div>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;