import "./moreInfo.css";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: "miniclub.jpg",
    name: "KIds",
  },
  {
    src: "miniclub.jpg",
    name: "KIds",
  },
  {
    src: "miniclub.jpg",
    name: "KIds",
  },
  { src: "miniclub.jpg",
  name: "KIds",
  },
];

function MiniClub() {
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
        <h1 className="info-title titleHotel font-primary miniclubtittle ">Mini Club</h1>
        <p className="info-description miniclubdescription">
        • Un mini-club ouvert tous les jours de l’année avec monitrices professionnelles proposant des jeux divertissants pour les enfants.
        <br></br>  <br></br>
• Piscine pour enfants 
<br></br>  <br></br>
• Aire de jeux piscine pour enfants, toboggans, théâtre, salle de relaxation.
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

export default MiniClub;

