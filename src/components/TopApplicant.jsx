import Avatar from './Avatar'
import { useSelector } from 'react-redux'

const TopApplicant = () => {
    const user=useSelector(store=>store.auth.user)
  return (
    <div className='flex gap-x-4 bg-white p-1 md:px-4 md:py-2 rounded-md shadow-xl'>
        <div className="hidden md:block">
        <Avatar url={user?.photoURL} width={50} />
        </div>
        <div className='flex flex-col gap-y-1'>
            <h1 className='font-semibold'>
                See the full list of jobs where you'd be a top applicant
            </h1>
            <div className='flex flex-col gap-y-1 md:gap-y-2'>
            <span className='text-xs text-gray-500'>
                Millions of members use Premium
            </span>
            <button className='bg-orange-200 text-gray-900  hover:bg-orange-300 duration-100 p-1 text-sm md:text-md w-[90%] md:w-[50%] rounded-full md:font-semibold'>
                Try Premium For PKR0
            </button>
            <span className='text-gray-500 text-xs'>1-month free trial. We’ll send you a reminder 7 days before your trial ends.</span>
            </div>
        </div>
    </div>
  )
}

export default TopApplicant