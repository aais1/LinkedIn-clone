 import JobsLeftBar from "../components/JobsLeftBar"
 import { JobsRightBar , RecentJobSearches , TopApplicant , Recommend} from "../components"

const Jobs = () => {

  document.title="LinkedIn | Jobs"

  return (
    <div className="bg-zinc-50 pt-4">
    <div className="w-[95vw] md:w-[85vw] mx-auto min-h-screen flex gap-x-0 md:gap-x-3 lg:gap-x-6 text-black">
            <div className="flex-none">
            <JobsLeftBar/>
            </div>
            <div className="flex-auto ">
              <div className="flex flex-col gap-y-4">
            <RecentJobSearches/> 
            <TopApplicant/>
            <Recommend/>
              </div>
            </div>
            <div className="flex-none hidden md:block">
            <JobsRightBar/>
            </div>
    </div>
  </div>
  )
}

export default Jobs