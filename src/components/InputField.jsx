import Avatar from "./Avatar";
import InputItem from "./InputItem";
import { useSelector } from "react-redux";
import { IoImageOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { RiPagesLine } from "react-icons/ri";
import { collection, addDoc , serverTimestamp  } from "firebase/firestore";
import { db } from '../firebase';
import { useState , useRef } from "react";

const InputField = () => {
    const user = useSelector(state => state.auth.user);
  
    const [post, setPost] = useState();
    const inputRef=useRef();

    const addPost = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                content: post,
                author:{
                  name:user.displayName,
                  profileURL:user.photoURL,
                  email:user.email,
                  createdAt: serverTimestamp()
                }
            });
            console.log("Document written with ID: ", docRef.id);
            setPost('');
            inputRef.current.style.borderColor = "black"
        } catch (e) {
            console.error("Error adding document: ", e);
            inputRef.current.style.borderColor = "red"
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-xl space-y-2 p-2">
            <form onSubmit={addPost}>
                <div className="flex gap-x-4">
                    <Avatar url={user.photoURL} width={50} />
                    <input
                        type="text"
                        className="flex-1 rounded-full px-4 border border-gray-500  outline-none focus:border-2 focus:border-black"
                        placeholder="Start a post"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        ref={inputRef}
                    />
                </div>
            </form>
            <div className="flex space-x-2 items-center justify-evenly">
                <InputItem title="Media" Icon={IoImageOutline} color="steelblue" />
                <InputItem title="Event" Icon={SlCalender} color="brown" />
                <InputItem title="Write Article" Icon={RiPagesLine} color="red" />
            </div>
        </div>
    );
}

export default InputField;
