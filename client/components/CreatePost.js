import { useSession } from 'next-auth/react';
import { React, useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import Image from 'next/image';
import { RiVideoAddFill, RiDeleteBin6Line } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { FaSmileBeam } from "react-icons/fa";
import axios from 'axios';

const CreatePost = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const endpoint = "";

  const handleClick = () => {
    hiddenFileInput.current.click();
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      }
    }
  }

  const removeImage = () => {
    setImageToPost(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputRef.current.value) return;
    const formData = new FormData();

    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.image);

    axios.post(endpoint, formData, { headers : { Accept : "application/json"}})
    .then((res) => {
      inputRef.current.value = "";
      dispatch(addPost(response.date));
      removeImage();
    })
    .catch((e) => {
      console.log(e);
    });

  }

  return (
    <div className='bg-white rounded-lg shadow-md text-gray-500 p-2 divide-y'>
        <div className='flex p-4 space-x-2 items-center'>
          <Image src={session.user.image} height={40} width={40} className="rounded-full cursor-pointer" />
          <form className='flex flex-1'>
            <input className='rounded-full flex-grow h-12 focus:outline-none font-medium font-Poppins bg-gray-100 px-4' type="text" ref={inputRef} placeholder={`Whats on your mind, ${session?.user.name.split(" ")[0]}?`}></input>
          </form>
          <button hidden onClick={handleSubmit}></button>
        </div>
        {imageToPost && (
          <div onClick={removeImage} className='flex items-center px-4 py-2 space-x-4 cursor-pointer'>
            <img src={imageToPost} className='h-12 object-contain filter hover:brightness-110 transition duration-150' />
            <RiDeleteBin6Line className='h-8 hover:text-red-500' />
          </div>
        )}
        <div className='flex justify-evenly pt-1'>
          <div className='flex items-center p-1 space-x-1 rounded-lg flex-grow justify-center hover:bg-gray-100 cursor-pointer'>
            <RiVideoAddFill size={20} className="text-red-500" />
            <p className='font-semibold text-gray-600'>Live Video</p>
          </div>
          <div className='flex items-center p-1 space-x-1 rounded-lg flex-grow justify-center hover:bg-gray-100 cursor-pointer' onClick={handleClick}>
            <IoMdPhotos size={20} className="text-green-500" />
            <p className='font-semibold text-gray-600'>Photo/video</p>
            <input onChange={addImageToPost} type="file" multiple hidden ref={hiddenFileInput} accept="image/*"></input>
          </div>
          <div className='flex items-center p-1 space-x-1 rounded-lg flex-grow justify-center hover:bg-gray-100 cursor-pointer'>
            <FaSmileBeam size={20} className="text-yellow-500" />
            <p className='font-semibold text-gray-600'>Feeling/Activity</p>
          </div>
        </div>
        
    </div>
  );
};

export default CreatePost;