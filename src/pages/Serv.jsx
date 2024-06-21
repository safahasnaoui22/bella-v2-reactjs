import "./moreInfo.css";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: "vew.jpg",
    name: "Services",
  },
  {
    src: "vew.jpg",
    name: "Services",
  },
  {
    src: "vew.jpg",
    name: "Services",
  },
  {  src: "vew.jpg",
  name: "Services",
  },
];

function Serv() {
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
        <h1 className="info-title titleHotel font-primary miniclubtittle ">Services</h1>
        <p className="info-description miniclubdescription">
        • Réception ouverte 24h/24 & 7j/7
        <br></br> <br></br>
• Wi-Fi gratuit disponible dans l’espace commun <br></br><br></br>
• Échange de l’argent<br></br><br></br>


• Magasins<br></br><br></br>
• Garderie et médecin avec supplément

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

export default Serv;

