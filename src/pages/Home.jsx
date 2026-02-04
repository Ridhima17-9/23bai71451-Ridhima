import React from "react";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", p: 4 }}>
        <CardComponent title="Fast Setup" description="Launch your project in minutes with our streamlined tools." />
        <CardComponent title="Scalable Design" description="Grow seamlessly with responsive and modern UI components." />
        <CardComponent title="Secure Platform" description="Your data is protected with enterprise-grade security." />
      </Box>
    </>
  );
};

export default Home;
