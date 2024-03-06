import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import HeaderItem from "./HeaderItem";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import Avatar from "./Avatar";
import { FaCaretDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { MdFilterFrames } from "react-icons/md";

const Header = () => {
  const location = useLocation();
  const restrictedRoutes = ["/login", "/register", "/list-job"];
  const notAllowedRoutes = restrictedRoutes.some((loc) =>
    location.pathname.includes(loc)
  );

  const onJobSearchpage=location.pathname.includes("/jobs/search")

  const user = useSelector((state) => state.auth.user);
  const [profileMenu, setProfileMenu] = React.useState(false);
  const navigate = useNavigate();
  const showProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };

  //todo handle signout
  const handleSignOut = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <>
      {!notAllowedRoutes ? (
        <div className="sticky top-0 bg-white z-50 border-b">
          <div className={`w-[95vw] md:px-6 ${!onJobSearchpage ? `md:w-[85vw]` : `md:w-[90vw]`} mx-auto`}>
            <div className="py-2 flex justify-between items-center gap-x-1 md:gap-x-2">
              <div className="flex h-[40px] items-center">
                <Link to="/feed">
                  <img src="logo.png" alt="logo" width={38} />
                </Link>
                {location.pathname !== "/jobs/search" && (
                  <div
                    className=" hidden md:flex items-center bg-slate-100 gap-x-2 px-4 rounded-md group text-black
             focus:outline-black h-[35px] md:w-[200px] lg:w-[320px]"
                  >
                    <HiMagnifyingGlass style={{ fontSize: "1.2rem" }} />
                    <input
                      type="text"
                      className="p-1 bg-transparent text-sm focus:border-none focus:outline-none text-black
             placeholder:text-black "
                      placeholder="Search"
                    />
                  </div>
                )}

                {location.pathname === "/jobs/search" && (
                  <div className="hidden md:flex gap-x-1">
                    <div
                      className=" hidden md:flex items-center bg-slate-100 gap-x-2 px-4 rounded-md group text-black
                focus:outline-black h-[35px] w-[320px]"
                    >
                      <HiMagnifyingGlass style={{ fontSize: "1.2rem" }} />
                      <input
                        type="text"
                        className="p-1 bg-transparent text-sm focus:border-none focus:outline-none text-black
                placeholder:text-black "
                        placeholder="Search by title,skill or company"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="p-1 bg-slate-100 px-4 h-[35px] text-sm focus:border-none focus:outline-none text-black
                placeholder:text-black rounded-md "
                        placeholder="Location"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className=" flex gap-x-3 lg:gap-x-4 ">
                <HeaderItem Icon={FaHome} color="gray" title="Home" url="/feed" />
                <HeaderItem
                  Icon={BsFillPeopleFill}
                  color="gray"
                  title="My Network"
                  url=""
                />
                <HeaderItem
                  Icon={BsFillHandbagFill}
                  color="gray"
                  title="Jobs"
                  url="/jobs"
                />
                <HeaderItem
                  Icon={IoChatbubbleEllipses}
                  color="gray"
                  title="Messaging"
                  url=""
                />

                <HeaderItem Icon={FaBell} color="gray" title="Notifications" url="" />
                <Link to="/list-job">
                  <div className="flex text-md items-center hover:text-black text-gray-500 font-semibold flex-col">
                  <MdFilterFrames style={{fontSize:"1.5rem"}}/>
                  <div className="hidden md:block">Post a Job</div>
                  </div>
                </Link>
              </div>
              <button onClick={showProfileMenu}>
                <div className="relative top-0">
                  <div className=" flex flex-col text-xs items-center">
                    <Avatar url={user?.photoURL} width={35} />
                    <div className="hidden md:flex">
                      <p>Me</p>
                      <FaCaretDown
                        style={{ fontSize: "1rem", color: "gray" }}
                      />
                    </div>
                  </div>
                  {profileMenu && (
                    <div className="absolute -right-6 md:-right-10 bg-white w-[110px] border shadow-xl p-2 rounded-md gap-y-1 text-sm ">
                      <Link to={`/profile/${user.uid}`}>
                        <p className="px-4 py-2 hover:bg-blue-50 ">Profile</p>
                      </Link>
                      <p className="px-4 py-2 hover:bg-blue-50">Settings</p>
                      {user ? (
                        <p
                          className="px-4 py-2 hover:bg-blue-50 "
                          onClick={handleSignOut}
                        >
                          Sign Out
                        </p>
                      ) : (
                        <p
                          className="px-4 py-2 hover:bg-blue-50 "
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          Log In
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
