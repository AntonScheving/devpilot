import React, { useState, useEffect } from 'react'

const Location = () => {
    const [location, setLocation] = useState('');
    const [apiData, setApiData] = useState([]);

    

    const handleSearch = () => {
        fetch ('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=0f15a296c6a265d2e7c0fb2fbe7cb467&results_per_page=10&what=junior%20developer&where={location}')
        .then(response => {return response.json()})
        .then(data => {setApiData(data.results)});
        
    };
    console.log(apiData)
    useEffect(() => {
        
    if (location) {
      handleSearch();
    }
  }, [location]);


  return (
    <>
        <input type="text" value={location}
        onChange={(ev) => setLocation(ev.target.value)} />
        <button onClick={handleSearch}>Search</button>
        {apiData.map((job) => (
            <div key={job.id}>
                <div>
                    <a href={job.redirect_url}>
                    <h3>{job.title}</h3></a>
                    <p>{job.company.display_name}</p>
                </div>

            </div>
        ))}
    
    </>
  )
}

export default Location;