import Image from "next/image";
import React from "react";
import { GiJamesBondAperture } from "react-icons/gi";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { FaCommentAlt, FaShare } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = () => {
  return (
    <div className="flex flex-col rounded-lg shadow-md bg-white mt-6 font-medium divide-y">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <GiJamesBondAperture style={{ color: "blue" }} size={"2.5rem"} />
          <div>
            <p className="font-medium">Rishi Ghosh</p>
            <p className="text-xs text-gray-500">Date</p>
          </div>
        </div>
        <p className="pt-2">Text</p>
      </div>
      {/* Image */}
      <div className="mb-0 pb-0">
        <div className="relative h-60 md:h-96 bg-white">
          <Image
            src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex items-center space-x-1 p-1 m-2 ml-4 pr-2 max-w-max hover:bg-gray-100 text-neutral-600 justify-start rounded-lg cursor-pointer">
          <BsHandThumbsUpFill className="h-3.5  fill-neutral-600" />
          <p className="text-xs sm:text-base">number</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center bg-white m-2 mt-0">
        <div className="flex flex-1 mt-2 items-center space-x-2 hover:bg-gray-100 text-neutral-600 flex-grow justify-center p-2 rounded-lg cursor-pointer">
          <BsHandThumbsUpFill className="h-4  fill-neutral-600" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex flex-1 mt-2 items-center space-x-2 hover:bg-gray-100 text-neutral-600 flex-grow justify-center p-2 rounded-lg cursor-pointer">
          <FaCommentAlt className="h-4  fill-neutral-600" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex flex-1 mt-2 items-center space-x-2 hover:bg-gray-100 text-neutral-600 flex-grow justify-center p-2 rounded-lg cursor-pointer">
          <FaShare className="h-4 fill-neutral-600" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
