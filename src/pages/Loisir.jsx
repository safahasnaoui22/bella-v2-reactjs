import "./moreInfo.css";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: "loisir.jpg",
    name: "Enjoy",
  },
  {
    src: "loisir.jpg",
    name: "Enjoy",
  },
  {
    src: "loisir.jpg",
    name: "Enjoy",
  },
  {  src: "loisir.jpg",
  name: "Enjoy",
  },
];

function Loisir() {
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
        <h1 className="info-title titleHotel font-primary miniclubtittle ">Divertissement</h1>
        <p className="info-description miniclubdescription">
        L’hôtel Bella Vista, situé le long de la célèbre plage de Skanes, est l’endroit idéal pour des vacances inoubliables. En journée,
         profitez d’un large éventail d’activités sportives et de divertissements. Que vous soyez en groupe, en solo, en famille ou entre amis, 
         vous trouverez des activités adaptées à vos besoins et à vos envies. Des terrains de sport et des aires de jeux pour les enfants sont
          également disponibles. Le soir, notre équipe d’animateurs professionnels vous divertira avec des cabarets, des spectacles et du folklore. 
          Vous serez invités à monter sur scène et à révéler vos talents cachés. 
 
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

export default Loisir;

