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
    fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=100&what=Front-End%20Developer&what_and=junior%20Developer%20junior%20Web%20Developer&what_exclude=senior%20lead%20full&salary_include_unknown=1&where=${location}`
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
                height: 120,
                margin: 0.3,
                [theme.breakpoints.down("sm")]: {
                width: "100%",
                height: "auto",
                display: "flex",
                alignItems: "center",
                margin: 0.3,
                },
              }}
              key={job.id}
            >
              <CardContent
              sx={{
                width: "100%",
                textAlign: "center",
                color: theme.palette.text.tertiary,
                fontWeight: "600",
                "& > a": {
                  textDecoration: "none",
                  color: "inherit",
                },
              }}
              >
          <React.Fragment>
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
                <Typography sx={{color: theme.palette.text.secondary }}>
                  Company: {job.company.display_name}</Typography>
                <Typography sx={{ color: theme.palette.text.secondary }}>Location: {job.location.display_name}</Typography>
                <Typography sx={{ color: theme.palette.text.secondary }}>Salary: {job.salary_min}</Typography>
          </React.Fragment>
              </CardContent>
            </Card>
          ))}
      </List>
      </Box>
    </>
  );
};

export default Location;
