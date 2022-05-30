import React from 'react';
import { Button, Form } from 'react-bootstrap';
import image from '../../image/upl/2341.png_300-removebg-preview.png'

const Login = () => {
    return (
        <div className='mt-5'>
            <h4>Log in</h4>
            <div>
            <div>
        <img src={image} alt="" />
</div>
<div>
<Form className='w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
</div>
            </div>
        </div>
    );
};

export default Login;