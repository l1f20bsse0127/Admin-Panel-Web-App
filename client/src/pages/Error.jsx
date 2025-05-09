import React from "react";

const Error = () => {
  return (
    <div className="error-body">
      <div className="error-page">
        <div className="error-content">
          <h1>404</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <a href="/" className="error-btn">
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
