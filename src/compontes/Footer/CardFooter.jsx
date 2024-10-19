import React from "react";

const CardFooter = ({ title, list }) => {
  return (
    <div>
      <h3 className="font-bold text-xs mb-2">{title}</h3>
      <ul>
        {list.map((item, index) => (
          <li className="text-gray-400 text-[10px] " key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardFooter;
