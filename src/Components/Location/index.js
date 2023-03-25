import React, { useState } from 'react'
import JobList from '../JobList';

const Location = () => {
    const [location, setLocation] = useState('');
    const [apiData, setApiData] = useState([]);

    const handleSearch = (e) => {
    setLocation(e.target.value);
  }
  

const fetchData = async () => {

  const response = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=0f15a296c6a265d2e7c0fb2fbe7cb467&results_per_page=10&what=junior%20developer&where=${location}`);
  const data = await response.json();
  console.log(data.results)
  setApiData(data.results);
}
    return (
    <>
    <div>
      {!apiData.length && <JobList />}
        <input type="text"
        placeholder='Location'
        value={location}
        onChange={handleSearch}/>
        <button onClick={fetchData}>Search</button>
        {apiData.map((job) => (
            <div key={job.id}>
                <div>
                    <a href={job.redirect_url}>
                    <h3>{job.title}</h3></a>
                    <p>{job.company.display_name}</p>
                </div>
            </div>
            
            
        ))}
        </div>
    
    </>
  )
}

export default Location;