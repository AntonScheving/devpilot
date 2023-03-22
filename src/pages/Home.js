import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    
          <Link to="jobs"> Jobs</Link>
          <Link to="companies">Companies</Link>
    </div>
  );
}

export default Home;