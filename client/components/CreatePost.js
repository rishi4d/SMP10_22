import { useSession } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';
import { RiVideoAddFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { FaSmileBeam } from "react-icons/fa";

const CreatePost = () => {
  const { data: session } = useSession();
  return (
    <div className='bg-white rounded-lg shadow-md text-gray-500 p-2 divide-y'>
        <div className='flex p-4 space-x-2 items-center'>
          <Image src={session.user.image} height={40} width={40} className="rounded-full cursor-pointer" />
          <form className='flex flex-1'>
            <input className='rounded-full flex-grow h-12 focus:outline-none font-medium font-Poppins bg-gray-100 px-4' type="text" placeholder={`Whats on your mind, ${session?.user.name.split(" ")[0]}?`}></input>
          </form>
          <button hidden></button>
        </div>

        <div className='flex justify-evenly pt-1'>
          <div className='flex items-center p-1 space-x-1 rounded-lg flex-grow justify-center hover:bg-gray-100'>
            <RiVideoAddFill size={20} className="text-red-500" />
            <p className='font-semibold text-gray-600'>Live Video</p>
          </div>
          <div className='flex items-center p-1 space-x-1 rounded-lg flex-grow justify-center hover:bg-gray-100'>
            <IoMdPhotos size={20} className="text-green-500" />
            <p className='font-semibold text-gray-600'>Photo/video</p>
          </div>
          <div className='flex items-center p-1 space-x-1 rounded-lg flex-grow justify-center hover:bg-gray-100'>
            <FaSmileBeam size={20} className="text-yellow-500" />
            <p className='font-semibold text-gray-600'>Feeling/Activity</p>
          </div>
        </div>
        
    </div>
  );
};

export default CreatePost;