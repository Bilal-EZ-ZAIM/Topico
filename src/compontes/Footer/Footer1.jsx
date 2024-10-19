import React from "react";
import CardFooter from "./CardFooter";

const Footer1 = () => {
  return (
    <div className="mx-auto sm:px-0 px-4 gap-8 container md:w-[900px] py-8 text-white flex justify-between flex-wrap items-center ">
      <div className="flex gap-3 flex-col">
        <div>
          <img src="./img/logo-white.png" className="w-24" alt="" srcset="" />
        </div>
        <div className="flex gap-3 items-center">
          <img src="./img/features3.png" className="w-10 h-auto" alt="" />
          <div>
            <h3 className="text-sm font-bold">Online 24/24:</h3>
            <span className="text-[10px] font-bold text-yellow-500">
              +212 612345879
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
      <CardFooter
        title={"FAQs & Help"}
        list={[
          "F.A.Q's",
          "Ordering Tracking",
          "Contacts",
          "Events",
          "Help Center",
        ]}
      />
      <CardFooter
        title={"Shipping & Delivery"}
        list={[
          "Delivery information",
          "Discount",
          "Payment & Shipping",
          "Estimated Delivery Time",
          "Shipping Guide",
        ]}
      />
      <CardFooter
        title={"Information"}
        list={[
          "Popular",
          "Our Services",
          "Your Account",
          "Privacy Policy",
          "Terms & Condition",
        ]}
      />
    </div>
  );
};

export default Footer1;
