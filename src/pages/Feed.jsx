import React from 'react';
import { LeftSideBar, RightSideBar, Discover ,Avatar , InputItem , Post} from '../components';
import { IoImageOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { RiPagesLine } from "react-icons/ri";

const Feed = () => {
  return (
    <div className='bg-zinc-50 pt-6'>
    <div className='w-[80vw] mx-auto flex gap-x-6'>
      <div className='flex-none '>
        <LeftSideBar />
        <Discover />
      </div>

      <div className='flex-1 space-y-6 ' >
        <div className=' bg-white rounded-lg shadow-xl  space-y-2 p-2'>
        <div className='flex gap-x-4'>
          <Avatar width={50}/>
          <input type="text"
           className='flex-1 rounded-full px-2 border border-gray-500'
           placeholder='Start a post'/>
        </div>
        <div className='flex space-x-2 items-center justify-evenly'>
        <InputItem title="Media" Icon={IoImageOutline} color="steelblue"/>
        <InputItem title="Event" Icon={SlCalender} color="brown"/>
        <InputItem title="Write Article" Icon={RiPagesLine} color="red"/>
        </div>
        </div>
        <hr />

        <Post content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta iste in velit quidem qui optio corporis voluptate id iure animi minima deserunt sequi delectus quaerat voluptatem, numquam culpa libero?"/>
        
        <Post content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta iste in velit quidem qui optio corporis voluptate id iure animi minima deserunt sequi delectus quaerat voluptatem, numquam culpa libero?"/>
        
        <Post content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta iste in velit quidem qui optio corporis voluptate id iure animi minima deserunt sequi delectus quaerat voluptatem, numquam culpa libero?"/>

        <Post content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta iste in velit quidem qui optio corporis voluptate id iure animi minima deserunt sequi delectus quaerat voluptatem, numquam culpa libero?"/>

        <Post content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta iste in velit quidem qui optio corporis voluptate id iure animi minima deserunt sequi delectus quaerat voluptatem, numquam culpa libero?"/>
      </div>

      <div className='flex-none'>
        <RightSideBar />
      </div>
    </div>
    </div>
  );
};

export default Feed;
