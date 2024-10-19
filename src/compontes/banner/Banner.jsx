import React from "react";

const Banner = ({ image }) => {
  return (
    <div className="mx-auto sm:px-0 px-2 gap-4 container md:w-[900px] flex justify-between my-5 flex-wrap">
      {image.map((item) => (
        <img
          className="h-auto md:w-[32%] w-full flex-1"
          src={item}
          key={item}
          alt=""
        />
      ))}
    </div>
  );
};

export default Banner;
