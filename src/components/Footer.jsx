import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-green-50 '>
        <div className='w-[80vw] mx-auto '>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 py-10 text-xs font-semibold">
                <div className="flex flex-col gap-y-2">
                    <Link className='hover:underline text-gray-700'>About</Link>
                    <Link className='hover:underline text-gray-700'>Community Guidelines</Link>
                    <Link className='hover:underline text-gray-700'>Privacy & Terms </Link>
                    <Link className='hover:underline text-gray-700'>Sales Solutions</Link>
                    <Link className='hover:underline text-gray-700'>Safety Center</Link>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Link className='hover:underline text-gray-700'>Accessibility</Link>
                    <Link className='hover:underline text-gray-700'>Careers</Link>
                    <Link className='hover:underline text-gray-700'>Ad Choice</Link>
                    <Link className='hover:underline text-gray-700'>Mobile</Link>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Link className='hover:underline text-gray-700'>Talent Solutions</Link>
                    <Link className='hover:underline text-gray-700'>Marketing Solutions</Link>
                    <Link className='hover:underline text-gray-700'>Adverstising</Link>
                    <Link className='hover:underline text-gray-700'>Small Bussiness</Link>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Link className='hover:underline text-gray-700'>Questions?</Link>
                    <Link className='hover:underline text-gray-700'>Manage your account and privacy</Link>
                    <Link className='hover:underline text-gray-700'>Recommendation Transparency</Link>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="" className='text-md font-semibold'>Select Language</label>
                    <select name="" id="" className="border p-2 border-black rounded-md">
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer