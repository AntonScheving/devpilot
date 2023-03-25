import { Typography, Button, IconButton, Drawer, MenuItem } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {Link,  Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

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

const menuButton = styled("button")({
  fontWeight: 700,
  fontSize: "18px",
  marginLeft: "38px",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiPaper-root": {
        backgroundColor: theme.palette.primary.main,
        color: "white"
    },
}));

export default function Header() {
    const theme = useTheme();
    
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <StyledToolbar className="toolbar">
        {devPilotLogo}
        <div>{getMenuButtons()}</div>
      </StyledToolbar>
    );
  };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>

            <StyledDrawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
                theme: theme,
              }}
            >
              <div>{getDrawerChoices()}</div>
            </StyledDrawer>
            <div>{devPilotLogo}</div>
          </Toolbar>
        );
    }

    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem style={{ color: "white" }}>{label}</MenuItem>
          </Link>
        );
      });
    };

    const devPilotLogo = (
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <Typography variant="h3" component="h1">
        DevPilot
      </Typography>
        </Link>
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
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };

    return (
      <header>
        <AppBar>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
      </header>
    );
  };

