import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 3, textAlign: "center" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} StartupX. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
