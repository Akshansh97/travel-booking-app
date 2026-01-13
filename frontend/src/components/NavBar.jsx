//navbar
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Image } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav>
      <AppBar position="fixed">
        <Toolbar>
          <Image src="/buslogo.png" alt="logo" width="50" height="50" />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              fontSize: "2.5rem",
              background: "linear-gradient(to right, red, cyan)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontFamily: "cursive",
            }}
          >
            REDBUS
          </Typography>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", sm: "flex" },
                fontWeight: "bold",
                background: "linear-gradient(to right, yellow, cyan)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "initial",
              }}
            >
              My Bookings
            </Button>
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", sm: "flex" },
                fontWeight: "bold",
                background: "linear-gradient(to right, yellow, cyan)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "initial",
              }}
            >
              Search
            </Button>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", sm: "flex" },
                fontWeight: "bold",
                background: "linear-gradient(to right, yellow, cyan)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "initial",
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", sm: "flex" },
                fontWeight: "bold",
                background: "linear-gradient(to right, yellow, cyan)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "initial",
              }}
            >
              Profile
            </Button>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", sm: "block" },
                fontWeight: "bold",
                background: "linear-gradient(to right, yellow, cyan)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "initial",
              }}
            >
              Sign Up
            </Button>
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", sm: "block" },
                fontWeight: "bold",
                background: "linear-gradient(to right, yellow, cyan)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "initial",
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;
