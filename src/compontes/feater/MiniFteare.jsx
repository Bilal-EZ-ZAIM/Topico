import React from "react";

const MiniFteare = ({ img, title, par }) => {
  return (
    <div className="flex gap-3 items-center p-2">
      <img src={img} className="w-7 h-7" />
      <div className="flex flex-col gap-1">
        <h5 className="font-bold text-black text-[10px]">{title}</h5>
        <p className="text-gray-500 text-[8.5px] font-bold">{par}</p>
      </div>
    </div>
  );
};

export default MiniFteare;
