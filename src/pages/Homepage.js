import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Homepage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <Paper elevation={3} style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Submitted Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          Name: {state.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {state.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Age: {state.age}
        </Typography>
        {state.attendingWithGuest === "Yes" && (
          <Typography variant="body1" gutterBottom>
            Guest Name: {state.guestName}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default Homepage;
