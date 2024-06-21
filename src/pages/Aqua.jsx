import "./moreInfo.css";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: "Waterslides.jpg",
    name: "AquaPark",
  },
  {
    src: "Waterslides.jpg",
    name: "AquaPark",
  },
  {
    src: "Waterslides.jpg",
    name: "AquaPark",
  },
  {   src: "Waterslides.jpg",
  name: "AquaPark",
  },
];

function Aqua() {
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
        <h1 className="info-title titleHotel font-primary miniclubtittle ">Aquapark</h1>
        <p className="info-description miniclubdescription">
        L’aquapark de l’hôtel Le Soleil Bella Vista est une oasis de plaisir et d’aventure. Avec ses 
        toboggans vertigineux, ses piscines rafraîchissantes et ses attractions palpitantes, 
        il offre une expérience unique à tous les visiteurs.
         Que vous soyez un jeune aventurier en quête de sensations fortes ou une famille cherchant 
         à se détendre, notre aquapark répondra à toutes vos attentes.” 🌊🏊‍♂️🌴
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

export default Aqua;

