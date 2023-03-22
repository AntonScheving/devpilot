import React, { useState, useEffect }  from 'react'

const FeaturedCompanies = () => {

    const [featuredCompanies, setFeaturedCompanies] = useState([]);

    useEffect(() => {
        const appId = "6c3aabdd";
        const appKey = "0f15a296c6a265d2e7c0fb2fbe7cb467";
        const apiURL = `https://api.adzuna.com/v1/api/jobs/gb/top_companies?app_id=${appId}&app_key=${appKey}&what=front-end`;

        fetch(apiURL)
        .then(response => {
                console.log("Response:", response);
                return response.json()
            })
            .then(data => {
                console.log('Data:', data);
                setFeaturedCompanies(data.leaderboard)
            })
            .catch((error) => console.error(error));
    }, []);


  return (
      <div>
          <h2> Featured Companies</h2>
          <ul>
              {featuredCompanies.map((featuredCompany) =>
                  <li key={featuredCompany.canonical_name}>
                      <h3>{featuredCompany.canonical_name}</h3>
                      <h4>{featuredCompany.count} Job </h4>
                  </li>
              )}
          </ul>
          
    </div>
  )
}

export default FeaturedCompanies