/* eslint-disable react/prop-types */
import React from 'react'
import Avatar from './Avatar'
import { useSelector } from 'react-redux'; 
import { FaPlus } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

const Post = ({content,name,email,profileURL,timestamp}) => {

  const [showMore, setShowMore] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [showComment, setShowComment] = React.useState(false);
 
  const user=useSelector(state=>state.auth.user);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=' bg-white rounded-lg  space-y-2 px-2 shadow-lg pt-2'>
    <div className='flex items-center justify-between gap-x-4'>
        <div className='flex items-center gap-x-4'>
      <Avatar url={profileURL} width={50}/>
      <div className='text-xs'>
        <p className='text-md font-semibold'>{name}</p>
        <p>{timestamp?.toDate().toDateString()+" "+
        timestamp?.toDate().getHours()+":"+timestamp?.toDate().getMinutes()}</p>
      </div>
      </div>
      <div className='flex items-center h-[37px] px-3 rounded-md gap-x-3 mr-6 text-blue-500 font-semibold cursor-pointer hover:bg-blue-100'>
        <FaPlus/>
        Follow
      </div>
    </div>
    <div className='text-[14px]'>
        <p className={`${showMore ? `line-clamp-none` : `line-clamp-2`} `}>{content}
        </p>
        { content.length > 210 ?
          <span className={`text-blue-500 cursor-pointer ${showMore ? 'hidden' : ''}`} onClick={toggleShowMore}>
        Read more
        </span> : ''
        }
    </div>
    <div className='flex justify-around text-sm text-gray-700  font-normal border-t'>
      <div className="flex items-center gap-x-1 hover:cursor-pointer hover:text-black duration-75  px-2 py-3 my-1 hover:bg-blue-50 rounded-md  ">
        <FaRegThumbsUp style={{fontSize:'1.5rem'}}/>
        Like
        </div>
    <div className="flex items-center gap-x-1 hover:cursor-pointer hover:text-black duration-150   px-2 py-3 my-1 hover:bg-blue-50 rounded-md "
        onClick={()=>{
          setShowComment(!showComment)
        }}>
    <BiCommentDots 
    style={{fontSize:'1.5rem'}}
     />
    Comments
    </div>
    <div className="flex items-center gap-x-1 hover:cursor-pointer hover:text-black duration-150  px-2 py-3 my-1 hover:bg-blue-50 rounded-md "> 
    <FaArrowsTurnToDots style={{fontSize:'1.5rem'}}/>
    Repost
    </div>
    <div className="flex items-center gap-x-1 hover:cursor-pointer hover:text-black duration-150  px-2 py-3 my-1 hover:bg-blue-50 rounded-md ">
    <LuSend style={{fontSize:'1.5rem'}}/>
    Share
    </div>
    </div>
  { showComment &&
  
   <div className='p-2 flex'>
      <Avatar width={40} url={user.photoURL} />
      <input type="text"
      className='flex-1 ml-2 border rounded-full bg-white p-2'
      placeholder='Enter a comment'
      value={comment}
      onChange={(e)=>{
        setComment(e.target.value)
      }}
        />
        
    </div>}
    
        {
          showComment && comment.length > 2 ?
          <div className='ml-14'>
          <button className='text-white px-3 py-1  mb-4 rounded-full text-sm hover:bg-blue-800 duration-150 bg-blue-500 font-semibold' onClick={()=>{
            setComment('')
          }}>Post</button>
          </div> : ''
        }
      </div>
  )
}

export default Post