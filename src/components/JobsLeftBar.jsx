import { FaBookmark } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlinePostAdd } from "react-icons/md";
import { Link } from 'react-router-dom'

const JobsLeftBar = () => {
  return (
    <div className="flex flex-col gap-y-4">
    <div className='hidden rounded-md px-4 py-5 bg-white object-contain  lg:flex gap-y-2 flex-col items-start border text-gray-800  text-sm font-semibold shadow-lg w-[100%]'>
      <div className='flex justify-between items-center gap-x-4 p-2 cursor-pointer hover:underline'>
        <FaBookmark style={{fontSize:'1.2rem'}} /><h1>MyJobs</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2 cursor-pointer hover:underline'>
      <CiBoxList style={{fontSize:'1.2rem'}} /><h1>Preferences</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2 cursor-pointer hover:underline'>
      <IoMdCheckmark style={{fontSize:'1.2rem'}}/><h1>Demonstrate Skills</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2 cursor-pointer hover:underline'>
      <RiPagesLine style={{fontSize:'1.2rem'}}/><h1>Interview Prep</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2 cursor-pointer hover:underline'>
      <MdOutlineContactPage style={{fontSize:'1.2rem'}}/><h1>Resume Builder</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2 cursor-pointer hover:underline'>
      <FaYoutube style={{fontSize:'1.2rem'}}/><h1>Job seekers guidance</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2 cursor-pointer hover:underline'>
      <IoSettings style={{fontSize:'1.2rem'}}/> <h1>Applications settings</h1>
      </div>
    </div>
        <Link to="/list-job">
        <button
        className="lg:flex w-[100%] hidden p-2 outline outline-1 items-center justify-center gap-x-2 outline-blue-500 font-semibold text-blue-500 hover:border-blue-500 border-[1px] border-transparent duration-150 rounded-full hover:bg-blue-50">
          <MdOutlinePostAdd style={{fontSize:"1.5rem"}} />
          Post a free job
        </button>
        </Link>
    </div>
  )
}

export default JobsLeftBar 