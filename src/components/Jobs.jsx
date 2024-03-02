import { RxCross2 } from "react-icons/rx";
import {  db } from '../firebase'
import { useEffect , useState } from "react";
import { query , orderBy , collection , onSnapshot } from "firebase/firestore";
import JobDetail from "./JobDetail";

const Jobs = () => {

    const [jobs,setJobs]=useState([]);
    const [loading,setLoading]=useState(false);

    const filterJobs=id=>{
        setJobs((jobs)=>jobs.filter((job)=>job.id !== id))  
      }

      const handleClick=()=>{
        console.log("Hello World");
      }


    useEffect(() => {
        setLoading(true);
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
            });
            
          } catch (error) {
            console.error("Error fetching posts:", error);
          } finally{
            setLoading(false);
            console.log('====================================');
            console.log(jobs);('====================================');
          }
        };
        fetchData();
      }, []);



return (
    <div className="bg-zinc-50">
        <div className="w-[90vw]  mx-auto">
            <div className="flex text-black">
                <div className="w-[50%] ">
                    <div className="bg-blue-600">
                        <div className="flex justify-between gap-y-1 py-2 mx-5 text-white ">
                            <div>
                                <h1 className="text-md">Jobs in Pakistan</h1>
                                <span className="text-sm">5000 Results</span>
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

                    <div className="overflow-y-scroll min-h-[72.4vh] max-h-[72.5vh]">

                    {
                        jobs ? jobs.map((job) => {
                            return (
                                <div key={job.id} className="bg-white border-y cursor-pointer group"
                                onClick={handleClick}>
                                    <div className="flex items-start justify-between mx-1 py-3">
                                        <img src={job.data.image} alt="logo" className="w-[80px] h-[60px] object-contain"/>
                                        <div className="flex-1 text-sm">
                                            <h1 className="text-blue-500 font-semibold text-lg cursor-pointer group-hover:underline">{job.data.jobDetail.companyName}</h1>
                                            <p className="font-semibold">{job.data.jobDetail.role}</p>
                                            <p>{job.data.jobDetail.jobLocation}</p>
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
                        
                <div className="bg-white w-[50%] max-h-[81vh] overflow-y-scroll">
                    <JobDetail/>
                </div>
            </div>
        </div>
    </div>
);
};

export default Jobs;
