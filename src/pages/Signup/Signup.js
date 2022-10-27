import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import './Signup.css';

const Signup = () => {
    const [error,setError] = useState('');
    const {createUser} = useContext(authContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password);

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });

    }
    return (
        <div className='signup'>
            <h3 className='text-center'>Create a account</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-control" id="fullName" placeholder='Full Name' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="photoUrl" className="form-label">Photo URL</label>
                    <input type="url" name='photoUrl' className="form-control" id="photoUrl" placeholder='Photo url' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input type="email" name='email' className="form-control" id="email" placeholder='Your email' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder='Password' required/>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
                </form>
                <p className='red'>{error}</p>
                <p className='mt-3'>Alrady have an account. <Link to={'/login'}>Login</Link></p>
        </div>
    );
};

export default Signup;