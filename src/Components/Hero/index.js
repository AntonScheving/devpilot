import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Root = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(0deg, ${theme.palette.background.default} 22%, ${theme.palette.primary.main} 90%)`, // Set the background gradient colors
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "150vh",
  /* padding: "0 20px",*/
}));

const Image = styled("img")({
  maxWidth: "100%",
  maxHeight: "350px",
  borderRadius: "20%",
});

const ButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
});

const CustomButton = styled(Button)(({ theme }) => ({
  marginRight: "10px",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.info.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const Hero = () => {
  const theme = useTheme();
  return (
    // root component: the outermost component that renders a host component
    <Root className="hero-root">
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Image className="hero-img"
            src={process.env.PUBLIC_URL + "/images/lookingForAJob.jpg"}
            alt="Image by upklyak on Freepik"
          />
          {/* <Typography variant="caption" sx={{ color: "common.white" }}>
        Image by{" "}
        <a
          href="https://www.freepik.com/free-vector/job-search-banner-we-are-hiring-recruitment-ads_26474572.htm#page=2&position=14&from_view=author"
          target="_blank"
          rel="noopener noreferrer"
        >
          upklyak
        </a>{" "}
        on Freepik
      </Typography> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Unlock your career potential
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "common.white" }}
            >
              Discover the perfect job match for your skills and passions
            </Typography>

            <ButtonWrapper className= "button-wrapper">
              <CustomButton
                variant="contained"
                size="large"
                component={Link}
                to="/jobs"
              >
                JOBS
              </CustomButton>
              <CustomButton
                variant="contained"
                size="large"
                component={Link}
                to="/Companies"
              >
                EMPLOYERS
              </CustomButton>
            </ButtonWrapper>
          </div>
        </Grid>
      </Grid>

     { /* media queries added using a <style> tag, breakpoint value is defined the the MUI theme
     class name added to the MUi components to specify selector */}
      <style>
        {`
    @media (min-width: ${theme.breakpoints.values.md}px) {
      .hero-root {
        height: 100vh;
      }
      .hero-img {
        max-width: 80%;
        max-height: 600px;
        margin-right: auto;
        margin-left: 0;
      }
      .button-wrapper {
        margin-top: 80px;
      }
    }
  `}
      </style>
    </Root>
  );
};

export default Hero;
