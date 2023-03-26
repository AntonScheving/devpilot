import React from 'react'
import Location from '../Components/Location';
import Navbar from '../Components/Navbar'

import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import JobList from '../Components/JobList';


const Root = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
}));

const Jobs = () => {
  return (
    <Root>
      <Navbar />
      <Grid container spacing={2} sx={{}} style={{ marginTop: '20px' }}>
      <Grid item xs={12} md={9}>
        <JobList/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Location />
      </Grid>
    </Grid>
    
    </Root>




  )
}

export default Jobs;