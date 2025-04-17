import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <div className="space-y-16">
      <section className="mt-4">
        <HomeCarousel />
      </section>
      <section>
        <Cards />
      </section>
      <footer className="bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
