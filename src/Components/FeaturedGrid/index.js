import React from 'react'
import FeaturedCompanies from '../FeaturedCompanies';
import { Grid } from '@mui/material';
import FeaturedListings from '../FeaturedListings';

const FeaturedGrid = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        border: "1px solid blue",
        m: 4,
      }}
    >
      <Grid item xs={12} sm={6}>
        <FeaturedCompanies />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FeaturedListings />
      </Grid>

    </Grid>
  );
};

export default FeaturedGrid;
