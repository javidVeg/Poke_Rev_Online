require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();
const ytAPIKey = "AIzaSyDCXrZcK5xxLFToOVhYJxXh0q8utsDcwNg";
const baseURL = "https://www.googleapis.com/youtube/v3";

router.get("/", async (req, res, next) => {
  try {
    const videos = req.body.video;
    const url = `${baseURL}/search?key=${ytAPIKey}&type=video&part=snippet&q=${videos}`;
    // const response = await axios.get(url);
    res.send(url);
  } catch (error) {
    next(err)
  }
});

module.exports = router;
