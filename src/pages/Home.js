import React from 'react'
import { Link } from 'react-router-dom';
import FeaturedCompanies from '../components/Featured-companies';

const Home = () => {
  return (
    <div>
    
          <Link to="jobs"> Jobs</Link>
          <Link to="companies">Companies</Link>
          <FeaturedCompanies/>
    </div>
  );
}

export default Home;