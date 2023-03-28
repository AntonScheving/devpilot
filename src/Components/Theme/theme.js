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
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

export default theme;
