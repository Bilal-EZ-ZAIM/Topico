import React from "react";
import MiniFteare from "./MiniFteare";

const Feater = () => {
  const feater = [
    {
      title: "Free Shipping",
      par: "Free shipping On all Order",
      img: "https://bilal-ez-zaim.github.io/Topico/img/features1.png",
    },
    {
      title: "Money Guarantee",
      par: "30 Day Money Back Guarantee",
      img: "https://bilal-ez-zaim.github.io/Topico/img/features2.png",
    },
    {
      title: "Online Support 24/7",
      par: "Technical SUpport Stand BY",
      img: "https://bilal-ez-zaim.github.io/Topico/img/features3.png",
    },
    {
      title: "Secure Payment",
      par: "All Payment Method are    accepted",
      img: "https://bilal-ez-zaim.github.io/Topico/img/features4.png",
    },
    {
      title: "Member Discount",
      par: "Upto 40% Discount All Products",
      img: "https://bilal-ez-zaim.github.io/Topico/img/features5.png",
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
