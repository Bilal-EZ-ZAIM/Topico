import React from "react";
import Category from "../category/Category";
import Slider from "../slider/Slider";

const Hero = () => {
  return (
    <div className="mx-auto sm:px-0 px-2  container md:w-[900px] py-5 flex gap-10   flex-wrap md:flex-nowrap">
      <Category />
      <Slider />
    </div>
  );
};

export default Hero;
