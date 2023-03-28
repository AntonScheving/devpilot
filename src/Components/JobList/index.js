import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

const JobList = () => {
  const theme = useTheme();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=50&what=Junior%20front-end%20developer&what_exclude=senior%20lead%20&salary_max=50000"
    )
      .then((response) => response.json())
      .then((data) => setJobs(data.results))
      .catch((error) => console.error(error));
  }, []);

  const Root = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.main}`,
    margin: 30,
    borderRadius: 25,
  }));

  return (
    <Root>
      <Box
        sx={{
          fontFamily: `{'Lato', sans-serif;}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" 
        mb={2}
        color={theme.palette.text.tertiary}>
          Junior Front-end Developer Jobs
        </Typography>

        {jobs.map((item) => (
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
              width: "80%",
              height: 100,
            }}
            key={item.id}
          >
            <CardContent>
              <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                color: theme.palette.text.tertiary,
                fontWeight: "600"
              }}>
              {
                <a
                  href={item.redirect_url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.title}
                </a>
              }
              </Typography>
              <Typography
              sx={{
                color: theme.palette.text.secondary,
              }}>
                {`Company: ${item.company.display_name},  
               Location: ${item.location.display_name}, Salary: ${item.salary_min}`}
               </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Root>
  );
};

export default JobList;
