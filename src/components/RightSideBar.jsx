import { HiOutlineInformationCircle } from "react-icons/hi";


const RightSideBar = () => {
  return (
    <div className='hidden rounded-md bg-white lg:flex flex-col items-center border shadow-lg w-[100%]'>
      <div className='flex justify-between items-center gap-x-4 p-2'>
        <h1 className='text-md  font-semibold'>Add to Feed</h1>
        <HiOutlineInformationCircle style={{fontSize:'1.5rem'}}/>
      </div>
      <div className='text-xs py-2'>No Profiles Found</div>
    </div>
  )
}

export default RightSideBar