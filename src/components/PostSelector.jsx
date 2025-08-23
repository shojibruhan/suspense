import React, { useEffect, useState } from "react";

const PostSelector = ({ onSelectPost }) => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    setIsPostsLoading(true);
    setPostsError(null);

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const data = await response.json();

        if (response.ok) {
          setIsPostsLoading(false);
          setPosts(data);
        } else {
          setIsPostsLoading(false);
          setPostsError("There was an Error");
        }
      } catch (err) {
        setIsPostsLoading(false);
        setPostsError(err.message);
      }
    };
    fetchPosts();
  }, []);
  // console.log(posts);

  let postContent;

  if (isPostsLoading) {
    postContent = <div>Post is Loading. . .</div>;
  } else if (!isPostsLoading && postsError) {
    postContent = <div className="error">{postsError}</div>;
  } else {
    postContent = (
      <select onChange={onSelectPost}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option value={post.id} key={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    );
  }
  return (
    <div>
      {postContent}
      {/* <select onChange={onSelectPost}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option value={post.id} key={post.id}>
            {post.title}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default PostSelector;
