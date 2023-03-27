import React from "react";
import FeaturedGrid from "../Components/FeaturedGrid";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedGrid />
      <Footer />
    </div>
  );
};

export default Home;
