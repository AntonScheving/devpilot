import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#90ADC6",
    },
    secondary: {
      main: "#FAD02C",
    },
    info: {
      main: "#FAD02C",
    },
    background: {
      default: "#E9EAEC",
    },
    text: {
      primary: "#333652",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
});

export default theme;
