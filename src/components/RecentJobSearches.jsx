import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const RecentJobSearches = () => {
  
  const [showMore,setShowMore]=useState(false)

  const handleChange=()=>{
    setShowMore(!showMore)
    console.log(showMore);
  }

  return (
    <div className={`bg-white text-black rounded-md shadow-xl`}>
      <div className={` ${!showMore ? `max-h-[260px]` : `max-h-[600px]`} transition-all duration-500 overflow-hidden `}>
        <div className='flex font-semibold justify-between p-1 md:px-4 md:py-2'>
            <h1 className="text-sm md:text-md p-1">Recent job searches</h1>
            <button
            className='text-gray-500 hover:bg-blue-50 p-1 rounded-md text-sm'>Clear</button>
        </div>
        <div className='flex border-b px-4 py-2 flex-col gap-y-2 text-xs '>
          <div className='flex item-center gap-x-1'>
          <p className='font-semibold text-sm'>next js </p>
          <span> . </span>
          <p className='text-green-500 font-semibold'>3 new</p>
          </div>
          <div className='flex item-center gap-x-1'>
            <p>Pakistan</p>
            <span> . </span>
            <p>Entry Level</p>
            <span> . </span>
            <p>On-Site</p>
            <span> . </span>
            <p>Remote</p>
          </div>
        </div>

        <div className='flex border-b p-4 flex-col gap-y-2 text-xs '>
          <div className='flex item-center gap-x-1'>
          <p className='font-semibold text-sm'>next js </p>
          <span> . </span>
          <p className='text-green-500 font-semibold'>3 new</p>
          </div>
          <div className='flex item-center gap-x-1'>
            <p>Pakistan</p>
            <span> . </span>
            <p>Entry Level</p>
            <span> . </span>
            <p>On-Site</p>
            <span> . </span>
            <p>Remote</p>
          </div>
        </div>

        <div className='flex border-b p-4 flex-col gap-y-2 text-xs '>
          <div className='flex item-center gap-x-1'>
          <p className='font-semibold text-sm'>next js </p>
          <span> . </span>
          <p className='text-green-500 font-semibold'>3 new</p>
          </div>
          <div className='flex item-center gap-x-1'>
            <p>Pakistan</p>
            <span> . </span>
            <p>Entry Level</p>
            <span> . </span>
            <p>On-Site</p>
            <span> . </span>
            <p>Remote</p>
          </div>

          
        </div>
        <div className={` ${!showMore ? `opacity-0` : `opacity-100`} transition-all duration-500 `}>
        <div className='flex border-b p-4 flex-col gap-y-2 text-xs '>
          <div className='flex item-center gap-x-1'>
          <p className='font-semibold text-sm'>next js </p>
          <span> . </span>
          <p className='text-green-500 font-semibold'>3 new</p>
          </div>
          <div className='flex item-center gap-x-1'>
            <p>Pakistan</p>
            <span> . </span>
            <p>Entry Level</p>
            <span> . </span>
            <p>On-Site</p>
            <span> . </span>
            <p>Remote</p>
          </div>

          
        </div>

        <div className='flex border-b p-4 flex-col gap-y-2 text-xs '>
          <div className='flex item-center gap-x-1'>
          <p className='font-semibold text-sm'>next js </p>
          <span> . </span>
          <p className='text-green-500 font-semibold'>3 new</p>
          </div>
          <div className='flex item-center gap-x-1'>
            <p>Pakistan</p>
            <span> . </span>
            <p>Entry Level</p>
            <span> . </span>
            <p>On-Site</p>
            <span> . </span>
            <p>Remote</p>
          </div>

          
        </div>

        </div>
        </div>
        
        <div className='border-t flex justify-center'>
        <button className='flex gap-x-2 items-center w-[130px] font-semibold text-blue-500  my-4 p-2 rounded-md hover:bg-blue-50'
        onClick={handleChange}>
            Show {`${!showMore ? `more` : `less` } `} <FaAngleDown className={` duration-700 ${!showMore ? 'rotate-180' : ``}`}/> 
          </button>
        </div>
    </div>
  )
}

export default RecentJobSearches