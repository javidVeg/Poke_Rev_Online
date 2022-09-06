import React from "react";
import { Grid } from "@mui/material";
import "./Home.css";
import { YouTubeCard } from "../../Components/YouTube/YouTubeCard";
import Footer from "../../Components/Footer/Footer.js";
import ImageSlider from "../../Components/ImageSlider.js";
import fadewhite from "../../Images/fadedwhite.png"
const Home = () => {
  const slides = [
    { url: "http://localhost:3000/MGB1.jpg", title: "Image 1" },
    { url: "http://localhost:3000/MGB2.jpeg", title: "Image 2" }
  ];
  return (
    <div>
      <div className="gradient-layer">
        <div className="holo-layer">
          <div className="home-container">
            <img src="/Poke-Rev-home.png" width="100%" />

            {/* <Grid sx={{ width: '300px', height: '300px', margin: 5 }}>
            <ImageSlider slides={slides} />
          </Grid> */}
            {/* <Footer /> */}
          </div>
        </div>
        <div className="youtube-card">
          <div className="youtube-vid"><YouTubeCard /></div>
          
        </div>
      </div>
      <div className="white"></div>
    </div>
  );
};

export default Home;
