import { FaSuitcase } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Recommend = () => {
  return (
    <div className='p-4 bg-white rounded-md shadow-xl'>
        <div className='flex flex-col gap-y-4'>
            <div>
            <h1 className="font-semibold text-xl">Recommended for you</h1>
            <span className='text-sm text-gray-500'>Based on your profile and search history</span>
            </div>
            <div className='border flex flex-col items-center justify-center gap-y-3 p-4 rounded-md'>
                <span className=''><FaSuitcase style={{fontSize:"2rem"}}/></span>
                <h1 className="font-semibold text-xl ">Want More Jobs</h1>
                <h2 className='text-md text-gray-500'>Click here to continue searching over 20 million jobs on LinkedIn</h2>
                <Link to="/jobs/search"
        className="flex w-[30%] hover:underline  p-2 outline outline-1 items-center justify-center gap-x-2 outline-blue-500 font-semibold text-blue-500 hover:border-blue-500 border-[1px] border-transparent duration-150 rounded-full hover:bg-blue-50">
          Search jobs
        </Link>
            </div>
        </div>
    </div>
  )
}

export default Recommend