import React, { Suspense, useState } from "react";
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
        <Suspense fallback={<h1>Suspene Loading . . .</h1>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>
        <Suspense fallback={<h1>Loading Comments . . .</h1>}>
          {selectPostId && <Comments postId={selectPostId} />}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
