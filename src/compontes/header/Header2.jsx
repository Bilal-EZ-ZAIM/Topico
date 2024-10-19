import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarLayout from "../SidebarLayout/SidebarLayout.Jsx";

const Header2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="container md:w-[900px] mx-auto sm:px-0 px-2 gap-4 flex py-3 justify-between items-center">
      <div className="sm:hidden flex" onClick={() => setIsSidebarOpen(true)}>
        <i className="bi bi-list cursor-pointer text-2xl"></i>
      </div>

      <nav className="hidden sm:flex">
        <ul className="flex gap-6">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/all-products">All Products</NavLink>
          </li>
          <li className="nav-item">
            <a href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-3 flex-wrap">
        <Link
          className="text-sm transition duration-300 hover:bg-yellow-400 font-bold bg-yellow-500 sm:px-5 px-2 rounded flex items-center gap-1 py-2 hover:text-white"
          to="/login"
        >
          Login <i className="bi bi-box-arrow-in-right"></i>
        </Link>
        <Link
          className="text-sm transition duration-300 hover:bg-yellow-400 font-bold bg-yellow-500 sm:px-5 px-2 rounded flex items-center gap-1 py-2 hover:text-white"
          to="/singup"
        >
          Sign Up <i className="bi bi-person-plus-fill"></i>
        </Link>
      </div>

      <SidebarLayout
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Header2;
