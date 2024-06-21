import "./Suits.css";
import React from "react";
import TryGalleryrooms from "../TryGalleryrooms";
import { Link } from "react-router-dom";

function SuitsandRooms() {
    return (
        <div className="suits-container">
            <div className="roomsintro">
                <div className="roomflex"> <h1 className="restaurenttitle"> Nos Chambres </h1>
                <div></div></div>
               
                <p className=" rommdesc">
                
          <span className="title font-primary servicestitle">L'hôtel Bella Vista</span>     propose une large gamme d'hébergements de qualité supérieure offrant des vues époustouflantes sur la mer ou sur le centre-ville.

Toutes nos chambres et suites sont conçues pour votre confort, avec des équipements comprenant une salle de bain privative, des toilettes séparées, un sèche-cheveux, un téléphone, un balcon, une télévision avec de nombreuses chaînes, un coffre-fort et un mini-bar.

Chaque chambre est équipée d'un système de climatisation réglable individuellement et d'une carte magnétique pour votre commodité.
              
</p>
<div className="carttest">
                <div className="card3d">
                <Link to="/flight" className="btn-more-info move-from-top">
          lire la Suite
            </Link><br />

              
                   {/*
                    <div className="layerstest">
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="layertest"></div>
                        ))}
                      </div>   */}
                </div>
            </div>
            
            </div>
           
           <TryGalleryrooms className="gallerycontainertry" />
           {/*
    <div className="image-container">
    <img src="MainRoom.jpg" alt="Room 1" className="room-image" />
</div>
                    */  }
        

        </div>
    );
}

export default SuitsandRooms;
