import React, { useEffect, useState } from 'react'

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=20&what=Front%20end%20developer&what_or=Front%20end%20web%20developer&what_exclude=senior")
        .then(response => response.json())
        .then(data => setJobs(data.results));
    }, []);

  return (
    <div>
        {jobs.map((item) => (
            <div key={item.id}>
                <div>
                    <a href={item.redirect_url}>
                    <h3>{item.title}</h3></a>
                    <p>{item.company.display_name}</p>
                </div>

            </div>
        ))}
    </div>
  )
}

export default JobList