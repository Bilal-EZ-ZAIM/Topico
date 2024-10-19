import React from "react";
import InputFilter from "./InputFilter";

const Filter = () => {
  const category1 = [
    "Phones",
    "Tablets",
    "Electronics",
    "Tv",
    "Fashion",
    "Watches",
  ];

  const category2 = [
    "Apple",
    "Samsung",
    "Intel",
    "Oppo",
    "Xiaomi",
    "Huawei",
  ];

  const colors = [
    "bg-red-500",
    "bg-blue-700",
    "bg-black",
    "bg-orange-500",
    "bg-green-700",
    "bg-yellow-500",
  ];
  return (
    <div className="p-3 w-full  rounded-sm bg-white sm:w-[170px]  h-max">
      <h3 className="font-bold text-xl mb-4 ">Filter</h3>
      <InputFilter title={"Category"} category={category1} />
      <InputFilter title={"Brand"} category={category2} />
      <InputFilter title={"Color"} category={colors} />
    </div>
  );
};

export default Filter;
