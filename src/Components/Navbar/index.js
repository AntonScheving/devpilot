import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography variant="h6" component="div" sx={{ fontSize: "40px" }}>
              DevPilot
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" component={Link} to="/jobs">
            Job Listings
          </Button>
          <Button color="inherit" component={Link} to="/companies">
            Companies
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
