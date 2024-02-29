import { FaAngleDown } from "react-icons/fa";

const RecentJobSearches = () => {
  
  return (
    <div className='bg-white  text-black rounded-md shadow-xl '>
        <div className='flex font-semibold justify-between p-4'>
            <h1>Recent job searches</h1>
            <button
            className='text-gray-500 hover:bg-blue-50 p-1 rounded-md'>Clear</button>
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
        <div className='border-t flex justify-center'>
        <button className='flex gap-x-2 items-center w-[130px] font-semibold text-blue-500  my-4 p-2 rounded-md hover:bg-blue-50'>
            Show More <FaAngleDown/>
          </button>
        </div>
    </div>
  )
}

export default RecentJobSearches