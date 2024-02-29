 import JobsLeftBar from "../components/JobsLeftBar"
 import { JobsRightBar , RecentJobSearches } from "../components"

const Jobs = () => {
  return (
    <div className="bg-zinc-50 pt-4">
    <div className="w-[95vw] md:w-[85vw] mx-auto min-h-screen flex gap-x-2 md:gap-x-6 text-black">
            <div className="flex-none">
            <JobsLeftBar/>
            </div>
            <div className="flex-auto">
            <RecentJobSearches/> 
            </div>
            <div className="flex-none">
            <JobsRightBar/>
            </div>
    </div>
  </div>
  )
}

export default Jobs