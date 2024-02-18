import React from 'react'

const InputItem = ({Icon,title,color}) => {
  return (
    <div className='flex items-center gap-x-1 cursor-pointer hover:bg-slate-300 p-3 rounded-md'>
        <Icon style={{color:color,fontSize:"1.7rem"}}/>
        <h1>{title}</h1>
     </div>
  )
}

export default InputItem