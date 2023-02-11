import React, { useEffect, useState } from "react";
import axios from "axios";
import { CommentCreate } from "./CommentCreate";
import { CommentList } from "./CommentList";

export const PostList = () => {
  const [posts, setPosts] = useState({});

  const renderedPosts = Object.values(posts).map((post) => (
    <div
      key={post.id}
      className="card mx-2"
      style={{ width: "30%", marginBottom: "20px" }}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:4002/posts");

      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  return <div className="d-flex flew-row flex-wrap">{renderedPosts}</div>;
};
