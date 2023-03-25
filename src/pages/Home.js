import React from "react";
import FeaturedGrid from "../Components/FeaturedGrid";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedGrid />
    </div>
  );
};

export default Home;
