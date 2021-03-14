import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Savalaram");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const blog = { title, body, author };
    // console.log(blog);

    setLoading(true);
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added Successfully!");
      setLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Savalaram">Savalaram</option>
          <option value="Saideep">Saideep</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading && <div>Blog adding...</div>}
      </form>
    </div>
  );
}

export default CreateBlog;
