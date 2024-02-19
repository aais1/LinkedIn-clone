import React from 'react'

const HeaderItem = ({Icon,title,color}) => {
  const [isHovered,setIsHovered]=React.useState(false)
  return (
    <div className='group cursor-pointer '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
    <div className='flex flex-col text-xs items-center'>
        <div className="">
        <Icon style={{fontSize:'1.5rem',color: isHovered ? 'black' : color}}
         />
        </div>
        <p className='group-hover:text-black font-semibold text-gray-500'>{title}</p>
    </div>
    </div>
  )
}

export default HeaderItem