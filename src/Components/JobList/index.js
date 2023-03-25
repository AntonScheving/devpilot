import React, { useEffect, useState } from "react";
import { Box, Card, ListItemText, Typography } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

const JobList = () => {
  const theme = useTheme();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=20&what=junior%20Front%20end%20developer&what_or=junio%20web%20developer&what_exclude=senior"
    )
      .then((response) => response.json())
      .then((data) => setJobs(data.results));
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
          margin: 2,
          fontFamily: `{'Lato', sans-serif;}`,
        }}
      >
        <Typography variant="h2" color={theme.palette.text.tertiary}>
          Junior Front-end Developer Jobs
        </Typography>

        {jobs.map((item) => (
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              height: 100,
            }}
            key={item.id}
          >
            <ListItemText
              sx={{
                width: "100%",
                textAlign: "center",
                color: theme.palette.text.tertiary,
              }}
              primary={
                <a
                  href={item.redirect_url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.title}
                </a>
              }
              secondary={`Company: ${item.company.display_name},  
               Location: ${item.location.display_name}, Salary: ${item.salary_min}`}
            />
          </Card>
        ))}
      </Box>
    </Root>
  );
};

export default JobList;
