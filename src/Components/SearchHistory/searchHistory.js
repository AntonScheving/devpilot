import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

const SearchHistory = ({ searchHistoryManager }) => {
    const theme = useTheme();
    // create a useState for the search history
    const [searchHistory, setSearchHistory] = useState([]);
    const [location, setLocation] = useState("");
    
    searchHistoryManager.saveHistoryItem = setLocation;

  // get the search history from local storage, or use an empty array if it doesn't exist yet
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    // set the search history state to the retrieved history
    setSearchHistory(history);
  }, []); // empty array as the second argument ensures that this effect only runs once, on component mount. This prevents it from running on subsequent re-renders, which could cause an infinite loop.

  useEffect(() => {
    // update search history if location is valid and not already in history
    const newHistory = [...searchHistory];
    // add new search to beginning of history using unshift()
    if (location && !newHistory.includes(location)) {
      newHistory.unshift(location);
      // trim history to 5 items
      if (newHistory.length > 5) {
        newHistory.pop();
      }
      // update search history state variable
      setSearchHistory(newHistory);
      // save search history to local storage as JSON string
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    }
  }, [searchHistory, location]);

  return (
    <div>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,

          marginTop: 4,
          mx: 4,
          borderRadius: 5,
          height: "100%",
          maxWidth: "100%",
          fontFamily: `{'Lato', sans-serif;}`,
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color={theme.palette.text.tertiary}>
          Search History:
        </Typography>
        <List>
          {searchHistory.map((search, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={search}
                onClick={() => searchHistoryManager.visitHistoryItem(search)}
                style={{ color: "#90ADC6", textAlign: "center" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default SearchHistory;
