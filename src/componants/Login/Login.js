import React, { useEffect, useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import image from '../../image/upl/2341.png_300-removebg-preview.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  // const [email , setEmail] = useState('');
  // const [password , setPassword] = useState('');

  const [userInfo , setUserInfo] = useState({
    email:'',
    password:'',
  });

  const [errors , setErrors] = useState({
    emailError:'',
    passwordEroor:'',
    general:''
  })
  // const [error , setError] =useState('');
  const [ signInWithEmailAndPassword, user, loading, hookError ] = useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (event) =>{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ ;
    
    const validEmail = emailRegex.test(event.target.value);
    console.log(validEmail);
    if(validEmail){
      setUserInfo({...userInfo , email: event.target.value})
      setErrors({...errors , emailError: ''})
    }
    else{
      setErrors({...errors , emailError:'invalid email'})
      setUserInfo({...userInfo , email:''})
    }
    
  }

  const handlePasswordChange = (event) =>{

    const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordRegex.test(event.target.value)
    console.log(validPassword);
    if(validPassword){
      setUserInfo({...userInfo , password: event.target.value});
      setErrors({...errors , passwordEroor:''});

    }
    else{
      setErrors({...errors , passwordEroor:'invalid password'})
      setUserInfo({...userInfo , password:''})

    }
   
    
  }


  const HandleLogin = event =>{
    event.preventDefault();
    
  }

  useEffect(()=>{
    if(hookError){
     toast(hookError?.message)
    }
  },[hookError]);


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/countries';
  

  useEffect(()=>{
    if(user){
        navigate(from)
    }
  },[user])
  
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
    {errors?.emailError && <p>{errors.emailError}</p>}
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
    {errors?.passwordEroor && <p>{errors.passwordEroor}</p>}

  </Form.Group>
 <p>You haven't account  <Link to='/register'>plz register</Link></p>
  
  <Button onClick={() => signInWithEmailAndPassword(userInfo.email, userInfo.password)} variant="primary" type="submit" >
    Login
  </Button>
  {/* { error && <p>{error}</p> } */}
  {/* {hookError && <p>{hookError?.message}</p>} */}
  <ToastContainer></ToastContainer>
 
</Form>
</div>
            </div>
        </div>
    );
};

export default Login;