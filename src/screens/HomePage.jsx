import React from "react";
import HomeCarousel from "../users/components/HomeCarousel";
import Footer from "../users/components/Footer";
import Cards from "../users/components/Cards";

const HomePage = () => {
  return (
    <div>
      <div>
        <HomeCarousel />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
