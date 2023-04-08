import React from "react";

import "./Carousel.css";
import SliderText from "./SliderText";

const Carousel = () => {
  return (
    <div className="my-11 lg:p-5">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img
              src="https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
              className="w-full rounded-xl"
            />
          </div>

          <SliderText></SliderText>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
