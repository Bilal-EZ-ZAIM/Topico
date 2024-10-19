import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../../redux/features/productsSlice";

const SideCart = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { order , totle } = useSelector((state) => state.product);

  const toggleSidebar = () => {
    setIsSidebarOpen(false);
  };
  const dispatch = useDispatch();

  const getId = (id) => {
    dispatch(removeOrder({ id }));
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="fixed flex flex-col top-0 right-0 z-50 sm:w-[300px] w-full bg-white text-black h-full overflow-y-auto p-5 sm:p-3 "
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <div className="h-[10%] flex items-center justify-between border-b ">
        <h4 className="font-bold text-[16px]">
          My Cart{" "}
          <span className="text-gray-400 text-[10px]">
            ({order.length} item in Cart)
          </span>
        </h4>
        <button
          onClick={toggleSidebar}
          className="rounded-full w-8 h-8 border-2 font-bold text-black border-gray-100 "
        >
          <i className="bi bi-x text-2xl font-bold"></i>
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col gap-4 items-center flex-1  border-b overflow-y-auto pt-4 pb-4 ">
        {order.map((item, index) => (
          <div className="flex gap-2  w-full items-center " key={index}>
            <div className="flex items-center w-20 h-20">
              <img
                className="w-full h-full"
                src={`./img/product/${item.mainImage}`}
                alt=""
              />
            </div>
            <div className="flex-1 mr-2 gap-1">
              <p className="text-sm text-black font-bold">{item.title} </p>
              <span className="text-gray-500 text-sm ">
                ${item.discountedPrice}
              </span>
            </div>
            <div className="order text-xl  ml-1">
              <i
                onClick={() => getId(item.id)}
                className="bi bi-trash-fill text-gray-700 cursor-pointer hover:text-yellow-400 transition duration-300"
              ></i>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col h-[130px]  justify-between  item-Bettwen ">
        <div className="flex justify-between items-center py-2">
          <p className="text-sm">Car Subtotal</p>
          <strong className="text-sm  text-yellow-500">${totle}</strong>
        </div>
        <div className="flex flex-col gap-3 w-full mt-2">
          <Link
            onClick={toggleSidebar}
            to="/delevry"
            className="w-full border-2 text-center border-yellow-500 rounded p-2 bg-yellow-500 text-xs font-light "
          >
            PROCEED TO CHECKOUT
          </Link>
          <Link
            onClick={toggleSidebar}
            to="/all-products"
            className="w-full text-center border-2 border-yellow-500 rounded p-2  text-xs font-light "
          >
            SHOP MOR
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SideCart;
