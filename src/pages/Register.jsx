import {useState} from 'react'
import {Link} from 'react-router-dom';
import logo from '/logo.png';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmPassword, setCnfrmPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleRegister = () => {

    }

  return (
    <div>
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
                 value={email} />

                 <input type="password"
                 placeholder='Enter your Password' 
                 className='border p-2'
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                 value={password} />

                <input type="password"
                 placeholder='Confirm Password' 
                 className='border p-2'
                 onChange={(e)=>{
                    setCnfrmPassword(e.target.value)
                 }}
                 value={cnfrmPassword} />

                 <button className='border px-4 py-2 hover:bg-blue-500 text-blue-500 hover:text-white duration-300'
                 onClick={handleRegister}>Register</button>
                 <Link to="/login"><p className='hover:underline text-blue-500 cursor-pointer text-xs'>Already have an account ? Login Here</p></Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Register