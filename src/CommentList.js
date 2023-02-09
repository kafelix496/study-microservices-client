import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));
  const fetchComments = useCallback(async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return <ul>{renderedComments}</ul>;
};
