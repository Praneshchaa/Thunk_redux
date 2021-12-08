import React, { useEffect } from "react";

import { fetchPosts } from "./action";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {posts.map((title) => {
        return <h3>{title.title}</h3>;
      })}
    </div>
  );
};

export default Posts;
