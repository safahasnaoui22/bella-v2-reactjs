import "./Services.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Services.jsx

function Services() {
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service");
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            serviceCards[index].classList.add("animate-left-to-right");
          }, index * 200); // Adjust the delay as needed
        } else {
          serviceCards[index].classList.remove("animate-left-to-right");
        }
      });
    });

    serviceCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  return (
    <div>
     { /* <h1 className="ourservice preT font-primary text-[45px]  ">Notre Services</h1> */}
  <div className="services-container">
 
   

  <Link to="/MiniClub" className="service-link">
  <div className="service">
    <h2 className="title font-primary servicestitle">Mini Club</h2>
    <div className="image-container">
      <img src="miniclub.jpg" alt="Service Image 1" className="service-image" />
    </div>
    <p className="description">
      Un mini-club ouvert tous les jours de l'année avec monitrices professionnelles proposant des jeux divertissants pour les enfants
    </p>
  </div>
</Link>

<Link to="/Aqua"  >
<div className="top">
    <div className="service ">
        <h2 className="title font-primary servicestitle">Aquapark</h2>
        <p className="description">
        Notre  aquapark est une expérience unique et spéciale. Il est doté de toutes sortes d'attractions, 
        </p>
        <div className="image-container">
          <img src="Waterslides.jpg" alt="Service Image 1" className="service-image" />
        </div>
       
      </div>
    </div>

</Link>
     <Link to="/Loisir">
     <div className="service ">
        <h2 className="title font-primary servicestitle"> Divertissement</h2>
        <p className="description">
        L’hôtel Bella Vista, situé le long de la célèbre plage de Skanes, est l’endroit idéal pour des vacances inoubliables.{/* En journée,
         profitez d’un large éventail d’activités sportives et de divertissements. Que vous soyez en groupe, en solo, en famille ou entre amis, 
         vous trouverez des activités adaptées à vos besoins et à vos envies. Des terrains de sport et des aires de jeux pour les enfants sont
          également disponibles. Le soir, notre équipe d’animateurs professionnels vous divertira avec des cabarets, des spectacles et du folklore. 
          Vous serez invités à monter sur scène et à révéler vos talents cachés. 
        Chaque soirée se termine par une soirée en discothèque jusqu’à 2 heures du matin.
  Venez profiter des merveilles qu’offre l’hôtel Bella Vista et vivez des moments mémorables ! */}
        </p>

        <div className="image-container">
          <img src="loisir.jpg" alt="Service Image 1" className="service-image" />
        </div>
      </div>
     </Link>
    <Link to="Serv" >
    <div className="top">
    <div className="service ">
        <h2 className="title font-primary servicestitle">Services</h2>
        <div className="image-container">
          <img src="vew.jpg" alt="Service Image 1" className="service-image" />
        </div>
        <p className="description">
        L'Hôtel Le Soleil Abou Sofiane offre un Wi-Fi gratuit disponible dans l'espace commun,et un Réception ouverte 24h/24
        </p>
      </div>
    </div>
    </Link>
   
    </div>
    </div>
  
  );
}

export default Services;
