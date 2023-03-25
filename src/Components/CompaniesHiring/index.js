import React, { useState, useEffect } from "react";
// // Axios ia a HTTP client for making API requests
import Axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function CompaniesHiring() {
  const [groupedCompanies, setGroupedCompanies] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    Axios.get(
      "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=965a2d73c4df5e1c3f1e7c86b9b50096&results_per_page=45&what=Front%20end%20developer&what_or=Front%20end%20web%20developer&what_exclude=senior"
      // The response is the API object received
    ).then((response) => {
      // creates an array of objects containing the company name and job URL
      const companyLinks = response.data.results.map((job) => ({
        name: job.company.display_name,
        url: job.redirect_url,
      }));
      // We use the reduce method to group the job listings by company name, creating an object with each company name as a key and an object containing the job count and a URL as its value.
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
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Companies Hiring
      </Typography>
      <List>
        {/* Maps through the groupedCompanies array, rendering a element for each company. */}
        {groupedCompanies.map((company) => (
          <ListItem
            key={company.url}
            component={RouterLink}
            to={`/CompanyJobs/${encodeURIComponent(company.name)}`}
            button
            disableGutters={isMobile}
          >
            <ListItemText
              primary={`${company.name} (${company.count})`}
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
