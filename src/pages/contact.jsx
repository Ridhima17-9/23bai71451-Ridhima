import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold" }}>
        Contact Us
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          maxWidth: 400,
          mx: "auto",
        }}
      >
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
        <Button variant="contained" color="primary">Send Message</Button>
      </Box>
    </Box>
  );
};

export default Contact;
