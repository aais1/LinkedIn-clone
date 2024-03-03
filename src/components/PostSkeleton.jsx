import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PostSkeleton = () => {
  return (
    <>
    <div className='md:block hidden'  >
    <Skeleton count={7}/>
    </div>
    <div className='md:hidden block'  >
    <Skeleton count={5}/>
    </div>
    </>
  )
}

export default PostSkeleton