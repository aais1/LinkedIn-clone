import React from 'react'
import { Link } from 'react-router-dom'

const HeaderItem = ({Icon,title,color}) => {
  const [isHovered,setIsHovered]=React.useState(false)
  return (
    <Link to={title.toLowerCase()==="home" ? 'feed' : title.toLowerCase()}>
    <div className='group cursor-pointer '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
    <div className='flex flex-col text-xs items-center'>
        <div className="">
        <Icon style={{fontSize:'1.7rem',color: isHovered ? 'black' : color}}
         />
        </div>
        <p className='group-hover:text-black text-[10px] md:text-sm font-semibold hidden md:block text-gray-500'>{title}</p>
    </div>
    </div>
    </Link>
  )
}

export default HeaderItem