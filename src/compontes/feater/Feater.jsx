import React from "react";
import MiniFteare from "./MiniFteare";

const Feater = () => {
  const feater = [
    {
      title: "Free Shipping",
      par: "Free shipping On all Order",
      img: "./img/features1.png",
    },
    {
      title: "Money Guarantee",
      par: "30 Day Money Back Guarantee",
      img: "./img/features2.png",
    },
    {
      title: "Online Support 24/7",
      par: "Technical SUpport Stand BY",
      img: "./img/features3.png",
    },
    {
      title: "Secure Payment",
      par: "All Payment Method are    accepted",
      img: "./img/features4.png",
    },
    {
      title: "Member Discount",
      par: "Upto 40% Discount All Products",
      img: "./img/features5.png",
    },
  ];
  return (
    <div className="bg-white mx-auto sm:px-0 px-2  container md:w-[900px] flex gap-2  xl:justify-between py-2 md:flex-nowrap flex-wrap ">
      {feater.map((item, index) => (
        <MiniFteare
          key={index}
          img={item.img}
          par={item.par}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Feater;
