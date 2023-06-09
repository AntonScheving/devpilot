import React, { useState, useEffect } from "react";
import CompanySearch from "../CompanySearch";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Axios is a HTTP client for making API requests
import Axios from "axios";
// Link is imported from "react-router-dom" to handle in-app navigation.
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  styled,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "bottom",
}));

export default function CompaniesHiring() {
  const [groupedCompanies, setGroupedCompanies] = useState([]);
  // useTheme and useMediaQuery are hooks from Material UI
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    // Fetch the initial data when the component mounts
    handleLocationSearch("");
  }, []);

  const handleLocationSearch = (location) => {
    const encodedLocation = encodeURIComponent(location);
    Axios.get(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=45&what=Front%20end%20developer&what_or=Front%20end%20web%20developer&what_exclude=senior&where=${encodedLocation}`
    ).then((response) => {
      const companyLinks = response.data.results.map((job) => ({
        name: job.company.display_name,
        url: job.redirect_url,
      }));
      const companyGroup = companyLinks.reduce((acc, curr) => {
        acc[curr.name] = acc[curr.name] || { count: 0, url: curr.url };
        acc[curr.name].count++;
        return acc;
      }, {});

      setGroupedCompanies(
        Object.entries(companyGroup).map(([name, { count, url }]) => ({
          name,
          count,
          url,
        }))
      );
      if (response.data.results.length === 0) {
      alert('No job listings found for this city. Extend your search to another city.');
      }
    });
  };

  return (
    <>
      <Navbar />
      <Root className="hero-root">
        <Box pt={isMobile ? 4 : 8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Companies Hiring Front-End Developers
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <CompanySearch onSearch={handleLocationSearch} />
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12} md={9}>
              <Container>
                <List>
                  {groupedCompanies.map((company) => (
                    <ListItem
                      key={company.url}
                      component={RouterLink}
                      to={`/CompanyJobs/${encodeURIComponent(company.name)}`}
                      button
                      disableGutters={isMobile}
                    >
                      <ListItemText
                        sx={{ color: "common.white" }}
                        primary={`${company.name} (${company.count})`}
                        primaryTypographyProps={{ variant: "body1" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Root>
      <Footer />
    </>
  );
}
