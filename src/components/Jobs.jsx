import { RxCross2 } from "react-icons/rx";
import {  db } from '../firebase'
import { useEffect , useState } from "react";
import { query , collection , onSnapshot } from "firebase/firestore";
import JobDetail from "./JobDetail";
import { useDispatch } from "react-redux";
import { setJob } from "../features/jobSlice/jobSlice";
import JobSkeleton from "./JobSkeleton";

const Jobs = () => {

    const [jobs,setJobs]=useState([]);
    const [loading,setLoading]=useState(true);
    const dispatch=useDispatch();
    
    const filterJobs=id=>{
        setJobs((jobs)=>jobs.filter((job)=>job.id !== id))  
      }

      const handleClick=job=>{
        dispatch(setJob(job))
      }


    useEffect(() => {
        const fetchData = async () => {
          try {
            const q = query(collection(db, "jobs"));
      
            onSnapshot(q, (snapshot) => {
              setJobs(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
              );
              setLoading(false);
            });
            
          } catch (error) {
            console.error("Error fetching posts:", error);
          } 
        };
        fetchData();
        console.log('fetchd');
      }, []);


return (
    <div className="bg-zinc-50">
        <div className="w-screen md:w-[90vw]  mx-auto">
            <div className="flex text-black">
                <div className="w-[100%] md:w-[50%] ">
                    <div className="bg-blue-600">
                        <div className="flex justify-between gap-y-1 py-2 mx-5 text-white ">
                            <div>
                                <h1 className="text-md font-semibold">Jobs</h1>
                                <span className="text-sm">Results :</span>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <span className="text-xs">Set Alert</span>
                                <label className="toggle-switch">
                                    <input type="checkbox" className="toggle-checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="md:overflow-y-scroll  max-h-[71vh]">

                    { loading ? 
                    <div>
                     <JobSkeleton/> 
                     <JobSkeleton/> 
                     <JobSkeleton/> 
                     <JobSkeleton/> 
                     <JobSkeleton/> 
                     <JobSkeleton/>
                    </div> :
                        jobs.length> 0 ? jobs.map((job) => {
                            return (
                                <div key={job.id} className="bg-white border-y cursor-pointer group"
                                onClick={()=>handleClick(job)}>
                                    <div className="flex items-start gap-x-3 justify-between mx-1 py-3">
                                        <img src={job.data.postedBy.photoURL} alt="logo" className="w-[60px] h-[60px]  rounded-full"/>
                                        <div className="flex-1 text-sm">
                                            <h1 className="text-blue-500 font-semibold text-lg cursor-pointer group-hover:underline">{job.data.company}</h1>
                                            <p className="font-semibold">{job.data.title}</p>
                                            <p>{job.data.location}</p>
                                        </div>
                                        <div>
                                            <RxCross2 className="hover:bg-gray-100 h-[30px] w-[30px] p-1 rounded-full cursor-pointer font-black"
                                            onClick={()=>{
                                                filterJobs(job.id)
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div>No Jobs Found</div>

                    }
                    </div>
                    </div>
                        
                <div className="bg-white w-[50%] hidden md:block max-h-[81vh] overflow-y-scroll">
                    <JobDetail/>
                </div>
            </div>
        </div>
    </div>
);
};

export default Jobs;
