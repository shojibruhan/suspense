import React, { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
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
        <ErrorBoundary
          fallback={<h1 className="error">Error fetching Posts</h1>}
        >
          <Suspense fallback={<h1>Suspene Loading . . .</h1>}>
            <PostSelector onSelectPost={handleSelectPost} />
          </Suspense>
        </ErrorBoundary>

        {selectPostId && (
          <ErrorBoundary
            fallback={<h1 className="error">Error fetching Comments</h1>}
          >
            <Suspense fallback={<h1>Loading Comments . . .</h1>}>
              <Comments postId={selectPostId} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
};

export default App;
