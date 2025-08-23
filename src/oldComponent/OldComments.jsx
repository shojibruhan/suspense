import React, { useEffect, useState } from "react";

const OldComments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState(null);

  useEffect(() => {
    setIsCommentsLoading(true);
    setCommentsError(null);
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        const data = await response.json();

        if (response.ok) {
          setIsCommentsLoading(false);
          setComments(data);
        } else {
          setIsCommentsLoading(false);
          setCommentsError("There is an error");
        }
      } catch (err) {
        setCommentsError(err.message);
      }
    };

    fetchComments();
  }, [postId]);
  console.log(comments);

  let commentContent;
  if (isCommentsLoading) {
    commentContent = <div>Comment Loading. . .</div>;
  } else if (!commentContent && commentsError) {
    commentContent = <div className="error">{commentsError}</div>;
  } else {
    commentContent = (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h2>Comments</h2>
      {commentContent}
    </div>
  );
};

export default OldComments;
