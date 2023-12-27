import React from "react";
import { Link } from "react-router-dom";
import "../../styles/CertificadosStyle.css";
import Carousel from "react-bootstrap/Carousel";
export default function Certificaciones() {
  return (
    <div className="carousel-section">
      <Carousel className="carousel-shadow">
        {[
          "image/desarrolloweb",
          "image/js",
          "image/react",
          "image/front",
          "image/back",
          "image/full",
        ].map((image, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <img src={`/${image}.jpg`} alt={`Certificación ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
