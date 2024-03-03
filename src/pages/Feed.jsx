import { useEffect, useState } from "react";
import {
  LeftSideBar,
  RightSideBar,
  Discover,
  Post,
  InputField,
  PostSkeleton
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { db } from '../firebase'
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth } from '../firebase'
import { onAuthStateChanged } from "firebase/auth";
import { login } from "../features/authSlice/authSlice";

const Feed = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  document.title = "LinkedIn | Feed";

  useEffect(() => {
    setLoading(true);
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
          setLoading(false);
        });

      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
        console.log("login");
      }
      
    });
  }, [dispatch]);

  return (
    <>
      <div className="bg-zinc-50 pt-6">
        <div className="w-[95vw] md:w-[80vw] mx-auto flex gap-x-0 md:gap-x-6">
          <div className="flex-none ">
            <LeftSideBar />
            <Discover />
          </div>

          <div className="flex-1">
            <InputField />
            <hr />
            <div className="flex flex-col space-y-4 mt-4">
              {(loading) ? (
                <>
                <div className="flex flex-col gap-y-6">
                 <PostSkeleton/>
                 <PostSkeleton/>
                </div>
                </>
              ) : (
                posts && posts.map(({ id, data: { content, name, profileURL, uid, timestamp, postLikes, postComments, comments, likedBy } }) => (
                  <Post key={id} id={id} content={content} name={name} profileURL={profileURL} uid={uid} timestamp={timestamp} postComments={postComments} comments={comments} likedBy={likedBy} />
                ))
              )}
            </div>
          </div>
          <div className="flex-none">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
