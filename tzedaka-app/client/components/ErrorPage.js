import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const ErrorPage = ({ title, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="md"
        style={{ padding: "15%", backgroundColor: "#fbfbfb" }}
      >
        <Grid container spacing={10}>
          <Grid xs={6}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h5">{text}</Typography>
          </Grid>
          <Grid xs={6}>
            <IconButton color="primary" aria-label="big-sad-face">
              <SentimentVeryDissatisfiedIcon
                fontSize="100%"
                style={{ width: "5em", height: "5em" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ErrorPage;
