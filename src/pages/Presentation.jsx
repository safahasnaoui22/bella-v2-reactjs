import "./presentation.css";
import ChatButton from "./ChatButton";
import HotelVideo from "../components/HotelVideo";
import React, { useEffect, useState } from "react";
import RoomComponent from "./RoomComponent";
import SocialMediaButton from "../components/SocialMediaButton";
import SocialTry from "./SocialTry";
import Weather from "./Weather";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Presentation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Set mounted to true after the component mounts
    setMounted(true);
  }, []);
  const text = "  Bella Vista ";
  return (
    <div className={`presentation ${mounted ? 'fade-in' : ''}`}>
      <div className="presentation-container">
        <div className="">
        <RoomComponent/>
        </div>
        <div className="content-container move-from-right">
          <div className="title-container">
          
            <div className="titleHotel font-primary ">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          
          </div>
        </div>

            <img
              className="star move-from-left "
              src="https://th.bing.com/th/id/R.159c735cd97cfa5523cb2cbee10982?rik=7JYviMSoaN%2fnIw&riu=http%3a%2f%2fwww.patricia-milton.com%2fwp-content%2fuploads%2f2015%2f02%2ffour-stars.png&ehk=iXcKGTL%2bWTPJXtan6zUNi%2bQcqy0JHKn7%2bkmiPKSVTjs%3d&risl=&pid=ImgRaw&r=0"
              alt="Star Rating"
            />
            <div className="line"></div>
          </div>
          <div className="description-container move-from-bottom">
            <p className="descriptionpRE  alpha  ">
      
            Situé sur la magnifique côte de Monastir, en Tunisie, le Soleil Bella Vista vous invite à une expérience unique. Plongez dans le confort de nos chambres bien aménagées, profitez de vues imprenables sur la mer et détendez-vous sur nos plages privées. Notre complexe propose une cuisine raffinée, des piscines scintillantes et des activités pour tous les voyageurs. Explorez la richesse culturelle de Monastir et laissez-vous séduire par l’élégance méditerranéenne du Soleil Bella Vista.
            </p>
            
            <div className="carttest">
                <div className="card3d">
                <Link to="/more-info" className="btn-more-info move-from-top">
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
        <div>
          <div>
      <SocialMediaButton/>
          </div>
          <ChatButton className="chat" />
        </div>
     
      </div>
    </div>
  );
}

export default Presentation;
