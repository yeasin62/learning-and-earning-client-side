import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import {GoogleAuthProvider} from 'firebase/auth';
import { useState } from 'react';


const Login = () => {
    const [error,setError] = useState('');
    const {providerLogin,userSignIn} = useContext(authContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.form?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    const handleSubmitSignin = (event)=> {
        event.preventDefault();
        console.log(event.target);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);

        userSignIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });
    }
    
    return (
        <div className='login'>
            <h3 className='text-center'>Signin</h3>
            <form onSubmit={handleSubmitSignin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input type="email" name='email' className="form-control" id="email" placeholder='Your email' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder='Password' required/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p className='red'>{error}</p>
            <p>Don't have an account. <Link to={'/signup'}>Create Account</Link></p>
            <p className='text-center'>Or</p>
            <Button onClick={handleGoogleSignIn} variant="outline-success" size="lg" className='w-100 mb-3'><FaGoogle></FaGoogle> Sign in with Google</Button>
            <Button variant="outline-dark" size="lg" className='w-100'><FaGithubAlt></FaGithubAlt> Sign in with Github</Button>
            
        </div>
    );
};

export default Login;