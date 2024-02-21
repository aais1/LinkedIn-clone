import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { IoImageOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useRef } from "react";

const InputField = () => {
  const user = useSelector((state) => state.auth.user);

  const [post, setPost] = useState("");
  const inputRef = useRef();

  const addPost = async (e) => {
    e.preventDefault();
    if (post.length > 1) {
      try {
        inputRef.current.placeholder = "Start a Post";
        const docRef = await addDoc(collection(db, "posts"), {
          content: post,
          name: user?.displayName,
          profileURL: user?.photoURL,
          email: user?.email,
          timestamp: serverTimestamp(),
          postLikes: 0,
          postComments: 0,
          likedBy: [],
          comments: [],
        });
        console.log("Document written with ID: ", docRef.id);
        setPost("");
        inputRef.current.style.borderColor = "black";
      } catch (e) {
        console.error("Error adding document: ", e);
        inputRef.current.style.borderColor = "red";
      }
    } else {
      inputRef.current.placeholder = "Enter Some text first";
      console.log("err");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl space-y-4 p-2">
      <form onSubmit={addPost}>
        <div className="flex gap-x-4">
          <Avatar url={user?.photoURL} width={50} />
          <input
            type="text"
            className="flex-1 rounded-full px-4 border border-gray-500  outline-none focus:border-2 focus:border-black"
            placeholder="Start a post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            ref={inputRef}
          />
        </div>
        <button
          type="submit"
          className="lg:hidden block relative left-[4.5rem] top-3 text-white px-3 py-1  rounded-full text-sm hover:bg-blue-800 duration-150 bg-blue-500 font-semibold"
        >
          Post
        </button>
      </form>
      <div className="flex space-x-2 items-center justify-evenly">
        <label htmlFor="ip-field">
        <input type="file" id="ip-field"  accept="image/png" className="hidden" />
        <div className="flex items-center gap-x-1 cursor-pointer hover:bg-slate-300 p-3 rounded-md">
          <IoImageOutline style={{ color: "steelblue", fontSize: "1.7rem" }} />
          <h1>Media</h1>
        </div>
        </label>
        <div className="flex items-center gap-x-1 cursor-pointer hover:bg-slate-300 p-3 rounded-md">
          <SlCalender style={{ color: "brown", fontSize: "1.7rem" }} />
          <h1>Event</h1>
        </div>
        <div className="flex items-center gap-x-1 cursor-pointer hover:bg-slate-300 p-3 rounded-md">
          <SlCalender style={{ color: "red", fontSize: "1.7rem" }} />
          <h1>Write Article</h1>
        </div>
      </div>
    </div>
  );
};

export default InputField;
