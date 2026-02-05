import React from "react";
import { Box, Typography } from "@mui/material";
import CardComponent from "../components/CardComponent";

const Projects = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold" }}>
        Our Projects
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <CardComponent title="AI Assistant" description="A smart assistant to help businesses automate tasks." />
        <CardComponent title="Analytics Dashboard" description="Track performance metrics with clean visualizations." />
        <CardComponent title="Mobile App" description="Engage customers with a sleek mobile experience." />
      </Box>
    </Box>
  );
};

export default Projects;
