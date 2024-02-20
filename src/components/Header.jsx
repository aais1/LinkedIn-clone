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
import {auth} from '../firebase'

const Header = () => {
  const location = useLocation();
  const restrictedRoutes = ["/login", "/register"];
  const notAllowedRoutes = restrictedRoutes.some((loc) =>
    location.pathname.includes(loc)
  );
  const user = useSelector((state) => state.auth.user);
  const [profileMenu, setProfileMenu] = React.useState(false);
  const navigate=useNavigate();
  const showProfileMenu = () => {
    setProfileMenu(!profileMenu);
  }

  //todo handle signout
  const handleSignOut=()=>{
    auth.signOut();
    navigate('/login');
  }

  return (
    <>
      {!notAllowedRoutes ? (
        <div className="sticky top-0 bg-white z-50 border-b">
          <div className="w-[80vw] mx-auto">
            <div className="py-2 flex justify-between gap-x-2">
              <div className="flex h-[40px] items-center">
                <Link to="/feed">
                  <img src="logo.png" alt="logo" width={38} />
                </Link>
                <div
                  className="flex items-center bg-slate-100 gap-x-2 px-4 rounded-md group text-black
             focus:outline-black h-[35px] w-[320px]"
                >
                  <HiMagnifyingGlass style={{ fontSize: "1.2rem" }} />
                  <input
                    type="text"
                    className="p-1 bg-transparent text-sm focus:border-none focus:outline-none text-black
             placeholder:text-black "
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="flex gap-x-8">
                <HeaderItem Icon={FaHome} color="gray" title="Home" />
                <HeaderItem
                  Icon={BsFillPeopleFill}
                  color="gray"
                  title="My Network"
                />
                <HeaderItem
                  Icon={BsFillHandbagFill}
                  color="gray"
                  title="Jobs"
                />
                <HeaderItem
                  Icon={IoChatbubbleEllipses}
                  color="gray"
                  title="Messaging"
                />
                <HeaderItem Icon={FaBell} color="gray" title="Notifications" />

                <button onClick={showProfileMenu}>
                  <div className="relative top-0">
                  <div className=" flex flex-col text-xs items-center">
                    <Avatar url={user?.photoURL} width={27} />
                    <div className="flex">
                      <p>Me</p>
                      <FaCaretDown style={{ fontSize: "1rem", color: "gray" }} />
                    </div>
                  </div>
                  {
                    profileMenu && (
                      <div className="absolute -right-10 bg-white w-[110px] border shadow-xl p-2 rounded-md gap-y-1 text-sm ">
                        <Link to="/profile">
                          <p className="px-4 py-2 hover:bg-blue-50 ">Profile</p>
                        </Link>
                        <p className="px-4 py-2 hover:bg-blue-50">Settings</p>
                        { user ? <p className="px-4 py-2 hover:bg-blue-50 "
                        onClick={handleSignOut}>Sign Out</p>
                       : <p className="px-4 py-2 hover:bg-blue-50 "
                       onClick={()=>{
                        navigate('/login');
                       }}>Log In</p>}
                      </div>
                    )
                  }
                  </div>
                </button>
              </div>
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
