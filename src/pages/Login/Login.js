import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaGithubAlt, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='login'>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className='mb-3'>Login</Button>
            </Form>
            <p>Don't have an account. <Link to={'/signup'}>Create Account</Link></p>
            <p className='text-center'>Or</p>
            <Button variant="outline-success" size="lg" className='w-100 mb-3'><FaGoogle></FaGoogle> Sign in with Google</Button>
            <Button variant="outline-dark" size="lg" className='w-100'><FaGithubAlt></FaGithubAlt> Sign in with Github</Button>
            
        </div>
    );
};

export default Login;