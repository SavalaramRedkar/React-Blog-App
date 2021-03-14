import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <h2 style={{ marginBottom: "10px" }}>Page Not Found!</h2>
      <Link to="/" style={{ textDecoration: "none" }}>
        Back to the homepage...
      </Link>
    </div>
  );
}

export default PageNotFound;
