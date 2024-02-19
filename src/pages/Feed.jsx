import { useEffect, useState } from "react";
import {
  LeftSideBar,
  RightSideBar,
  Discover,
  Post,
  InputField
} from "../components";
import { useSelector } from "react-redux";
import { db } from '../firebase'
import { getDocs , collection , onSnapshot } from "firebase/firestore"; 

const Feed = () => {
  const user = useSelector((state) => state.auth.user);
  
  const [posts,setPosts]=useState([]);

//   useEffect(() => {
//   db.collection("posts").onSnapshot((snapshot) => {
//     setPosts(
//       snapshot.docs.map((doc) => ({
//         id: doc.id,
//         data: doc.data(),
//       }))
//     );
//   });
// }, []);


useEffect(() => {
  const fetchData = async () => {
    try {
      // Listen for changes using onSnapshot
      onSnapshot(collection(db, "posts"), (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  fetchData();
}, []);

  return (
    <div className="bg-zinc-50 pt-6">
      <div className="w-[80vw] mx-auto flex gap-x-6">
        <div className="flex-none ">
          <LeftSideBar />
          <Discover />
        </div>

        <div className="flex-1 space-y-6 ">
          <InputField/>
          <hr />

          {
          posts && posts.map(({ id, data: {  content, author } }) => (
            <Post key={id} content={content} {...author} />
          ))
          }
        </div>
        <div className="flex-none">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Feed;
