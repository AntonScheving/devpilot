import React from "react";
import Navbar from "../Navbar";
import { CustomButton } from "../common/CommonButton/CustomButton";

import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
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
  paddingLeft: "10%",
  paddingRight: "10%",
}));

const teamMembers = [
  {
    name: "Maud Mainnemard",
    bio: "Front-end developer in the making, currently taking part in a bootcamp in the hope to start a career in Tech. I am not sure where the road will lead so keep in touch to find out.",
    github: "https://github.com/maudmain",
    linkedin: "https://www.linkedin.com/in/maud-mainnemard/",
  },
  {
    name: "Anton Scheving",
    bio: "As a dedicated front-end developer, I am passionate about creating appealing and user-friendly websites. With a keen eye for detail and a strong foundation in coding, I strive to contribute to innovative projects and support businesses in their digital journey.",
    github: "https://github.com/AntonScheving",
    linkedin: "https://www.linkedin.com/in/antonscheving/",
  },
  {
    name: "Vinita Yadav",
    bio: "Having certification in Front end web development by edX bootcamp, I am looking for the opportunities to start my career in Tech. Happy to make new connections.",
    github: "https://github.com/Vinita686",
    linkedin: "https://www.linkedin.com/in/yadav-vinita/",
  },
];

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Navbar />
      <Root className="hero-root">
        <Box pt={isMobile ? 4 : 8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    fontSize: 75,
                    marginTop: 5,
                  }}
                >
                  About
                </Typography>

                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    fontSize: 25,
                    paddingBottom: 10,
                  }}
                >
                  DevPilot is a specialized platform tailored for junior
                  developers seeking job opportunities in the tech industry. By
                  providing a curated selection of job listings, DevPilot helps
                  new developers find their footing in the competitive job
                  market. With a user-friendly interface and an extensive range
                  of listings, the platform aims to simplify the job search
                  process and connect aspiring developers with their ideal
                  roles. DevPilot is dedicated to empowering the next generation
                  of software developers and building a strong community for
                  growth and job.
                </Typography>
              </Box>
              <Grid
                container
                spacing={1}
                sx={{
                  paddingBottom: 10,
                }}
              >
                {teamMembers.map((member, index) => (
                  <Grid item xs={12} sm={12} md={4} key={index}>
                    <Card
                      sx={{
                        height: 250,
                        [theme.breakpoints.down("xl")]: {
                          height: "auto",
                        },
                      }}
                    >
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
                      <CardActions
                        sx={{ display: "flex", justifyContent: "space-around" }}
                      >
                        <CustomButton
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                        >
                          GitHub
                        </CustomButton>
                        <CustomButton
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                        >
                          LinkedIn
                        </CustomButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Root>
    </>
  );
}

export default About;
