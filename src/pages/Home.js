import React from 'react'
import { Link } from 'react-router-dom';
import FeaturedGrid from '../Components/FeaturedGrid';
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div>
    
          <Link to="jobs"> Jobs</Link>
      <Link to="companies">Companies</Link>
      <Hero/>
          <FeaturedGrid/>
    </div>
  );
}

export default Home;