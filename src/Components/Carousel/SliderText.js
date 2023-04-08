import React from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";

const SliderText = () => {
  return (
    <div>
      <div className="absolute flex justify-end transform -translate-y-3/4 lg:right-60 md:right-60 right-32 top-2/4">
        <h1 className="lg:text-4xl text-xl font-bold text-white">
          Rent an apartment <br />
          with a reasonable
          <br /> budget
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 lg:right-60 md:right-60 right-32 top-3/4 gap-3">
        <Link to="/services">
          {" "}
          <button className="btn btn-accent btn-primary">Discover More</button>
        </Link>
      </div>
    </div>
  );
};

export default SliderText;
