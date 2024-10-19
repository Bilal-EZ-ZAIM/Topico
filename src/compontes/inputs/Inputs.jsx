import React from "react";

const Inputs = ({ plaseholder, button , type}) => {
  return (
    <div className="border-2  rounded-md border-yellow-500 hover:border-yellow-400 transition-all duration-300 w-full sm:w-[350px] flex ">
      <input
        type={type}
        className="text-xs py-3 w-full px-3 sm:p-[10px] rounded-md outline-none  flex-1 h-full text-gray-400"
        placeholder={plaseholder} 
      />
      <button className="bg-yellow-500 sm:px-9 px-3  text-sm  hover:text-white transition-all duration-300  hover:bg-yellow-400">{button}</button>
    </div>
  );
};

export default Inputs;
