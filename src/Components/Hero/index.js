import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(0deg, ${theme.palette.background.default} 22%, ${theme.palette.primary.main} 90%)`, // Set the background gradient colors
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  /* padding: "0 20px",*/
}));

const Image = styled("img")({
  maxWidth: "100%",
  height: "auto",
  marginRight: "50px",
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
  return (
    // root component: the outermost component that renders a host component
    <Root>
      <Image src="" alt="Image by upklyak on Freepik" />
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
      <div>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ color: "common.white" }}
        >
          Find your dream job
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: "common.white" }}>
          The best carreer opportunities happen here
        </Typography>
        
        <ButtonWrapper>
          <CustomButton variant="contained" color="info">
            JOBS
          </CustomButton>
          <CustomButton variant="contained">EMPLOYERS</CustomButton>
        </ButtonWrapper>
      </div>
    </Root>
  );
}
 

export default Hero;