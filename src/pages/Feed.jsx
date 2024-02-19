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
import { getDocs , collection ,query, onSnapshot, orderBy } from "firebase/firestore"; 
import Login from './Login'

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
      const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

      onSnapshot(q, (snapshot) => {
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
<>
      { user ? (
        <div className="bg-zinc-50 pt-6">
          <div className="w-[80vw] mx-auto flex gap-x-6">
            <div className="flex-none ">
              <LeftSideBar />
              <Discover />
            </div>

            <div className="flex-1 space-y-6 ">
              <InputField />
              <hr />

              {posts &&
                posts.map(({ id, data: { content, name, profileURL, email, timestamp } }) => (
                  <Post key={id} content={content} name={name} profileURL={profileURL} email={email} timestamp={timestamp} />
                ))}
            </div>
            <div className="flex-none">
              <RightSideBar />
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Feed;
