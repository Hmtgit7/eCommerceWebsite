import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      src={item.image}
      className="cursor-pointer"
      role="presentation"
      alt=""
    />
  ));
  return (
    <div className="shadow-[0px_0px_0px_0px_rgba(0,0,0,0.1)] border-b-1 border-red-900">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
