import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel"
import "../../styles/TecnologiasStyles.css";



const TechnologiesSection = () => {
  return (
    <div className="carousel-section">
      <div className="carousel-container">
        <Carousel className="carousel-shadow">
          {[
            "image/html",
            "image/css3logo",
            "image/javascript",
            "image/node",
            "image/git-logo",
            "image/github",
            "image/firebase",
            "image/mongo",
            "image/reactjs",
            "image/next",
            "image/boostrap",
            "image/reactboostrap",
            "image/materialui",
          ].map((image, index) => (
            <Carousel.Item key={index} className="carousel-item">
              <img src={`/${image}.jpg`} alt={`Certificación ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TechnologiesSection;
