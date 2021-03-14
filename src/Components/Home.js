import React from "react";
import BlogList from "./BlogList";
import useFetch from "../Hooks/useFetch";

function Home() {
  const { data: blogs, loading, error } = useFetch(
    "http://localhost:5000/blogs"
  );

  return (
    <div className="home">
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;
