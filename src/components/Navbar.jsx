import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          StartupX
        </Typography>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            Get Started
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
