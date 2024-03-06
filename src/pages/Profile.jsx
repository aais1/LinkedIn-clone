import { useSelector } from "react-redux";
import sidebarBg from "../assets/sidebarBg.png";
import { IoIosEye } from "react-icons/io";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDoc } from "firebase/firestore";

const Profile = () => {
  const url = window.location.href;
  const id = useParams().id;
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    document.title = `${user.displayName} | Linkedin`;
  }, []);
  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="w-[80vw] pt-6 mx-auto">
        <div className="flex gap-x-4 ">
          <div className="flex-1  rounded-md">
            <div className="rounded-md  bg-white">
              <img
                src={sidebarBg}
                alt="bg"
                className="object-cover w-[100%] h-[180px]"
              />
              <img
                src={user.photoURL}
                className="rounded-full w-32 -mt-20 ml-4"
                alt="pfp"
              />
              <div className="p-2 space-y-4">
                <h1 className="font-semibold text-xl ">{user.displayName}</h1>
                <div className="flex gap-x-2">
                  <button className="bg-blue-500 text-white font-semibold rounded-full px-2  hover:bg-blue-800">
                    Open to
                  </button>
                  <button className="border-[1.5px] border-transparent outline outline-1 outline-blue-500 hover:bg-blue-100 hover:border-blue-500 duration-300 rounded-full text-blue-500 font-semibold px-2 ">
                    Add profile section
                  </button>
                  <button className="border-[1.5px] border-transparent outline outline-1 outline-gray-500 hover:bg-gray-100 hover:border-gray-500 duration-300 rounded-full text-gray-500 font-semibold px-2 ">
                    More
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2 bg-white mt-4 p-2 rounded-md">
              <h1>Suggested for you</h1>
              <div className="flex gap-x-4 border-b-2 pb-4 mb-2">
                <IoIosEye />
                <span className="text-sm text-gray-500 font-semibold">
                  Private to you
                </span>
              </div>
            </div>
          </div>

          <div className="flex-[0.25] ">
            <div className="bg-white rounded-md">
              <div className="flex flex-col p-2 ">
                <div className="border-b-2 pb-2">
                  <div className="flex justify-between">
                    <h1 className="text-md text-gray-500 font-semibold">
                      Profile Language
                    </h1>
                    <button>🎈</button>
                  </div>
                  <span className="text-xs">English</span>
                </div>

                <div className="border-b-2 pb-2">
                  <div className="flex justify-between">
                    <h1 className="text-md text-gray-500 font-semibold">
                      Public profile & URL
                    </h1>
                    <button>🎈</button>
                  </div>
                  <p className="text-xs break-all">{url}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
