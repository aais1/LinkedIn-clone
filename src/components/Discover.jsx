import React from 'react'
import { FaPlus } from "react-icons/fa";

const Discover = () => {
  return (
    <div className='rounded-md bg-white flex flex-col items-center border shadow-lg mt-4 w-[230px]'>
    <div className='py-4 w-[100%] px-6 border-b '>
            <div className='text-xs flex flex-col gap-y-4'>
            <p className='text-blue-500 font-bold hover:underline cursor-pointer'>Discover more</p>
            <div className='flex justify-between'>
            <p className='text-blue-500 font-bold hover:underline cursor-pointer'>Events</p>
            <FaPlus/>
            </div>
            <p className='text-blue-500 font-bold hover:underline cursor-pointer'>Followed Hashtags</p>
            </div>
        </div>
        <div className='py-2 hover:bg-slate-300 w-[100%] text-md text-center text-gray-500 font-semibold cursor-pointer'>Discover More</div>
    </div>
  )
}

export default Discover