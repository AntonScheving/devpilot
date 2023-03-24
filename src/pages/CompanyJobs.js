import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function CompanyJobs() {
  const { companyName } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=45&what=Front%20end%20developer&what_or=Front%20end%20web%20developer&what_exclude=senior&company=${encodeURIComponent(
        companyName
      )}`
    ).then((response) => {
      const jobLinks = response.data.results.map((job) => ({
        title: job.title,
        url: job.redirect_url,
      }));
      setJobs(jobLinks);
    });
  }, [companyName]);

  return (
    <div>
      <h2>{decodeURIComponent(companyName)}</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              {job.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
