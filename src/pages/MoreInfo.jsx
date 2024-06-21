import "./moreInfo.css";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: "generalview.jpg",
    name: "GeNeRaL View",
  },
  {
    src: "loisir.jpg",
    name: "Picine",
  },
  {
    src: "kidpool1.jpg",
    name: "kIDSpool",
  },
  {
    src: "mainresto.jpg",
    name: "Restaurent",
  },
];

function Moreinfo() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePointClick = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <img className="bellaimage" src="bella.jpg" alt="" />
      </div>
       <div className="more-info-container">
      
      <div className="text-container">
        <h1 className="info-title  font-primary  ">Les meilleures vacances commencent ici !</h1>
        <p className="info-description">
        Le Soleil Bella Vista est un complexe en bord de plage situé à Monastir, en Tunisie. Avec ses 252 chambres confortables, ses vues imprenables sur la mer Méditerranée et ses installations tout compris, il offre une expérience de détente et de découverte. Profitez des piscines scintillantes, de la cuisine gastronomique et de l’accès direct à la plage. Explorez le mausolée de Bourguiba et la marina de Monastir pour une immersion culturelle. Bienvenue à l’élégance méditerranéenne au Le Soleil Bella Vista ! ☀️🌴
        </p>
      </div>
      <div className="gallerycontainer">
        <div className="main-image-container">
          <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].name}
            className="main-image"
          />
          <div className="image-name">{images[selectedImageIndex].name}</div>
        </div>
        <div className="points-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`point ${selectedImageIndex === index ? 'selected' : ''}`}
              onClick={() => handlePointClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Moreinfo;
