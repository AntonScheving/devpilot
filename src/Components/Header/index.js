import { Typography, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Jobs",
    href: "./jobs",
  },
  {
    label: "Companies",
    href: "/companies",
  },
  {
    label: "About",
    href: "./about",
  },
  {
    label: "Contact us",
    href: "./contact",
  },
];

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar>
        {devPilotLogo}
        {getMenuButtons()}
      </Toolbar>
    );
  };

  const devPilotLogo = (
    <Typography variant="h6" component="h1">
      DevPilot
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
