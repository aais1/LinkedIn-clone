import Avatar from './Avatar'
import sidebarBg from '../assets/sidebarBg.png'
import { MdOutlinePersonAdd } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { useSelector } from 'react-redux';

const LeftSideBar = () => {

    const user=useSelector(state=>state.auth.user);

  return (
    <div className='hidden rounded-md bg-white md:flex flex-col items-center border shadow-lg w-[230px]'>
        <div className='w-[100%] border-b'>
        <img src={sidebarBg}
         alt="bg"
         width={200}
         className='-mb-[30px] rounded-tr-md rounded-tl-md
         bg-cover  bg-center block h-[100px] w-[100%]' />
        <div className='flex flex-col items-center mb-3'>
            <Avatar url={user?.photoURL} width={50}/>
            <h3 className='font-semibold mb-2'>Welcome, {user?.displayName || "Guest"} !</h3>
            <span className='text-blue-500 text-xs cursor-pointer hover:underline'>Add a photo</span>
        </div>
        </div>
        <div className='py-4 flex w-[100%] px-6 justify-between border-b cursor-pointer hover:bg-slate-300'>
            <div className='text-xs'>
            <p className='text-gray-500'>Connections</p>
            <p className='text-md'>Grow your network</p>
            </div>
            <div>
            <MdOutlinePersonAdd style={{fontSize:"1.5rem"}}/>
            </div>
        </div>
        <div className='py-4 w-[100%] px-6  border-b cursor-pointer hover:bg-slate-300'>
            <div className='text-xs'>
            <p className='text-gray-500'>Strengthen your profile with an AI writing Assistant</p>
            <p className='text-md hover:underline'>Try Premium now!</p>
            </div>
        </div>
        <div className='py-2 text-xs font-bold w-[100%] flex items-center gap-x-2 px-6  border-b cursor-pointer hover:bg-slate-300'>
            <FaBookmark/>
            <span>My Items </span>
        </div>
        
    </div>
  )
}

export default LeftSideBar