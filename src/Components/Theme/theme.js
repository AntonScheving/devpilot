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
      fontFamily: 'Lato'
    },
  },
});

export default theme;
