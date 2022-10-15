import React from "react";
import { GiJamesBondAperture } from "react-icons/gi";
import { HiOutlineSearch } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { FiFlag } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineShop, AiFillMessage, AiFillBell } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineExpandMore } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/*left*/}
      <div className="flex min-w-fit">
        <GiJamesBondAperture style={{ color: "blue" }} size={"2.5rem"} />
      </div>
      <div className="flex items-center space-x-2 px-2 ml-2 h-12 rounded-full bg-gray-100 text-gray-500">
        <HiOutlineSearch className="" />
        <input
          className="font-Poppins hidden lg:inline-flex bg-transparent focus:outline-none"
          type="text"
          placeholder="Search anything.."
        />
      </div>

      {/*center*/}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <FiHome className="mx-auto" size={"1.4rem"} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <FiFlag className="mx-auto" size={"1.4rem"} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdOndemandVideo className="mx-auto" size={"1.5rem"} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <AiOutlineShop className="mx-auto" size={"1.6rem"} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameControllerOutline className="mx-auto" size={"1.6rem"} />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <GiJamesBondAperture style={{ color: "blue" }} size={"2.5rem"} />
        <p className="hidden xl:inline-flex font-Poppins font-semibold whitespace-nowrap p-3 max-w-xs">
          Username
        </p>
        <CgMenuGridO
          size={"2.5rem"}
          className="hidden lg:inline-flex bg-gray-200 h-10  text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={"2.5rem"}
          className="hidden lg:inline-flex bg-gray-200 h-10 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={"2.5rem"}
          className="hidden lg:inline-flex bg-gray-200 h-10 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineExpandMore
          size={"2.5rem"}
          className="hidden lg:inline-flex bg-gray-200 h-10 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
