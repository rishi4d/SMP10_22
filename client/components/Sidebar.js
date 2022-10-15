import React from "react";
import { GiJamesBondAperture } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { MdGroups, MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-xl cursor-pointer">
        <div className="flex min-w-fit">
          <GiJamesBondAperture style={{ color: "blue" }} size={"2.5rem"} />
        </div>
        <p className="hidden xl:inline-flex font-Poppins font-semibold whitespace-nowrap p-3 max-w-xs">
          Username
        </p>
      </div> 
      <SidebarItem Icon={ImUsers} value="Users"/>
      <SidebarItem Icon={MdGroups} value="Friends"/>
      <SidebarItem Icon={AiOutlineShop} value="Marketplace"/>
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch"/>
      <SidebarItem Icon={BsStopwatch} value="Memories"/>
      <SidebarItem Icon={MdOutlineExpandMore} value="Memories"/>

    </div>
  );
};

export default Sidebar;
