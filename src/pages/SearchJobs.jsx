import { FaChevronDown } from "react-icons/fa";
import { Jobs } from "../components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { login,logout } from "../features/authSlice/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SearchJobs = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch(login(user))
      }else{
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <>
      <div className="bg-white shadow-md">
        <div className="w-screen px-[0.5px] md:px-6 md:w-[80vw] md:mx-auto gap-x-1 md:gap-x-3 flex justify-between items-center">
          <button className="flex font-semibold items-center gap-x-1 md:gap-x-2 rounded-2xl border-2 border-transparent text-white p-1 md:px-3 py-1 my-2  bg-green-700 hover:bg-green-900">
            Jobs <FaChevronDown />
          </button>

          <div className="text-gray-500 font-[50] text-[40px]">l</div>
          <button className="flex outline outline-gray-500 duration-200 hover:bg-slate-50 outline-1 border-[1.5px] border-transparent hover:border-gray-500  items-center text-black  font-semibold gap-x-1 md:gap-x-2 rounded-2xl p-1 md:px-3 py-1 my-2 ">
            Date posted <FaChevronDown />
          </button>
          <div className="hidden lg:flex gap-x-3">
            <button className="flex outline outline-gray-500 duration-200 hover:bg-slate-50 outline-1 border-[1.5px] border-transparent hover:border-gray-500  items-center text-black  font-semibold gap-x-2 rounded-2xl px-3 py-1 my-2 ">
              Experience level <FaChevronDown />
            </button>
            <button className="flex outline outline-gray-500 duration-200 hover:bg-slate-50 outline-1 border-[1.5px] border-transparent hover:border-gray-500  items-center text-black  font-semibold gap-x-2 rounded-2xl px-3 py-1 my-2 ">
              Company <FaChevronDown />
            </button>
            <button className="flex outline outline-gray-500 duration-200 hover:bg-slate-50 outline-1 border-[1.5px] border-transparent hover:border-gray-500  items-center text-black  font-semibold gap-x-2 rounded-2xl px-3 py-1 my-2 ">
              Remote <FaChevronDown />
            </button>
            <button className="flex outline outline-gray-500 duration-200 hover:bg-slate-50 outline-1 border-[1.5px] border-transparent hover:border-gray-500  items-center text-black  font-semibold gap-x-2 rounded-2xl px-3 py-1 my-2 ">
              Easy Apply
            </button>
          </div>
          <div className="text-gray-500 font-[50] text-[40px]">l</div>
          <button className="flex outline outline-gray-500 duration-200 hover:bg-slate-50 outline-1 border-[1.5px] border-transparent  hover:border-gray-500  items-center text-black  font-semibold gap-x-1 md:gap-x-2 rounded-2xl p-1 md:px-3 py-1 my-2 ">
            All Filters
          </button>
        </div>
      </div>

      <Jobs />
    </>
  );
};

export default SearchJobs;
