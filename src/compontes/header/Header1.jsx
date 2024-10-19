import React, { useState } from "react";
import Inputs from "../inputs/Inputs";
import SideCart from "../SidebarLayout/SidebarCart";
import { useSelector } from "react-redux";

const Header1 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { order } = useSelector((state) => state.product);
  return (
    <div className="mx-auto sm:px-0 px-2  container md:w-[900px] flex py-2 justify-between items-center sm:flex-nowrap flex-wrap gap-5">
      <div className="flex justify-between h-full items-center w-full">
        <div>
          <img src="./img/logo-black.png" className="w-24" alt="" srcset="" />
        </div>
        <div className="sm:flex hidden">
          <Inputs
            plaseholder={"Search for products...."}
            button={"search"}
            type={"text"}
          />
        </div>
        <div>
          <div
            className="border rounded-full w-9 h-9 flex items-center justify-center cursor-pointer relative hover:bg-yellow-400 hover:text-white transition-all duration-300 "
            onClick={() => setIsSidebarOpen(true)}
          >
            <i className="bi bi-bag-fill text-xs "></i>
            <p className="text-[9px] font-bold absolute -top-1 bg-yellow-500 border rounded-full text-center w-4 h-4 right-0 ">
              {order.length}
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden w-full">
        <Inputs
          plaseholder={"Search for products...."}
          button={"search"}
          type={"text"}
        />
      </div>
      <SideCart
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Header1;
