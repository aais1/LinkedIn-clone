import React from 'react'

const HeaderItem = ({Icon,title,color}) => {
  return (
    <div className='flex flex-col text-xs items-center'>
        <div className="hover:cursor-pointer hover:text-black">
        <Icon style={{fontSize:'1.5rem',color:color}} />
        </div>
        <p className='group-hover:text-black'>{title}</p>
    </div>
  )
}

export default HeaderItem