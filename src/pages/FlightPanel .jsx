import "./fligh.css";
import React from "react";

const FlightPanel = ({ title, bgImage, outPrice, rtnPrice, linkUrl }) => {
  return (
    <div className="panelflight">
      <div className="ringflight">
        <div className={`cardflight ${bgImage}`}></div>
        <div className="borderflight">
          <p className="titleflight">{title}</p>
          <div className="slideflight">
          
            <div className="lineflight">
              <button className="paraflight">
                <a href={linkUrl}>lire la Suite</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlightDeals = () => {
  return (
    <div className="mainflight">
      <h1 className=" flightca    font-primary text-[45px] ">Types De Chambres</h1>
                <p className="defligh"> <h2 className="title font-primary servicestitle">🌴 Bienvenue à l’Hôtel Le Soleil Bella Vista ! 🌴</h2>

Détendez-vous dans nos Chambres Supérieures, profitez du confort abordable des Chambres Standard, ou optez pour l’intimité des Chambres Communicantes. Profitez de votre séjour à Monastir ! 😊
</p>
       <div className="containerflight">
      
    
      <FlightPanel title="Standart" bgImage="card1flight" outPrice="849" rtnPrice="659" linkUrl="/StandartRomm" />
    
    <FlightPanel title="communicante" bgImage="card2flight" outPrice="999" rtnPrice="745" linkUrl="/ComDt" />
    <FlightPanel title="Superieur" bgImage="card3flight" outPrice="399" rtnPrice="257" linkUrl="/SupDt" />
  </div>
    </div>
   
  );
};

export default FlightDeals;
