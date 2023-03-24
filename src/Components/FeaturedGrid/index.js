import React from 'react'
import FeaturedCompanies from '../FeaturedCompanies';
import { Grid, Box } from '@mui/material';
import FeaturedListings from '../FeaturedListings';
import { styled } from "@mui/material/styles";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: `${ theme.palette.background.default }`
}))


const FeaturedGrid = () => {
  return (
    <Root>
      <Grid
        container
        spacing={2}
        sx={{
          border: "1px solid blue",
          mx: 4,
        }}
      >
        <Grid item xs={12} sm={6}>
          <FeaturedCompanies />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FeaturedListings />
        </Grid>
      </Grid>
    </Root>
  );
};

export default FeaturedGrid;
