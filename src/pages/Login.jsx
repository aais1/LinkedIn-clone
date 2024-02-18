// Login.jsx
import { useState } from 'react';
import { auth } from '../firebase';
import logo from '/logo.png';
import {Link , Navigate, useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [feedback,setFeedback]=useState('')

    const navigate=useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(auth);
        signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
            navigate('/feed');
        }).catch((error)=>{
            setFeedback(error.message)
        });
    };

  return (
    <div>
        <form onSubmit={handleLogin}>
        <div className='min-h-[100vh] flex flex-col justify-center items-center '>
            <div className='p-6 shadow-lg'>
            <div className='flex items-center justify-center gap-x-2 mb-8'>
                <h1 className='text-4xl  font-bold'>Linked</h1>
                <img src={logo} alt="" width={50}/>
            </div>
            <div className='flex flex-col gap-y-5 w-[400px] '>
                 <input type="text"
                 placeholder='Enter your Username' 
                 className='border p-2'
                 onChange={(e)=>{
                    setUsername(e.target.value)
                 }}
                 value={username} />

                <input type="text"
                 placeholder='Enter your Email'
                 className='border p-2'
                 onChange={(e)=>{
                    setEmail(e.target.value)
                 }}
                 required
                 value={email} />

                 <input type="password"
                 placeholder='Enter your Password' 
                 className='border p-2'
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                 value={password} />
                 <button className='border px-4 py-2 hover:bg-blue-500 text-blue-500 hover:text-white duration-300'
                 type='submit'>Login</button>
                 <Link to="/register"><p className='hover:underline text-xs text-blue-500 cursor-pointer'>New Here ? Register Now</p></Link>
                 <span className='text-xs text-red-500 font-bold'>{feedback.slice(22).split(').')}</span>
            </div>
            </div>
        </div>
        </form>
    </div>
    
  );
};

export default Login;
