import dummyImg from '../assets/profileDummy.jpg'

const Avatar = ({url,width}) => {
  return (
    <div >
        <img src={url ? url : dummyImg}
        width={width}
        className='rounded-full text-sm cursor-pointer ' alt="profile" />
    </div>
  )
}

export default Avatar