import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import  HeaderItem  from './HeaderItem'

const MobileMenu = () => {
  return (
    <div className="">
    <div className="flex gap-x-2">
        <HeaderItem
         Icon={FaHome}
         color="gray"
         title="Home" 
         className="text-blue-50"/>
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
    </div>
    </div>
  )
}

export default MobileMenu