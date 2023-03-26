import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
// import JobList from '../JobList';
import SearchHistory from "../SearchHistory/searchHistory";

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

  return (
    <>
      <Box
        //  {/* // conditional render which happens if the apiData array is empty n JobList comp renders  */}
        // {apiData.length === 0 && <JobList />}
        sx={{
          backgroundColor: theme.palette.primary.main,
          margin: 4,
          borderRadius: 5,
          height: "100%",
          fontFamily: `{'Lato', sans-serif;}`,
        }}
      >
        <Typography variant="h4" mb={1} color={theme.palette.text.tertiary}>
          {""}
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
              fetchData();
            }
          }}
          InputProps={{ style: { backgroundColor: "#F0F0F0" } }}
        />
        {/* <input type="text"
        placeholder='Location'
        value={location}
        onChange={handleSearch}/>
        <button onClick={fetchData}>Search</button> */}
        {apiData.map((job) => (
          <div key={job.id}>
            <div>
              <a href={job.redirect_url}>
                <h3>{job.title}</h3>
              </a>
              <p>{job.company.display_name}</p>
            </div>
          </div>
        ))}

      </Box>
    </>
  );
};
export default Location;
