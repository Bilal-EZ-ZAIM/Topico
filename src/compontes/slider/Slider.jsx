import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./styles.css";
const Slider = () => {
  const images = [
    "./img/slider-01.jpg",
    "./img/slider-02.jpg",
    "./img/slider-03.jpg",
  ];
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper cursor-grabbing  h-72"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-auto cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
