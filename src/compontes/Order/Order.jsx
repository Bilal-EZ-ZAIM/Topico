import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const { order, totle } = useSelector((state) => state.product);
  console.log(totle);

  return (
    <div className="bg-white p-2 pb-2 md:flex-1 h-[120vh] w-full">
      <h2 className="font-bold py-2 border-b border-gray-300">Order Summary</h2>

      <div className="h-4/5  overflow-y-auto">
        {order.map((item, index) => (
          <div key={index} className="flex p-4  items-center">
            <div>
              <img
                src={`./img/product/${item.mainImage}`}
                className="w-28"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-xs font-bold">{item.title}</h2>
              <p className="text-xs font-bold">
                Price : ${item.discountedPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between border-b mb-4 py-2">
          <h2 className="font-bold text-xl">Total:</h2>
          <h2 className="font-bold text-xl">${totle}</h2>
        </div>
        <button
          type="submit"
          className="w-full  bg-yellow-500 p-1 font-bold drop-shadow-2xl rounded hover:bg-yellow-400 text-[16px] text-black"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;
