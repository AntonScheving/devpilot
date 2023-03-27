import React from 'react'
import Location from "../Location";

import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
}));

const WrapLocJoblist = () => {
  return (
    <Root>
      <Grid container spacing={2} style={{ marginTop:'20px'}}>
        
      <Grid item xs={12} md={12}>
        <Location />
       </Grid>
    </Grid>
    </Root>

  )
}

export default WrapLocJoblist;