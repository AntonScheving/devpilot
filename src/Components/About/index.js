import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";


import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  styled,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Defines a Root styled-component that wraps around the page and uses the Material-UI Box component and applies custom styles to it
const Root = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "bottom",
  height: "75vh",
  paddingLeft: "10%",
  paddingRight: "10%"
}));

const teamMembers = [
  {
    name: "Maud Mainnemard",
    bio: "Front-end Developer",
    github: "https://github.com/maudmain",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Vinita Yadav",
    bio: "Front-end Developer",
    github: "https://github.com/Vinita686",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Anton Scheving",
    bio: "Front-end Developer",
    github: "https://github.com/AntonScheving",
    linkedin: "https://www.linkedin.com/in/antonscheving/",
  },
];

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Navbar />
      <Root className="hero-root">
        <Grid>
          <Typography
            variant="h1"
            component="h1"
            style={{ marginBottom: "24px" }}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            component="p"
            style={{ marginBottom: "40px" }}
          >
            DevPilot is a specialized platform tailored for junior developers
            seeking job opportunities in the tech industry. By providing a
            curated selection of job listings, DevPilot helps new developers
            find their footing in the competitive job market. With a
            user-friendly interface and an extensive range of listings, the
            platform aims to simplify the job search process and connect
            aspiring developers with their ideal roles. DevPilot is dedicated to
            empowering the next generation of software developers and building a
            strong community for growth and job fulfillment.
          </Typography>
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid item xs={isMobile ? 12 : 6} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{ marginBottom: "16px" }}
                    >
                      {member.bio}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                    >
                      GitHub
                    </Button>
                    <Button
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                    >
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Root>
      <Footer />
    </>
  );
}

export default About;
