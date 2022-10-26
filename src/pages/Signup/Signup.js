import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className='signup'>
            <h3 className='text-center'>Create a account</h3>
            <form>
                <div class="mb-3">
                    <label for="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder='Full Name' required/>
                </div>
                <div class="mb-3">
                    <label for="photoUrl" className="form-label">Photo URL</label>
                    <input type="url" className="form-control" id="photoUrl" placeholder='Photo url' required/>
                </div>
                <div class="mb-3">
                    <label for="email" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Your email' required/>
                </div>
                <div class="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder='Password' required/>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
                </form>
                <p className='mt-3'>Alrady have an account. <Link to={'/login'}>Login</Link></p>
        </div>
    );
};

export default Signup;