import { FaBookmark } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const JobsLeftBar = () => {
  return (
    <div className='hidden rounded-md px-4 py-5 bg-white lg:flex gap-y-2 flex-col items-start border text-gray-800  text-sm font-semibold shadow-lg w-[100%]'>
      <div className='flex justify-between items-center gap-x-4 p-2'>
        <FaBookmark style={{fontSize:'1.2rem'}} /><h1>MyJobs</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2'>
      <CiBoxList style={{fontSize:'1.2rem'}} /><h1>Preferences</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2'>
      <FaBookmark style={{fontSize:'1.2rem'}}/><h1>Demonstrate Skills</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2'>
      <RiPagesLine style={{fontSize:'1.2rem'}}/><h1>Interview Prep</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2'>
      <MdOutlineContactPage style={{fontSize:'1.2rem'}}/><h1>Resume Builder</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2'>
      <FaYoutube style={{fontSize:'1.2rem'}}/><h1>Job seekers guidance</h1>
      </div>
      <div className='flex justify-between items-center gap-x-4 p-2'>
      <IoSettings style={{fontSize:'1.2rem'}}/> <h1>Applications settings</h1>
      </div>
    </div>
  )
}

export default JobsLeftBar