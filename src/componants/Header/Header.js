import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink';
import auth from '../firebase.init';

import './Header.css';

const Header = () => {
  
  const [user] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
}
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
      {
        user ? 
        <button onClick={handleSignOut} className='btn btn-outline-primary'>Log out</button>
        :

        <CustomLink className='list'  to='/login'>Login</CustomLink>

      }
      <CustomLink className='list'  to='/register'>REgister</CustomLink>

      
      
      </div>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;