import React, { useState, useEffect }  from 'react'

const FeaturedCompanies = () => {
  // Using the useState hook to initialize the featured companies
  const [featuredCompanies, setFeaturedCompanies] = useState([]);

    // useEffect hook to make the API request
    useEffect(() => {
      // Define API credentials and endpoint URL
      const appId = "6c3aabdd";
      const appKey = "0f15a296c6a265d2e7c0fb2fbe7cb467";
      const apiURL = `https://api.adzuna.com/v1/api/jobs/gb/top_companies?app_id=${appId}&app_key=${appKey}&what=front-end`;

      // Make API request to fetch top companies for front-end jobs in the UK
      fetch(apiURL)
        .then((response) => {
          console.log("Response:", response);
          return response.json();
        })
        .then((data) => {
          console.log("Data:", data);
          // Set the state variable with the leaderboard data from the API response
          setFeaturedCompanies(data.leaderboard);
        })
        .catch((error) => console.error(error));
    }, []); 
    // Pass an empty array([]) as the second argument to useEffect.This tells React to run the effect only once, when the component is mounted, and not on subsequent re - renders.

  return (
    <div>
      <h2> Featured Companies</h2>
      <ul>
        {featuredCompanies.map((featuredCompany) => (
          <li key={featuredCompany.canonical_name}>
            <h3>{featuredCompany.canonical_name}</h3>
            <h4>
              {featuredCompany.count}{" "}
              {featuredCompany.count > 1 ? "Jobs" : "Job"}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturedCompanies