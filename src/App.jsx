import React, { useState } from "react";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";

const App = () => {
  const [selectPostId, setSelectPostId] = useState(null);
  const handleSelectPost = (e) => {
    console.log(e.target.value);
    setSelectPostId(e.target.value);
  };
  return (
    <div>
      <h1>React Suspense & Error Bounderies</h1>
      <div>
        <PostSelector onSelectPost={handleSelectPost} />
        {selectPostId && <Comments postId={selectPostId} />}
      </div>
    </div>
  );
};

export default App;
