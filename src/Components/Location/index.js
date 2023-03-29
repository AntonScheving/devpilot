import React, {  useState } from "react";
import JobList from "../JobList";

import { Box, Typography, Card, List, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

const Location = ({ searchHistoryManager }) => {
  const theme = useTheme();
  const [location, setLocation] = useState("");
  const [apiData, setApiData] = useState([]);

  searchHistoryManager.visitHistoryItem = setLocation;

  const handleSearch = (e) => {
    const userInput = e.target.value;
    setLocation(userInput);
  };

  const fetchData = () => {
    console.log("fetchData called");
    fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=0f15a296c6a265d2e7c0fb2fbe7cb467&results_per_page=50&what=junior%20Frontend%20developer&where=${location}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length === 0) {
          alert('No job listings found for this city. Extend your search to another city.');
        } else {
          setApiData(data.results);
  }
})
    .catch((error) => console.error(error));
  };
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
          Filter/Search
        </Typography>
        <TextField
          id="outlined-search"
          label="Jobs by Location"
          type="search"
          value={location}
          onChange={handleSearch}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              searchHistoryManager.saveHistoryItem(location)
              fetchData();
              setLocation("");
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
                width: "80%",
                height: 80,
              }}
              key={job.id}
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
                    href={job.redirect_url}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {job.title}
                  </a>
                }
                </Typography>
                <Typography 
                sx={{
                color: theme.palette.text.secondary,
              }}>
                {`Company: ${job.company.display_name},  
               Location: ${job.location.display_name}, Salary: ${job.salary_min}`}
              </Typography>
              </CardContent>
            </Card>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Location;
