import linkedin from '../assets/linkedin.gif'
import jobLinkedin7 from '../assets/jobLinkedin7.svg'
import ceo from '../assets/ceo.png'
import { Footer , NewJobForm } from '../components'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { login } from '../features/authSlice/authSlice'
import { useDispatch } from 'react-redux'


const NewJob = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
        console.log("login");
      }
      
    });
  }, [dispatch]);

  return (
    <div className="bg-zinc-50">
      <div className="flex justify-center items-center py-4 bg-gray-800">
          <div className=" text-black bg-white p-4 w-[80vw] md:w-[30vw] rounded-lg shadow-2xl">
            <NewJobForm/>
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
            <span>✔ Target qualified applicants for your role using recommended must-have qualifications.</span>
            <span>✔ Post a job for free, then decide if you’d like to pay to promote it.</span>
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
            <div className='flex flex-col gap-y-2 justify-center items-center border rounded-xl shadow-xl p-1 md:p-8'>
                <h1 className='text-md md:text-xl font-semibold'>Choose your budget</h1>
                <p className='md:text-md text-sm text-center '>You can adjust your spending or close your job at any time.</p>
            </div>
            <div className='flex flex-col gap-y-2 justify-center items-center border rounded-xl shadow-xl p-1 md:p-8'>
                <h1 className='text-md md:text-xl font-semibold '>Receive more applicants</h1>
                <p className='md:text-md text-sm text-center '>Pay to promote your job post to relevant candidates across LinkedIn.</p>
            </div>
            <div className='flex flex-col gap-y-2 justify-center items-center border rounded-xl shadow-xl p-1 md:p-8'>
                <h1 className='text-md md:text-xl font-semibold '>Only pay for results</h1>
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