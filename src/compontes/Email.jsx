import React from "react";
import Inputs from "./inputs/Inputs";

const Email = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto sm:px-0 px-2  container md:w-[900px] py-4 flex md:justify-between items-center justify-center gap-5 flex-wrap">
        <div className="flex gap-4 items-center">
          <div>
            <img src="./img/icon_email.png" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Sign Up To Newsletter</h3>
            <p className="text-[10px] text-gray-500">
              Get email updates about our lates shop...and receive
            </p>
            <h5 className="text-xs">$30 Coupon For Frist Shopping</h5>
          </div>
        </div>
        <Inputs
          plaseholder={"Enter your email here..."}
          button={"subscribe"}
          type={"email"}
        />
      </div>
    </div>
  );
};

export default Email;
