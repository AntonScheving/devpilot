import React from "react";
import FeaturedGrid from "../Components/FeaturedGrid";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedGrid />
    </div>
  );
};

export default Home;
