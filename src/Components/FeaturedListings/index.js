import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { CustomButton } from "../common/CommonButton/CustomButton";

import { formatDistanceToNow } from "date-fns";

const FeaturedListings = () => {
  const theme = useTheme();


  // Using the useState hook to initialize the featured listings
  const [featuredListings, setFeaturedListings] = useState([]);

  // useEffect hook to make the API request
  useEffect(() => {
    // Define API credentials and endpoint URL
    const appId = "6c3aabdd";
    const appKey = "0f15a296c6a265d2e7c0fb2fbe7cb467";
    const apiURL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=5&what=front-end%20junior&max_days_old=14&sort_by=date`;

    // Make API request to fetch latest listings for junior front-end jobs in the UK
    fetch(apiURL)
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        // Set the state variable with the listings from the API response
        setFeaturedListings(data.results);
      })
      .catch((error) => console.error(error));
  }, []);
  // Pass an empty array([]) as the second argument to useEffect.This tells React to run the effect only once, when the component is mounted, and not on subsequent re - renders.
  
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
          {" "}
          Latest Listings
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          {" "}
          sorted by date
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
          {featuredListings.map((featuredListing) => (
            <ListItem key={featuredListing.title}>
              <ListItemText
                sx={{
                  width: "100%",
                  textAlign: "center",
                  color: theme.palette.text.tertiary,
                }}
                primary={
                  <a
                    href={featuredListing.redirect_url}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {featuredListing.title}
                  </a>
                }
                // Format the date string of the `created` property in the `featuredListing` object to relative time "...days ago"
                // using the `formatDistanceToNow` from date-fns library
                // https://date-fns.org/v2.29.3/docs/formatDistanceToNow
                secondary={`Created ${formatDistanceToNow(
                  new Date(featuredListing.created),
                  { addSuffix: true }
                )}`}
              />
            </ListItem>
          ))}
        </List>
        <CustomButton
          variant="contained"
          size="large"
          component={Link}
          to="/jobs"
        >
           MORE JOBS
        </CustomButton>
      </Box>
    </Root>
  );
};

export default FeaturedListings;
