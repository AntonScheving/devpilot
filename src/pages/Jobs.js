import React from 'react'

feature/style-jobspage
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

import Location from '../Components/Location'
import Navbar from '../Components/Navbar'

const Jobs = () => {
  return (
    <>
      <Navbar/>
    <div>
      <h2>Junior Front-end Developer Jobs:</h2>
    </div>
    <Location />
    </>
  )
}

export default Jobs;