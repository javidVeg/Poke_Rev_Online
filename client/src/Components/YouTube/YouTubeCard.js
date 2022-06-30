import React, { useEffect, useState } from "react";
import { Box, Card } from "@mui/material";
import axios from "axios";
import './YouTubeCard.css' 

const URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCUHYM7gs-GZpRGEsskTEqzQ&maxResults=1&order=date&key=AIzaSyAA-9xyfDYnj_ngMe3steC1YVSVim2jiB0";

export const YouTubeCard = () => {
  const [videoData, SetVideoData] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetVideoData(data);
      });
  }, []);

  const videos = videoData.items;
  console.log(videos);

  return (
    <Box
      component="div"
      className='video-container'
    >
      {videos && (
        <div>
          {videos.map((data) => {
            const videoSource = `https://www.youtube.com/embed/${data.id.videoId}`;
            return (
              <iframe
                key={videos.id}
                className= 'video'
                src={videoSource}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            );
          })}
          <div className='shadow'></div>
        </div>
      )}
    </Box>
  );
};
