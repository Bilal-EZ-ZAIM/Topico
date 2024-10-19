import React from "react";

const InputFilter = ({ title, category }) => {
  return (
    <div className="mb-4">
      <h6 className="font-bold border-b pb-1 mb-2">{title}</h6>
      <ul>
        {title !== "Color"
          ? category.map((item, index) => (
              <li className="flex justify-between mb-[2px]" key={index}>
                {item} <input type="checkbox" name="" id="" />
              </li>
            ))
          : category.map((item, index) => (
              <li className="flex justify-between mb-2 " key={index}>
                <span className={`w-4 h-4 rounded ${item}`}></span>{" "}
                <input type="checkbox" name="" id="" />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default InputFilter;
