import "./Suits.css";
import React from "react";
import TryGallery from "../TryGallery";
import { Link } from "react-router-dom";

function RestaurantsBars() {
    return (
        <div className="suits-container">
          
          <TryGallery/>

          {
            /*     <div className="image-container">
                <img src="mainresto.jpg" alt="Room 1" className="room-image" />
            </div> */
          }
       
            <div className="roomsintro">
                <h1 className="titleHotel restaurenttitle  preT font-primary text-[45px] ">Restaurent </h1>
                <p className=" rommdesc">

                Le restaurant de  <span className="title font-primary servicestitle">L'hôtel Bella Vista</span>   vous offre une expérience culinaire raffinée dans un 
                cadre élégant. Dégustez des plats savoureux, mêlant saveurs locales et internationales, préparés avec
                 des ingrédients frais de saison. Profitez de notre salle à manger avec vue sur la mer ou le centre-ville,
                  idéale pour chaque occasion.
                 Notre personnel attentionné est à votre disposition pour rendre chaque repas inoubliable 🍽️🍹
</p>

<div className="carttest">
                <div className="card3d">
                <Link to="/restaurent" className="btn-more-info move-from-top">
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
           
        </div>
    );
}

export default RestaurantsBars;
