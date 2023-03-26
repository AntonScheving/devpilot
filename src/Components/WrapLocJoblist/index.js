import React from "react";
import Location from "../Location";

import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import SearchHistory from "../SearchHistory/searchHistory";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
}));

const searchHistoryManager = {
  visitHistoryItem: function (location) { },
  saveHistoryItem: function (location) { },
}

const WrapLocJoblist = () => {
  return (
    <Root>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid>
          <SearchHistory searchHistoryManager={searchHistoryManager} />
        </Grid>

        <Grid item xs={12} md={10}>
          <Location searchHistoryManager={searchHistoryManager} />
        </Grid>
      </Grid>
    </Root>
  );
};

export default WrapLocJoblist;
