import React from "react";
import Image from "next/image";
import { GiJamesBondAperture } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { MdGroups, MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import { signOut, useSession } from 'next-auth/react';

const Sidebar = () => {
  const {data: session} = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-xl cursor-pointer">
        <div className="flex min-w-fit">
          <Image src={session?.user.image} height={40} width={40} className="rounded-full cursor-pointer"/>
        </div>
        <p className="hidden xl:inline-flex font-Poppins font-semibold whitespace-nowrap p-3 max-w-xs">
        {session?.user.name}
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
