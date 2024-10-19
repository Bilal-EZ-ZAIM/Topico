import React, { useEffect } from "react";
import {  NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const SidebarLayout = ({ isSidebarOpen, setIsSidebarOpen }) => {
  console.log(isSidebarOpen);

  const toggleSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={`fixed flex flex-col top-0  left-0 z-50 sm:w-[300px] w-full bg-white text-black h-full overflow-y-auto p-5 sm:p-3 `}
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <div
        className={`fixed   top-0 left-0 z-50 w-full bg-white text-black h-full overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300 z-50`} // z-50 to make sure it's on top
      >
        <button
          onClick={toggleSidebar}
          className="absolute rounded-full border-2 font-bold text-yellow-500 border-yellow-500  top-4 right-4 p-1"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col gap-8 items-center mt-10">
          <div>
            <img
              src="./img/logo-black.png"
              className="w-32 mb-8"
              alt=""
              srcset=""
            />
          </div>
          <ul className="flex flex-col items-center gap-10">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={toggleSidebar}
                className=" text-lg font-normal"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/all-products"
                onClick={toggleSidebar}
                className="text-[18px] font-normal"
              >
                All Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                href="#"
                onClick={toggleSidebar}
                className="text-lg font-normal"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                href="#"
                onClick={toggleSidebar}
                className=" text-lg font-normal"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SidebarLayout;
