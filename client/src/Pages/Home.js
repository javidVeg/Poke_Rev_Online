import React from "react";
import { Grid} from "@mui/material";
import "./Home.css";
import { YouTubeCard } from "../Components/YouTube/YouTubeCard";
import Footer from "../Components/Footer/Footer.js";
import ImageSlider from "../Components/ImageSlider.js";

const Home = () => {
    const slides = [
        {url: "http://localhost:3000/MGB1.jpg", title: "Image 1"},
        {url: "http://localhost:3000/MGB2.jpeg", title: "Image 2"}
    ];
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
        <Grid sx={{ width: '300px',height: '300px', margin: 5}}>
            <ImageSlider slides={slides}/>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
