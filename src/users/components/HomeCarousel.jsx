import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselImages from "./CarouselImages";

const HomeCarousel = () => {
  const items = CarouselImages.map((image, index) => (
    <div
      key={index}
      className="item"
      role="presentation"
      data-value={index + 1}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-[75vh] object-cover rounded-md"
      />
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">{image.title}</h3>
        <p className="text-sm text-gray-500">{image.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="w-full min-h-[75vh]">
      {" "}
      {/* Full width & min height 75vh */}
      <AliceCarousel items={items} autoPlay autoPlayInterval={3000} infinite />
    </div>
  );
};

export default HomeCarousel;
