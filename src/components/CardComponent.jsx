import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CardComponent = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
