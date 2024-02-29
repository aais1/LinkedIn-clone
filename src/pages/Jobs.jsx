 import JobsLeftBar from "../components/JobsLeftBar"
const Jobs = () => {
  return (
    <div className="bg-zinc-50 pt-4">
    <div className="w-[95vw] md:w-[85vw] mx-auto min-h-screen flex gap-x-0 md:gap-x-6 text-black">
        <div className="flex">
            <div className="flex-none">
            <JobsLeftBar/>
            </div>
            <div className="flex-1"></div>
            <div className="flex-none"></div>
        </div>
        
    </div>
  </div>
  )
}

export default Jobs