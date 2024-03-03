import { useState } from 'react';
import { useSelector } from 'react-redux'

const JobDetail = () => {
    // {  title, company, location, type, level, years, country, skills, posted, description}
    const job=useSelector(store=>store.job.job)

    if (!job) {
        return <h1></h1>;
    }else
        {const {data}=job;
        const {jobDetail,postedBy}=data;
        const {companyName , description,jobLocation,role}=jobDetail;
        const {companyEmployees , companySkills , postedOn}=postedBy;

        
  return (
    <div className="p-4">
                    <h1 className="text-xl font-semibold">{role}</h1>
                    <span className="text-xs text-gray-500">{companyName}· {jobLocation} · 2 weeks ago · Over 100 applicants</span>
                    
                    <div className="flex flex-col mt-4 gap-y-4 text-sm text-gray-500">
                            <span >On-site  Full-time  Mid-Senior level</span>
                            <span >{companyEmployees}+ employees · {companySkills}</span>
                            <span >Skills · Banking</span>
                            <span >See how you compare to over 100 other applicants. Try Premium for PKR0</span>
                    </div>

                    <div className="flex mt-6 gap-x-4  font-semibold">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Easy Apply</button>
                            <button className="outline outline-1 border border-transparent hover:border-blue-500 duration-100 outline-blue-500 px-4 py-2 text-blue-500 rounded-full hover:bg-blue-50">Save</button>
                    </div>

                    <div className="border rounded-md p-4 my-3">
                            <h1 className="text-xl font-semibold">Meet the hiring team</h1>
                            <div className="flex mt-1 gap-x-2 items-start justify-between">
                                    <div>img</div>
                                    <div>
                                            <h1>Ali Raza</h1>
                                            <p>Head of Digital Strategy & Transformation</p>
                                    </div>
                                    <button className="border hover:border-black duration-100 px-2 py-1 rounded-full">Message</button>
                            </div>
                    </div>

                    <div>
                            <div className="p-4">
                            <h1 className="text-xl font-semibold my-2">About the job</h1>
                            <div className="flex flex-col gap-y-4">
                                <div>
                            <p className="text-sm font-semibold">Digital Transformation Strategy Execution</p>
                                <div>{description}</div>
                            </div>
                            </div>
                            <div className="mt-6 font-semibold text-gray-500">Posted on {postedOn.toDate().toDateString()}</div>
                            </div>
                    </div>

                </div>
  )
}
}

export default JobDetail
