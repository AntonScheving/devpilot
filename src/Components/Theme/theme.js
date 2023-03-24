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
    },
  },
  typography: {
    fontFamily: {
      fontFamily: ["Lato", "Roboto", "Montserrat", '"Segoe UI"'].join(","),
    },
  },
});

export default theme;
