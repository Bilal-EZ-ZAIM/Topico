import React from "react";
import FormDelivery from "../compontes/inputs/FormDelivery";
import Order from "../compontes/Order/Order";
import { useSelector } from "react-redux";

const Delivery = () => {
  const { products } = useSelector((state) => state.product);
  console.log(products);

  return (
    <div className="mx-auto sm:px-0 px-2  container  md:w-[900px] py-5 flex  gap-20 flex-wrap md:flex-nowrap md:justify-between">
      <FormDelivery />
      <Order />
    </div>
  );
};

export default Delivery;
