import React from "react";
import { Link } from "react-router-dom";

const Singup = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center py-3">
      <div className="drop-shadow-2xl rounded-md p-4 bg-white flex gap-3 items-center flex-col ">
        <h2 className="text-xl font-bold mb-2">Sing Up</h2>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full name"
            className="p-1 px-3 rounded-sm border border-gray-600 text-gray-900 outline-yellow-400"
            name=""
            id=""
          />
          <input
            type="email"
            placeholder="Email"
            className="p-1 px-3 rounded-sm border border-gray-600 text-gray-900 outline-yellow-400"
            name=""
            id=""
          />
          <input
            type="password"
            placeholder="Password"
            className="p-1 px-3 rounded-sm border border-gray-600 text-gray-900 outline-yellow-400"
            name=""
            id=""
          />
          <button
            type="submit"
            className="w-full text-white bg-yellow-500 p-2 drop-shadow-2xl rounded hover:bg-yellow-400 text-xs"
          >
            Sing Up
          </button>
          <p className="text-xs  w-full text-gray-600 cursor-pointer">
            <Link to="/login" className="text-yellow-500 cursor-pointer border-b-2 border-yellow-500">
              Login
            </Link>
          </p>
          <button
            type="submit"
            className="w-full text-white bg-black p-2 drop-shadow-2xl rounded hover:bg-gray-700 text-xs "
          >
            Log in with Apple <i className="ba ba-apple"></i>
          </button>
          <button
            type="submit"
            className="w-full text-black bg-transparent p-2 drop-shadow-2xl rounded border-2 border-black text-xs"
          >
            Log in with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Singup;
