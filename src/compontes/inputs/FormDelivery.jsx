import React from "react";

const FormDelivery = () => {
  return (
    <div className="md:flex-1 w-full">
      <div className="p-1 px-3 bg-yellow-500 font-bold ">
        <strong>Delivery Address </strong>
      </div>
      <div className="mb-4">
        <form className="py-4 p-3 bg-white ">
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="name" className="text-xs font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-sm outline-none p-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="email" className="text-xs font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-sm outline-none p-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="phone" className="text-xs font-bold">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              className="border border-gray-300 rounded-sm outline-none p-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="address" className="text-xs font-bold">
              Address
            </label>
            <input
              type="address"
              id="address"
              className="border border-gray-300 rounded-sm outline-none p-1 px-2"
            />
          </div>
        </form>
      </div>
      <div className="p-1 px-3 bg-yellow-500 font-bold ">
        <strong>Coupon Code </strong>
      </div>
      <div className="">
        <form className="py-4 p-3 bg-white ">
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="name" className="text-xs font-bold">
              Coupon Code{" "}
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-sm outline-none p-1 px-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDelivery;
