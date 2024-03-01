import {Link} from 'react-router-dom'

const JobsRightLinks = () => {
  return (
    <div className='flex gap-3 text-xs justify-center flex-wrap px-8 py-3'>
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">About Us</Link >
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">Accessibility</Link>
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">Help Center</Link>
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">Privacy & Terms </Link>
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">Ad Choices</Link>
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">Advertising</Link>
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">Business Services </Link>
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">Get the LinkedIn app</Link>
        <Link className='hover:underline hover:text-blue-500 duration-75' to="#">More</Link>
    </div>
  )
}

export default JobsRightLinks