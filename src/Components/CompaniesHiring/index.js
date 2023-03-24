import React, { useState, useEffect } from "react";
// Axios ia a HTTP client for making API requests
import Axios from "axios"; 
import { Link } from "react-router-dom";

export default function CompaniesHiring() {
  // const [companies, setCompanies] = useState([]);
  const [groupedCompanies, setGroupedCompanies] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=45&what=Front%20end%20developer&what_or=Front%20end%20web%20developer&what_exclude=senior"
      // The response is the API object received
    ).then((response) => {
      // creates an array of objects containing the company name and job URL
      const companyLinks = response.data.results.map((job) => ({
        name: job.company.display_name,
        url: job.redirect_url,
      }));
      // setCompanies(companyLinks);
      // We use the reduce method to group the job listings by company name, creating an object with each company name as a key and an object containing the job count and a URL as its value.
      const companyGroup = companyLinks.reduce((acc, curr) => {
        acc[curr.name] = acc[curr.name] || { count: 0, url: curr.url };
        acc[curr.name].count++;
        return acc;
      }, {});

      setGroupedCompanies(
        Object.entries(companyGroup).map(([name, { count, url }]) => ({
          name,
          count,
          url,
        }))
      );
    });
  }, []);

  return (
    <div>
      {/* Maps through the groupedCompanies array, rendering a JSX element for each company. */}
      {groupedCompanies.map((company) => (
        <div key={company.url}>
          <Link
            to={`/CompanyJobs/${encodeURIComponent(company.name)}`}
            
          >
            {company.name} ({company.count})
          </Link>
        </div>
      ))}
    </div>
  );
}
