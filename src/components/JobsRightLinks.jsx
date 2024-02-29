import {Link} from 'react-router-dom'

const JobsRightLinks = () => {
  return (
    <div className='flex gap-3 text-xs justify-center flex-wrap px-8 py-3'>
        <Link className='hover:underline' to="#">About Us</Link >
        <Link className='hover:underline' to="#">Accessibility</Link>
        <Link className='hover:underline' to="#">Help Center</Link>
        <Link className='hover:underline' to="#">Privacy & Terms </Link>
        <Link className='hover:underline' to="#">Ad Choices</Link>
        <Link className='hover:underline' to="#">Advertising</Link>
        <Link className='hover:underline' to="#">Business Services </Link>
        <Link className='hover:underline' to="#">Get the LinkedIn app</Link>
        <Link className='hover:underline' to="#">More</Link>
    </div>
  )
}

export default JobsRightLinks