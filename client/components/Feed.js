import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto disableScroll">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl">
        {/* Create Posts Box */}
        <CreatePost />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
