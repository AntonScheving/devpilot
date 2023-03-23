import React from 'react'
import { Link } from 'react-router-dom';
import FeaturedGrid from '../components/FeaturedGrid';

const Home = () => {
  return (
    <div>
    
          <Link to="jobs"> Jobs</Link>
          <Link to="companies">Companies</Link>
          <FeaturedGrid/>
    </div>
  );
}

export default Home;