import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselImages from "./CarouselImages";

const HomeCarousel = () => {
  const items = CarouselImages.map((image, index) => (
    <div key={index} className="item w-full" role="presentation">
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
    <div className="w-full flex justify-center items-center mt-5">
      <div className="w-full min-h-[75vh]">
        <AliceCarousel
          items={items}
          autoPlay={true} // Enable autoplay
          autoPlayInterval={1500} // Faster autoplay (1.5 sec per slide)
          animationDuration={500} // Quick transition
          infinite={true} // Loop continuously
          autoPlayStrategy="none" // Prevent stopping
          disableButtonsControls={true} // Hide left/right buttons
          disableDotsControls={true} // Hide bottom dots
          responsive={{
            0: { items: 1 }, // Show 1 item on all screen sizes
          }}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
