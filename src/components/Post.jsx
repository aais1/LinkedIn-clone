/* eslint-disable react/prop-types */
import React from 'react'
import Avatar from './Avatar'
import { useSelector } from 'react-redux'; 
import { FaPlus } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import {db} from '../firebase';
import { updateDoc , doc, arrayRemove } from 'firebase/firestore';
import { arrayUnion } from 'firebase/firestore';

const Post = ({id,content,name,uid,profileURL,timestamp,comments,likedBy}) => {

  const user=useSelector(state=>state.auth.user);
  const [showMore, setShowMore] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [showComment, setShowComment] = React.useState(false);

  //setting the number of likes
  const [likes, setLikes] = React.useState(likedBy.length);

  //checking if the current user has liked this post or not
  const [liked,setLiked]=React.useState(!likedBy.every((like)=>like.uid!==user.uid));

  const [comnts,setComnts]=React.useState(comments);
  //no of comnts
  const [numOfComments, setnumOfComments] = React.useState(comments.length);
  const [loading,setLoading]=React.useState(false);

  React.useEffect(() => {
    setComnts(comments);
  }, [comments]);


  const {Uid,photoURL,displayName}=user;

  const updateLikes = async () => {
    const docRef = doc(db, 'posts', id);
    try {
      await updateDoc(docRef, {
        likedBy: arrayUnion({Uid,photoURL,displayName})
      });
      setLikes((likes) => likes + 1);
      setLiked(true);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const decreaseLikes=async()=>{
    const docRef = doc(db, 'posts', id);
    try {
      await updateDoc(docRef, {
        likedBy: arrayRemove({Uid,photoURL,displayName})
      });
      setLikes((likes) => likes - 1);
      setLiked(false);

    } catch (error) {
      console.error('Error updating document:', error);
    }
  }

  const handleComment=async()=>{
    setLoading(true)
    const docRef=doc(db,"posts",id)
    try{
      await updateDoc(docRef,{
        comments:arrayUnion({comment,photoURL,displayName,Uid})
      })
      setComment('')
      setnumOfComments((prevnumOfComnts)=>prevnumOfComnts+1);
      setLoading(false)
    }catch(error){
      console.error('Error updating document:', error);
    }
    
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=' bg-white rounded-lg  space-y-2 px-2 shadow-xl pt-2 mb-4'>
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
    <div className='flex gap-x-4'>
    <span className='text-xs text-gray-500'>{likes} Likes</span>
    <span className='text-xs text-gray-500'>{numOfComments} Comments</span>
    </div>
    <div className='flex justify-around text-sm text-gray-700  font-normal border-t'>

        
      { !liked?
        <div className="flex items-center gap-x-1 hover:cursor-pointer hover:text-black duration-75  px-2 py-3 my-1 hover:bg-blue-50 rounded-md  "
        onClick={updateLikes}>
        <FaRegThumbsUp style={{fontSize:'1.5rem'}}/>
        Like
        </div>
        :
        <div className="flex items-center gap-x-1 text-blue-500 hover:cursor-pointer duration-75  px-2 py-3 my-1  rounded-md  "
        onClick={decreaseLikes}>
        <FaRegThumbsUp style={{fontSize:'1.5rem'}}/>
        Like
        </div>
        
        }

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
  <div className=''>
    {/* Comment Section */}
    { comments.length > 0 &&
  <div className='flex flex-col gap-y-2 p-2 text-sm'>
  {
    comnts.map((comnt,index)=>{
      return(
        <div key={index} className='flex border-t py-2 items-center gap-x-4'>
        <Avatar  url={comnt.photoURL} width={40}/>
        <div>
          <p className='font-semibold'>{comnt.displayName}</p>
          <p>{comnt.comment}</p>
        </div>
        </div>
      )
    })
  }
  </div>
}
  {/* Comment Input Field */}
   <div className='p-2 flex'>
      <Avatar width={40} url={user.photoURL} />
      <input type="text"
      className={`${loading ? `text-xs flex-1 text-gray-500 cursor-not-allowed`:``}flex-1 ml-2 border rounded-full bg-white p-2`}
      disabled={loading}
      placeholder='Enter a comment'
      value={loading ? 'Sending' : comment}
      onChange={(e)=>{
        setComment(e.target.value)
      }}
        />
        
    </div>
    </div>
    }
       {
          showComment && comment.length > 0 ?
          <div className='ml-14'>
          <button className='text-white px-3 py-[2px]  mb-4 rounded-full text-sm hover:bg-blue-800 duration-150 bg-blue-500 font-semibold' 
          onClick={handleComment}>Post</button>
          </div> : ''
        }
      </div>
  )
}

export default Post