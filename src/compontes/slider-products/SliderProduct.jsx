import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styl.css";
import { Pagination } from "swiper/modules";
import StarRating from "./StarRating.Jsx";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../redux/features/productsSlice";

const SliderProduct = ({ titel, banerImage = null, position = null }) => {
  const swiperRef = useRef(null);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const addCart = (data) => {
    console.log(data);

    dispatch(addOrder({ id: data }));
  };

  return (
    <div className="mx-auto sm:px-0 px-2 gap-4 container md:w-[900px] h-max  my-10 overflow-hidden ">
      <div className="mb-4 border-b py-2 border-gray-400 flex justify-between items-center ">
        <h3>
          <span className="font-bold border-b-2 py-[14.5px] border-yellow-500 mr-2">
            {titel}
          </span>
          Products
        </h3>
        <div className="flex gap-3">
          <button
            className="bg-yellow-500 rounded-sm hover:bg-yellow-400  text-white px-1 py-1"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="bg-yellow-500 rounded-sm hover:bg-yellow-400  text-white px-1 py-1 "
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <hr />

      <div className={position ? "flex gap-5 flex-row-reverse" : "flex gap-5"}>
        {banerImage ? (
          <img src={banerImage} className="w-44 h-auto" alt="" />
        ) : null}

        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: banerImage ? 1 : 2,
              spaceBetween: 3,
            },
            "@0.75": {
              slidesPerView: banerImage ? 2 : 3,
              spaceBetween: 5,
            },
            "@1.00": {
              slidesPerView: banerImage ? 3 : 4,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: banerImage ? 4 : 5,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination]}
          className="mySwiper h-min drop-shadow-lg"
        >
          {products.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-between p-2 relative group h-64 py-3"
            >
              <div className=" w-full ">
                <img
                  src={`https://bilal-ez-zaim.github.io/Topico/img/product/${item.mainImage}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onMouseMove={(e) =>
                    (e.currentTarget.src = `https://bilal-ez-zaim.github.io/Topico/img/product/${item.secondaryImage}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = `https://bilal-ez-zaim.github.io/Topico/img/product/${item.mainImage}`)
                  }
                />
              </div>
              <span className="bg-red-600 text-white text-[9px] rounded-sm p-1  absolute top-1 right-1">
                %{item.discount}
              </span>
              <div className="flex flex-col items-center justify-between w-full h-full">
                <h6 className="text-blue-700 text-xs">{item.title}</h6>
                <div className="flex gap-1 items-center">
                  <StarRating rating={item.rating} />
                </div>
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-sm line-through">
                    ${item.originalPrice}
                  </span>
                  <span className="text-sm text-yellow-500">
                    ${item.discountedPrice}
                  </span>
                </div>
              </div>

              <div className="flex justify-center flex-col gap-2 items-center absolute right-0 opacity-0 group-hover:right-3 group-hover:opacity-100 h-full transition-all duration-300">
                <div className="cursor-pointer">
                  <i className="bi bi-suit-heart-fill text-xs transition-shadow duration-300 hover:shadow-lg hover:text-yellow-500"></i>
                </div>
                <div className="cursor-pointer">
                  <i
                    onClick={() => addCart(item.id)}
                    className="bi bi-cart-plus-fill text-xs transition-shadow duration-300 hover:shadow-lg hover:text-yellow-500"
                  ></i>
                </div>
                <div className="cursor-pointer">
                  <i className="bi bi-cursor-fill text-xs transition-shadow duration-300 hover:shadow-lg hover:text-yellow-500"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderProduct;
