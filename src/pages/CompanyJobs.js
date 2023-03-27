// The CompanyJobs component is displaying a list of job titles and their corresponding URLs based on the provided companyName. It fetches job data from the Adzuna API, and then renders the list of jobs.

import React, { useState, useEffect } from "react";
// Axios, a library for making HTTP requests
import Axios from "axios";
// useParams is a hook from react-router-dom to access URL parameters.
import { useParams } from "react-router-dom";
// import Navbar from "../Components/Navbar";

import { Box, styled, useMediaQuery, useTheme,} from "@mui/material";

// Defines a Root styled-component that wraps around the page and uses the Material-UI Box component and applies custom styles to it.
const Root = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "bottom",
  height: "265vh",
}));


export default function CompanyJobs() {
  // Sets the companyName URL parameter using the useParams hook.
  const { companyName } = useParams();
  const [jobs, setJobs] = useState([]);
  const theme = useTheme();
  // isMobile determines whether the viewport is in a mobile size using the useMediaQuery hook from Material-UI.
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  // Sets up the useEffect hook that runs when the component loads or when companyName changes. The useEffect fetches job data from the Adzuna API using Axios and updates the jobs state with the fetched data.
  useEffect(() => {
    Axios.get(
      // `/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=45&what=Front%20end%20developer&what_or=Front%20end%20web%20developer&what_exclude=senior&company=${companyName}`

      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=45&what=Front%20end%20developer&what_or=Front%20end%20web%20developer&what_exclude=senior&company=${encodeURIComponent(
        companyName
      )}`
    ).then((response) => {
      const jobLinks = response.data.results.map((job) => ({
        title: job.title,
        url: job.redirect_url,
      }));
      setJobs(jobLinks);
      console.log(response);
    });
  }, [companyName]);

  return (
    <>
      {/* <Navbar /> */}
      <Root className="hero-root">
        <Box pt={isMobile ? 4 : 8}>
          <div>
            <h2
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {decodeURIComponent(companyName)}
            </h2>
            <ul>
              {jobs.map((job, index) => (
                <li key={index}>
                  <a href={job.url}>{job.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </Box>
      </Root>
    </>
  );
}
