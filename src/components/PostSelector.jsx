import fetchPosts from "../api/fetchPosts";

const resourse = fetchPosts(
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
); // return promise

const PostSelector = ({ onSelectPost }) => {
  // throw new Promise(() => console.log("object"));
  const posts = resourse.read();
  return (
    <div>
      <select onChange={onSelectPost}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option value={post.id} key={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostSelector;
