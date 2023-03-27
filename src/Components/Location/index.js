import React, { useState } from "react";

import JobList from "../JobList";

import { Box, Typography, Card, List, ListItemText } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useTheme } from "@mui/material/styles";

const Location = () => {
  const theme = useTheme();
  const [location, setLocation] = useState("");
  const [apiData, setApiData] = useState([]);

  const handleSearch = (e) => {
    console.log("handleSearch called");
    const userInput = e.target.value;
    setLocation(userInput);
  };

  const fetchData = async () => {
    console.log("fetchData called");
    const response = await fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=0f15a296c6a265d2e7c0fb2fbe7cb467&results_per_page=10&what=junior%20developer&where=${location}`
    );
    const data = await response.json();
    setApiData(data.results);
  };

  // const Root = styled(Box)(({ theme }) => ({
  //     backgroundColor: `${theme.palette.primary.main}`,
  //     margin: 30,
  //     borderRadius: 25,
  //     height: "100%",
  //   }));

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          margin: 4,
          borderRadius: 5,
          height: "100%",
          fontFamily: `{'Lato', sans-serif;}`,
          alignItems: "center",
        }}
      >
        <Typography variant="h4" mb={1} color={theme.palette.text.tertiary}>
          {""}
          Filter/Search
        </Typography>

        <TextField
          label="Jobs by Location"
          type="search"
          value={location}
          onChange={handleSearch}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              fetchData();
            }
          }}
          InputProps={{ style: { backgroundColor: "#f0f0f0" } }}
        />

        {/* // conditional render which happens if the apiData array is empty n JobList comp renders  */}

        {!apiData.length && <JobList />}

        <List
          sx={{
            width: "100%",
            textAlign: "center",
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {apiData.map((job) => (
            <Card
              variant="outlined"
              orientation="horizontal"
              sx={{
                width: "50%",
                height: 80,
              }}
              key={job.id}
            >
              <ListItemText
                sx={{
                  width: "100%",
                  textAlign: "center",
                  color: theme.palette.text.tertiary,
                }}
                primary={
                  <a
                    href={job.redirect_url}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {job.title}
                  </a>
                }
                secondary={`Company: ${job.company.display_name},  
               Location: ${job.location.display_name}, Salary: ${job.salary_min}`}
              />
            </Card>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Location;
