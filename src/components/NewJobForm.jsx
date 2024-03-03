import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewJobForm = () => {

    const user = useSelector(store=>store.auth.user)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const onSubmit = (data) => {

        addDoc(collection(db,"jobs"),{
            postedBy:{
                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL,
                timestamp:serverTimestamp()
            },
            title: data.title,
            company: data.company,
            type: data.type,
            location: data.location,
            jobType: data.jobType,
            description: data.description,
        }).then(()=>{
            alert("Job posted successfully")
        }).catch((error)=>{
            alert(error.message)
        })
    }


  return (
    <div>
            <div className="mb-2">
            <h1 className="text-lg font-semibold">Post a job for free</h1>
            <p className="text-sm">Increase the quality of your hire</p>
            </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-sm gap-y-1">
            <div className="flex flex-col gap-y-1">
                <label className="text-xs text-gray-500" htmlFor="">Job title</label>
                <input
                    type="text"
                    placeholder="Add the title you are hiring for"
                    className="border-[1.5px] duration-150 cursor-pointer border-transparent outline outline-1 hover:border-black outline-black  p-1 rounded-md "
                    {...register("title", { required: true })}
                    aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title?.type === "required" ? (
                    <p role="alert" className='text-xs text-red-500 font-semibold'>First name is required</p>
                ) : null}
            </div>
              <div className="flex flex-col gap-y-1">
               
              <label className="text-xs text-gray-500" htmlFor="">Company</label>
              <input type="text"
              placeholder="Company" 
              className="border-[1.5px] duration-150 cursor-pointer border-transparent outline outline-1 hover:border-black outline-black  p-1 rounded-md "
              {...register("company",{required:"true"})}
              aria-invalid={errors.company ? "true" : "false"}/>
              {
                errors.company?.type==="required" && <p role="alert" className='text-xs text-red-500 font-semibold'>Company name is required</p>
              }
              </div>
              <div className="flex flex-col gap-y-1">
              <label className="text-xs text-gray-500" htmlFor="">Workplace type</label>
              <select className="border border-black rounded-md  p-1" name="" id=""
              {...register("type",{required:"true"})}
              aria-invalid={errors.type ? "true" : "false"}>
                <option value="" disabled selected>Workplace Type</option>
                <option value="On-sites">On-sites</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
                {
                    errors.type?.type==="required" && <p role="alert" className='text-xs text-red-500 font-semibold'>Workplace type is required</p>
                }
              </div>
              <div className="flex flex-col gap-y-1">
              <label className="text-xs text-gray-500" htmlFor="">Job location</label>
              <input type="text"
              placeholder="Location" 
              className="border-[1.5px] duration-150 cursor-pointer border-transparent outline outline-1 hover:border-black outline-black  p-1 rounded-md "
              {...register("location",{required:"true"})}
              aria-invalid={errors.location ? "true" : "false"}/>
                {
                    errors.location?.type==="required" && <p role="alert" className='text-xs text-red-500 font-semibold'>Location is required</p>
                }
              </div>
              <div className="flex flex-col gap-y-1">
              <label className="text-xs text-gray-500" htmlFor="">Job type</label>
              <select name="" id="" className="border p-1 border-black rounded-sm"
              {...register("jobType",{required:"true"})}
              aria-invalid={errors.jobType ? "true" : "false"} >
                <option value="" disabled selected>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
              </select>
                {
                    errors.jobType?.type==="required" && <p role="alert" className='text-xs text-red-500 font-semibold'>Job type is required</p>
                }
              </div>

              <div className='flex flex-col gap-y-1'>
              <label className="text-xs text-gray-500" htmlFor="">Job Description</label>
                <textarea  
                {...register("description",{required:"true",minLength:50,maxLength:500})}
                aria-invalid={errors.description ? "true" : "false"}
                placeholder="Add a job description"
                cols="30" 
                rows="10"
                className='w-[100%] border-[1.5px] duration-150 cursor-pointer border-transparent outline outline-1 hover:border-black outline-black  p-1 rounded-md'
                />
                {
                    errors.description?.type==="required"  && <p role="alert" className='text-xs text-red-500 font-semibold'>Job description is required</p>
                }
                {
                    errors.description?.type==="minLength"  && <span role="alert" className='text-xs text-red-500 font-semibold'>Minimum characters 50</span>
                }
              </div>

              <div className="flex flex-col gap-y-2 mt-2">
              <button className="rounded-full text-blue-600 outline outline-1 border-[1.5px] border-transparent hover:border-blue-600 hover:bg-blue-50 duration-150 outline-blue-600 font-semibold text-xl py-3"
              type='submit'>
                Write on my own
              </button>
              <button className="rounded-full bg-blue-600 hover:bg-blue-800 text-white text-xl font-bold py-3"
              >
                Write With AI
              </button>
              <div className="flex flex-col">
              <span className="text-sm text-gray-500">If you want help with your job description, we will use the information above and AI to suggest one.</span>
              <div className="hover:underline text-center text-blue-500 cursor-pointer font-semibold">Learn More</div>
              </div>
              <div className="flex gap-x-1">
                <span className="text-sm text-gray-500">Limits may apply to free job posts.</span>
                <Link to="https://www.linkedin.com/help/linkedin/answer/a1505867"><div className="hover:underline text-center cursor-pointer text-blue-500 font-semibold">View our policy</div></Link>
              </div>
              </div>
            </form>
    </div>
  )
}

export default NewJobForm