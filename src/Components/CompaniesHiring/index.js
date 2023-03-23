import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function CompaniesHiring() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=45&what=Front%20end%20developer&what_or=Front%20end%20web%20developer&what_exclude=senior"
    ).then((response) => {
      const companyNames = response.data.results.map(
        (job) => job.company.display_name
      );
      setCompanies(companyNames);
    });
  }, []);

  return (
    <div>
      {companies.map((company) => (
        <div>{company}</div>
      ))}
    </div>
  );
}
