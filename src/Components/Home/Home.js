import React from "react";
import FilterBox from "../FilterBox/FilterBox";
import AddsOnHome from "./AddsOnHome";
import Cards from "../Services/Cards";
import HomeBanner from "./HomeBanner";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <FilterBox></FilterBox>
      <AddsOnHome></AddsOnHome>
      <div className="grid lg:grid-cols-3 md:gap-16 gap-0 lg:mx-32 justify-center lg:justify-center my-11">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <HomeBanner></HomeBanner>
      <Contact></Contact>
    </div>
  );
};

export default Home;
