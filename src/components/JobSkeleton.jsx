import Skeleton from "react-loading-skeleton"

const JobSkeleton = () => {
  return (
    <div className="bg-white border-b-2">
    <div className="flex items-start  mx-1 py-3 gap-x-3 justify-between">
        <Skeleton style={{borderRadius:"100%"}} width={62} height={62} count={1}/>
        <div className="flex-1">
            <Skeleton width={200}  />
            <Skeleton width={115} />
            <Skeleton width={115} />
        </div>
        <div className="p-1">
        <Skeleton style={{borderRadius:"100%"}} width={20} height={20} count={1}/>
        </div>
    </div>
    </div>
  )
}

export default JobSkeleton