import linkedin from '../assets/linkedin.gif'
import jobLinkedin7 from '../assets/jobLinkedin7.svg'
import ceo from '../assets/ceo.png'
import { Footer } from '../components'

const NewJob = () => {
  return (
    <div className="bg-zinc-50">
      <div className="flex justify-center items-center py-10 bg-gray-800">
          <div className=" text-black bg-white p-4 w-[80vw] md:w-[30vw] rounded-lg shadow-2xl">
            <div className="mb-5">
            <h1 className="text-xl font-semibold">Post a job for free</h1>
            <p className="text-sm">Increase the quality of your hire</p>
            </div>
            <form action="" className="flex flex-col text-sm gap-y-2">
              <div className="flex flex-col gap-y-2">
              <label className="text-xs text-gray-500" htmlFor="">Job title</label>
              <input type="text"
              placeholder="Add the title you are hiring for"
              className="border-[1.5px] duration-150 cursor-pointer border-transparent outline outline-1 hover:border-black outline-black  p-1 rounded-md "/>
              </div>
              <div className="flex flex-col gap-y-2">
               
              <label className="text-xs text-gray-500" htmlFor="">Company</label>
              <input type="text"
              placeholder="Company" 
              className="border-[1.5px] duration-150 cursor-pointer border-transparent outline outline-1 hover:border-black outline-black  p-1 rounded-md "/>
              </div>
              <div className="flex flex-col gap-y-2">
              <label className="text-xs text-gray-500" htmlFor="">Workplace type</label>
              <select className="border border-black rounded-md  p-1" name="" id="">
                <option value="On-sites">On-sites</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
              </div>
              <div className="flex flex-col gap-y-2">
              <label className="text-xs text-gray-500" htmlFor="">Job location</label>
              <input type="text"
              placeholder="Location" 
              className="border-[1.5px] duration-150 cursor-pointer border-transparent outline outline-1 hover:border-black outline-black  p-1 rounded-md "/>
              </div>
              <div className="flex flex-col gap-y-2">
              <label className="text-xs text-gray-500" htmlFor="">Workplace type</label>
              <select name="" id="" className="border p-1 border-black rounded-sm" >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
              </select>
              </div>
              <div className="flex flex-col gap-y-4 mt-4">
              <button className="rounded-full bg-blue-600 hover:bg-blue-800 text-white text-xl font-bold py-3">
                Write With AI
              </button>
              <button className="rounded-full text-blue-600 outline outline-1 border-[1.5px] border-transparent hover:border-blue-600 hover:bg-blue-50 duration-150 outline-blue-600 font-semibold text-xl py-3">
                Write on my own
              </button>
              <div className="flex flex-col">
              <span className="text-sm text-gray-500">If you want help with your job description, we will use the information above and AI to suggest one.</span>
              <div className="hover:underline text-center text-blue-500 cursor-pointer font-semibold">Learn More</div>
              </div>
              <div className="flex gap-x-1">
                <span className="text-sm text-gray-500">Limits may apply to free job posts.</span>
                <div className="hover:underline text-center cursor-pointer text-blue-500 font-semibold">View our policy</div>
              </div>
              </div>
            </form>
          </div>
      </div>

      <div className='w-[95vw] md:w-[80vw] mx-auto'>
        <div className="mt-8 md:mt-20 py-10 flex flex-col md:flex-row items-center justify-center gap-x-10 gap-y-10">
          <div className='w-[85%] md:w-[36%] shadow-2xl'>
            <img src={linkedin} alt="" />
          </div>
          <div className='flex flex-col gap-y-6'>
            <h1 className='text-3xl font-semibold'>Posting a job just became easier</h1>
            <div className='flex text-md flex-col gap-y-4'>
            <span>✔ Draft your job description in one click using skills insights from LinkedIn’s member base.</span>
            <span>✔ Draft your job description in one click using skills insights from LinkedIn’s member base.</span>
            <span>✔ Draft your job description in one click using skills insights from LinkedIn’s member base.</span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
      <div className='w-[95vw] md:w-[80vw] mx-auto m-6 my-4 py-4 md:my-8 md:py-10'>
        <div className=' flex flex-col md:flex-row justify-center items-center gap-y-6'>
        <div className='flex flex-col gap-y-4 '>
          <h1 className='text-[2rem] md:text-[3rem] '>Rated #1 in increasing quality of hire</h1>
          <p className='text-sm md:text-md'>Post your job on the world’s largest professional network and use simple tools to prioritize the most qualified candidates - so you can find the people you want to interview, faster.</p>
          <span className='text-xs text-gray-500'>Versus leading competitors.</span>
        </div>
        <div className='w-[50%]'>
          <img src={jobLinkedin7} alt="" />
        </div>
        </div>

        <div className='mt-20'>
          <div className='flex flex-col gap-y-7'>
          <h1 className='text-[1.7rem] md:text-[2.2rem]'>You control how much you want to spend</h1>
          <div className='flex gap-x-2'>
            <div className='flex flex-col gap-y-2 justify-center items-center border rounded-xl p-1 md:p-8'>
                <h1 className='text-md md:text-xl font-semibold'>Choose your budget</h1>
                <p className='md:text-md text-sm text-center '>You can adjust your spending or close your job at any time.</p>
            </div>
            <div className='flex flex-col gap-y-2 justify-center items-center border rounded-xl p-1 md:p-8'>
                <h1 className='text-md md:text-xl font-semibold'>Receive more applicants</h1>
                <p className='md:text-md text-sm text-center '>Pay to promote your job post to relevant candidates across LinkedIn.</p>
            </div>
            <div className='flex flex-col gap-y-2 justify-center items-center border rounded-xl p-1 md:p-8'>
                <h1 className='text-md md:text-xl font-semibold'>Only pay for results</h1>
                <p className='md:text-md text-sm text-center '>Your budget is only used when someone clicks on your job post.</p>
            </div>
          </div>
          </div>
        </div>

        <div className='my-20'>
          <div className='flex flex-col gap-y-8'>
          <h1 className='text-[1.7rem] md:text-[2.5rem]'>Join over 30 million businesses that hire on LinkedIn</h1>
          <div className='flex gap-x-8 items-center justify-start'>
            <img src={ceo} alt="" className='rounded-full w-[120px] md:w-[200px]' />
            <div className='flex flex-col gap-y-6'>
              <h1 className='text-md md:text-2xl text-gray-800'>“LinkedIn Jobs helped me hire the best person to grow my business.”</h1>
              <div className='flex flex-col text-xs text-gray-500'>
                <span>Gavin McKenzie</span>
                <span>CEO, Build McKenzie</span>
              </div>
            </div>
          </div>
          </div>
        </div>

        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default NewJob