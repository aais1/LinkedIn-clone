import React from 'react'

import dummyImg from '../assets/profileDummy.jpg'

const Avatar = ({width}) => {
  return (
    <div >
        <img src={dummyImg}
        width={width}
        className='rounded-full text-sm cursor-pointer ' alt="profile" />
    </div>
  )
}

export default Avatar