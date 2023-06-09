import { Box, List, ListItem, ListItemText, Typography} from '@mui/material';
import React, { useState, useEffect} from 'react';
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { CustomButton } from "../common/CommonButton/CustomButton";

const FeaturedCompanies = () => {
  const theme = useTheme();
  
    // Using the useState hook to initialize the featured companies
  const [featuredCompanies, setFeaturedCompanies] = useState([]);

    // useEffect hook to make the API request
    useEffect(() => {
      // Define API credentials and endpoint URL
      const appId = "6c3aabdd";
      const appKey = "0f15a296c6a265d2e7c0fb2fbe7cb467";
      const apiURL = `https://api.adzuna.com/v1/api/jobs/gb/top_companies?app_id=${appId}&app_key=${appKey}&what=front-end`;

      // Make API request to fetch top companies for front-end jobs in the UK
      fetch(apiURL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // Set the state variable with the leaderboard data from the API response
          setFeaturedCompanies(data.leaderboard);
        })
        .catch((error) => console.error(error));
    }, []); 
    // Pass an empty array([]) as the second argument to useEffect.This tells React to run the effect only once, when the component is mounted, and not on subsequent re - renders.

  const Root = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.main}`,
    margin: 30,
    borderRadius:25,
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
          {" "}
          Top Companies
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          {" "}
          Hiring Front-end developers ranked by job vacancies available
        </Typography>
        <List
          sx={{
            width: "100%",
            textAlign: "center",
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {featuredCompanies.map((featuredCompany) => (
            <ListItem key={featuredCompany.canonical_name}>
              <ListItemText
                sx={{
                  width: "100%",
                  textAlign: "center",
                  color: theme.palette.text.tertiary,
                }}
                primary={featuredCompany.canonical_name}
                secondary={`${featuredCompany.count} ${
                  featuredCompany.count > 1 ? "Jobs" : "Job"
                }`}
              />
            </ListItem>
          ))}
        </List>
        <CustomButton
          variant="contained"
          size="large"
          component={Link}
          to="/companies"
        >
          MORE EMPLOYERS
        </CustomButton>
      </Box>
    </Root>
  );
}

export default FeaturedCompanies