import React from "react";
import Hero from "../compontes/hero-section/Hero";
import Feater from "../compontes/feater/Feater";
import Banner from "../compontes/banner/Banner";
import SliderProduct from "../compontes/slider-products/SliderProduct";
import Email from "../compontes/Email";

const Home = () => {
  const imageBanar1 = [
    "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-1.jpg",
    "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-2.jpg",
    "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-3.jpg",
  ];
  const imageBanar2 = [
    "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-4.jpg",
    "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-5.jpg",
  ];
  const imageBanar3 = [
    "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-6.jpg",
    "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-7.jpg",
    "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-8.jpg",
  ];
  return (
    <div className="bg-gray-100">
      <Hero />
      <Feater />
      <Banner image={imageBanar1} />
      <SliderProduct titel={"On Sale"} />
      <Banner image={imageBanar2} />
      <SliderProduct
        titel={"Computer & Desktop"}
        banerImage={
          "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-sm-1.jpg"
        }
      />
      <SliderProduct
        titel={"Phone & Tablets"}
        banerImage={
          "https://bilal-ez-zaim.github.io/Topico/img/banner/banner-sm-2.jpg"
        }
        position={true}
      />
      <Banner image={imageBanar3} />
      <Email />
    </div>
  );
};

export default Home;
