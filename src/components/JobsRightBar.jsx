import { useSelector } from "react-redux"
import Avatar from "./Avatar"
import { Link } from "react-router-dom" 
import { FaArrowRight } from "react-icons/fa";
import JobsRightLinks from "./JobsRightLinks";
import logo from '/logo.png'

const JobsRightBar = () => {

    const user=useSelector(store=>store.auth.user)

  return (
    <div className="flex flex-col gap-y-2">
    <div className="bg-white shadow-2xl rounded-md max-w-[320px]">
    <div className="">
        <div className="px-2 py-3 ">
        <h1 className="text-sm font-semibold">Open to work</h1>
        <span className="text-gray-500 text-xs">Recommended based on your activity</span>
        </div>
        <div className="hover:bg-blue-50 cursor-pointer underline hover:no-underline w-[100%] p-2 flex gap-x-4 items-center">
            <p className="text-sm font-semibold">Show recruiters you're open to work for new job oppurtunities</p>
            <Avatar url={user?.photoURL} width={90} />
        </div>
        <div className="p-3 text-sm ">
        <p className="mb-2 font-light">Get more InMails from recruiters when you are #OpenToWork - you control who sees this</p>
        <Link to="#"><div className="group mt-2 flex items-center gap-x-2 text-gray-500 hover:text-blue-500 hover:underline"><span className="">Get Started</span> <FaArrowRight className="duration-150 group-hover:translate-x-1" /></div></Link>
        </div>
    </div>
    </div>
        <div className="bg-white shadow-2xl rounded-md max-w-[320px]">
        <div className="">
            <div className="px-2 py-3 ">
            <h1 className="text-sm font-semibold">Job seeker guidance</h1>
            <span className="text-gray-500 text-xs">Recommended based on your activity</span>
            </div>
            <div className="hover:bg-blue-50 cursor-pointer justify-between underline hover:no-underline w-[100%] p-2 flex gap-x-4 items-center">
                <p className="text-sm font-semibold">I want to improve my resume</p>
                <Avatar  width={60} />
            </div>
            <div className="p-3 text-sm ">
            <p className="mb-2 font-light">Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
            <Link to="#"><div className="group mt-2 flex items-center gap-x-2 text-gray-500 hover:text-blue-500 hover:underline"><span className="">Show More</span> <FaArrowRight className="duration-150 group-hover:translate-x-1" /></div></Link>
            </div>
        </div>
        </div>
        <div className="w-[320px]">
        <JobsRightLinks/>
        <div className="text-sm cursor-pointer hover:underline items-center justify-center flex gap-x-2">
        <h1 className='text-blue-500 font-bold'>Linked</h1>
        <img src={logo} alt="" width={15}/>
        </div>
        </div>
    </div>
  )
}

export default JobsRightBar