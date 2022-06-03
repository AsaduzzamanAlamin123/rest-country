import React, { useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import image from '../../image/upl/2341.png_300-removebg-preview.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
// numorphism
const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] =useState('');
  const [ signInWithEmailAndPassword, user, loading, hookError ] = useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (event) =>{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ ;
    
    const validEmail = emailRegex.test(event.target.value);
    console.log(validEmail);
    if(validEmail){
      setEmail(event.target.value);
    }
    else{
      setError('invalid email');
    }
    
  }

  const handlePasswordChange = (event) =>{

    const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordRegex.test(event.target.value)
    console.log(validPassword);
    if(validPassword){
      setPassword(event.target.value);
    }
    else{
      setError('minimum 8 charecther with uupercase ,lowercase and number')
    }
   
    
  }


  const HandleLogin = event =>{
    event.preventDefault();
    
  }
  
    return (
        <div className='mt-5'>
            
            <div className='login-style'>
            <div>
        <img src={image} alt="" />
</div>
<div className='form-style'>
<Form onSubmit={HandleLogin} className='w-50 mx-auto'>
<h4 className='text-danger'>Log in</h4>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
  </Form.Group>
  
  <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit" >
    Login
  </Button>
  { error && <p>{error}</p> }
  {hookError && <p>{hookError?.message}</p>}
 
</Form>
</div>
            </div>
        </div>
    );
};

export default Login;