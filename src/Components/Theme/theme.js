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
    fontFamily: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  },
});

export default theme;
