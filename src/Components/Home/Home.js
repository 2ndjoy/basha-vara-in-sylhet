import React from "react";

import Catagories from "../Catagories/Catagories";
import About from "../About/About";
import FilterBox from "../FilterBox/FilterBox";

const Home = () => {
  return (
    <div>
      <FilterBox></FilterBox>
      {/* <Catagories></Catagories> */}
      <About></About>
    </div>
  );
};

export default Home;
