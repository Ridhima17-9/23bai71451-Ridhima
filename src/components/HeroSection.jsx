import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #1976d2, #42a5f5)",
        color: "white",
        p: 4,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
        Build Smarter with StartupX
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, maxWidth: "600px" }}>
        A modern platform to accelerate your business growth with clean design and powerful tools.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
