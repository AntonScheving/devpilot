import React from 'react'

import Location from '../Components/Location';

import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
}));

const Jobs = () => {
  return (
    <Root>
    <Grid container spacing={2} sx={{}}>
        <Grid item xs={12} sm={12} md={10}>
          <Location />
        </Grid>
      </Grid>
    </Root>
  )
}

export default Jobs;