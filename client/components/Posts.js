import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "../public/src/app/redux_store";
import Post from "./Post";
import axios from "axios";
import { action } from "../public/src/app/redux_store";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  const addaGetPosts = "http://localhost:8080/rest/v1/post/getPost";

  useEffect(() => {
    const FetchedData = axios.get(addaGetPosts).then((res) => {
      console.log(res);
      dispatch(action.addAllPost(res.data));
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
