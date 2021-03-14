import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch(
    "http://localhost:5000/blogs/" + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:5000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <h2>{error}</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button
            style={{ padding: "12px", backgroundColor: "#dc3545" }}
            onClick={handleDelete}
          >
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
