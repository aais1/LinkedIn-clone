import React from 'react'
import Avatar from './Avatar'
import { FaPlus } from "react-icons/fa";

const Post = ({content}) => {

  const [showMore, setShowMore] = React.useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=' bg-white rounded-lg  space-y-2 p-2 shadow-lg'>
    <div className='flex items-center justify-between gap-x-4'>
        <div className='flex items-center gap-x-4'>
      <Avatar width={50}/>
      <div className='text-xs'>
        <p className='text-md font-semibold'>Ali Aais</p>
        <p>Description</p>
      </div>
      </div>
      <div className='flex items-center h-[37px] px-3 rounded-md gap-x-3 mr-6 text-blue-500 font-semibold cursor-pointer hover:bg-blue-100'>
        <FaPlus/>
        Follow
      </div>
    </div>
    <div className='text-[14px]'>
        <p>Post Content</p>
        <p className={`${showMore ? `line-clamp-none` : `line-clamp-2`} `}>{content}
        </p>
        <span className={`text-blue-500 cursor-pointer ${showMore ? 'hidden' : ''}`} onClick={toggleShowMore}>
        Read more
      </span>
    </div>
    </div>
  )
}

export default Post