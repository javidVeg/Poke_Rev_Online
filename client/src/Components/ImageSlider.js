/* eslint-disable react/prop-types */
import React, {useState} from 'react'


const ImageSlider = ({ slides }) => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const sliderStyles = {
        height: '100%',
        position: 'relative'
    };
    const slideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const leftStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
      };
      const rightStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
      };
  return (
    <div style= {sliderStyles}>
        <div style= {leftStyle}>❮</div>
        <div style= {rightStyle}>❯</div>
        <div style= {slideStyle}></div>
    </div>
  )
}

export default ImageSlider