import { FaSuitcase } from "react-icons/fa6";

const Recommend = () => {
  return (
    <div className='p-4 bg-white rounded-md shadow-xl'>
        <div className='flex flex-col gap-y-4'>
            <div>
            <h1 className="font-semibold text-xl">Recommended for you</h1>
            <span className='text-sm text-gray-500'>Based on your profile and search history</span>
            </div>
            <div className='border flex flex-col items-center justify-center p-4 rounded-md'>
                <span className='my-2'><FaSuitcase style={{fontSize:"2rem"}}/></span>
                <h1 className="font-semibold text-xl my-2">Want More Jobs</h1>
                <h2 className='text-md text-gray-500'>Click here to continue searching over 20 million jobs on LinkedIn</h2>
            </div>
        </div>
    </div>
  )
}

export default Recommend