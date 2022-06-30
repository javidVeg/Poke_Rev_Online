import React, { useEffect } from "react";
import { CardContent, Container, Typography } from "@mui/material";
import SignIn from "../Components/Sign In/SignIn.js";
import SignUp from "../Components/Register/Register";
import { Card, CardMedia } from "@mui/material";
import { Grid, Box } from "@mui/material";
import "./Home.css";
import OutlinedCard from "../Components/Card/HomeCard.js";
import { YouTubeCard } from "../Components/YouTube/YouTubeCard";
import Footer from "../Components/Footer/Footer.js";

const Home = () => {
  return (
    <div width="100%">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img src="/Poke-Rev-home.png" width="100%" />
          <YouTubeCard />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
