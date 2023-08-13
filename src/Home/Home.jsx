import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=' bg-slate-100 py-72'>
          <div className=' pl-8 text-center'>
          <h1 className='font-bold md:text-5xl text-3xl'>Welcome to PopX</h1>
            <p className='text-xl my-6'>Lorem ipsum dolor sit amet, <br /> 
            consectetur adipisicing elit.</p>
          <Link to="/register"><button className="btn btn-primary px-14 mb-6">Create Account</button> </Link>
            <br />
            <Link to="/login"><button className="btn btn-active">Already Registered? Login</button></Link>
          </div>
        </div>
    );
};

export default Home;