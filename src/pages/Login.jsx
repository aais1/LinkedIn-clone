// Login.jsx
import React from 'react';
import { auth, googleProvider } from '../firebase';
import logo from '/logo.png';
import {Link} from 'react-router-dom';

const Login = () => {
  const handleLogin = () => {
    console.log('clicked');
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <div className='min-h-[100vh] flex flex-col justify-center items-center '>
            <div className='p-6 border'>
            <div className='flex items-start justify-center gap-x-2 mb-8'>
                <h1 className='text-2xl  font-semibold'>Linked</h1>
                <img src={logo} alt="" width={40}/>
            </div>
            <div className='flex flex-col gap-y-5 w-[400px] '>
                <input type="text"
                 placeholder='Enter your Email'
                 className='border p-2' />
                 <input type="password"
                 placeholder='Enter your Password' 
                 className='border p-2' />
                 <button className='border px-4 py-2 hover:bg-blue-500 text-blue-500 hover:text-white duration-300'>Login</button>
                 <Link to="/register"><p className='hover:underline text-gray-500 cursor-pointer'>New Here?Register Now</p></Link>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
