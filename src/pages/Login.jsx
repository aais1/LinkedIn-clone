// Login.jsx
import { useState } from 'react';
import { auth , googleProvider } from '../firebase';
import logo from '/logo.png';
import {Link , Navigate, useNavigate} from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice/authSlice';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [feedback,setFeedback]=useState('')

    const navigate=useNavigate();
    const dispatch=useDispatch();

    document.title="Linkedin | Login"

    const handleGoogleLogin=()=>{
        console.log('logging in');
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                dispatch(login(user));
                navigate('/feed');
            })
            .catch((error) => {
                setFeedback(error.message);
            });
    }


            //TODO: Implement login functionality by using signInWithEmailAndPassword() method from firebase auth
            const handleLogin = () => {
            // signInWithEmailAndPassword(auth,email, password)
                    // .then((userCredential) => {
                    //     console.log(userCredential.user);
                    //     dispatch(login({...userCredential.user,displayName:username}));
                    //     navigate('/feed');
                    // }).catch((error)=>{
                    //     setFeedback(error.message)
                    // }
            };
        

        
  return (
    <div>
        <form >
        <div className='min-h-[100vh] flex flex-col justify-center items-center '>
            <div className='p-6 shadow-2xl'>
                <div className='text-red-500 text-xs text-center font-semibold w-[100%] mb-2'>*Please Use Google to Log in to the App*</div>
            <div className='flex items-center justify-center gap-x-2 mb-8'>
                <h1 className='text-4xl  font-bold'>Linked</h1>
                <img src={logo} alt="" width={50}/>
            </div>
            <div className='flex flex-col gap-y-5 w-[400px] '>
                 <input type="text"
                 placeholder='Enter your Username' 
                 className='border p-2'
                 disabled
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
                 disabled
                 required
                 value={email} />

                 <input type="password"
                 placeholder='Enter your Password' 
                 className='border p-2'
                 disabled
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                 value={password} />
                 
                 {/* hover styling for button  hover:bg-blue-500  hover:text-white */}
                 <button className='border px-4 py-2 cursor-not-allowed text-gray-500 duration-300'
                 type='button'
                 disabled
                 onClick={handleLogin}
                 >Login</button>
                         <hr />
                <button className='flex border items-center  justify-center gap-x-8 px-4 py-1 hover:border-blue-500'
                type='button'
                onClick={handleGoogleLogin}>Login With Google 
                <FcGoogle style={{fontSize:"2rem"}}/> </button>
                 <Link to="/register"><p className='hover:underline text-xs text-blue-500 cursor-pointer'>New Here ? Register Now</p></Link>
                 <span className='text-xs text-red-500 font-bold'>{feedback}</span>
            </div>
            </div>
        </div>

        </form>
    </div>
    
  );
};

export default Login;
