import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPost } from '../public/src/app/redux_store';
import Post from './Post'

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  return (
    <div>
      {posts.map((post) => <Post post={post} key={post.id}/>)}
    </div>
  );
}

export default Posts