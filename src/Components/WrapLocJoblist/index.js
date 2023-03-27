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
      <Grid
        container
        spacing={2}
        style={{ marginTop: "40px" }}
      >
        <Grid item xs={12} md={2}>
          <SearchHistory searchHistoryManager={searchHistoryManager} />
        </Grid>

        <Grid
          item
          xs={12}
          md={10}
          style={{ marginBottom: "40px" }}
        >
          <Location searchHistoryManager={searchHistoryManager} />
        </Grid>
      </Grid>
    </Root>
  );
};

export default WrapLocJoblist;
