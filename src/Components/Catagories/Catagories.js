import React from "react";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <div className="lg:flex grid justify-center lg:gap-3 text-black">
      <Link to="/">
        <div>Small</div>
      </Link>
      <Link to="/">
        <div>Medium</div>
      </Link>
      <Link to="/">
        <div>Large</div>
      </Link>
    </div>
  );
};

export default Catagories;
