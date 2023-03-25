import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#333652",
    },
    secondary: {
      main: "#90ADC6",
    },
    info: {
      main: "#FAD02C",
    },
    background: {
      default: "#E9EAEC",
    },
    text: {
      primary: "#333652",
      secondary: "#90ADC6",
      tertiary: "#FAD02C",
    },
  },
  typography: {
    fontFamily: {
      fontFamily: "Lato",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
