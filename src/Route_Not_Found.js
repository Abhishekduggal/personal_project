import React from "react";
import { Link } from "react-router-dom";

const Route_Not_Found = () => {
  return (
    <div>
      <h3>404: Page Not Found</h3>
      <p>Sorry the page you are looking for is not available</p>
      <Link to={`/`}>
        <button className="Button">Explore our Site</button>
      </Link>
    </div>
  );
};

export default Route_Not_Found;
