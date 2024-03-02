import { FaChevronDown } from "react-icons/fa";
import { Jobs } from "../components";

const SearchJobs = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="w-[95vw] px-6 md:w-[80vw] mx-auto gap-x-3 flex items-center">
          <button className="flex font-semibold items-center gap-x-2 rounded-2xl border-2 border-transparent text-white px-3 py-1 my-2 bg-green-700 hover:bg-green-900">
            Jobs <FaChevronDown />
          </button>
          <div className="text-gray-500 font-[50] text-[40px]">l</div>
          <button className="flex outline outline-gray-500 duration-200 hover:bg-slate-50 outline-1 border-[1.5px] border-transparent hover:border-gray-500  items-center text-black  font-semibold gap-x-2 rounded-2xl px-3 py-1 my-2 ">
            Date posted <FaChevronDown />
          </button>
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
          <div className="text-gray-500 font-[50] text-[40px]">l</div>
          <button className="flex outline outline-gray-500 duration-200 hover:bg-slate-50 outline-1 border-[1.5px] border-transparent hover:border-gray-500  items-center text-black  font-semibold gap-x-2 rounded-2xl px-3 py-1 my-2 ">
            All Filters
          </button>
        </div>
      </div>

        <Jobs />
    </>
  );
};

export default SearchJobs;
