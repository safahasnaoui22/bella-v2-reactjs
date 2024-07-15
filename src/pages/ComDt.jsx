import "../RoomDt.css";
import Alert from "../components/Alert";
import React, { useEffect, useState } from "react";
import { faBath, faBed, faCocktail, faCoffee, faConciergeBell, faDumbbell, faGlassCheers, faParking, faSpa, faSwimmer, faSwimmingPool, faUtensils, faWater, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons/faUmbrellaBeach";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheck } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ComDt = () => {
  

  return (
    <div>
      <div className="sectionone">
        <img className="imsectionone" src="commun.jpg" alt="Room"></img>
      </div>
      <Alert/>
      <div className="sectiontow">
        <div className="roomDetails">
          <h3 className="info-title font-primary "> Chambre communicante</h3>
          
        
          <p className="roominfo">Max People: 6 </p>
          <p className="rommde">Nos chambres rénovées offrent une vue imprenable sur les jardins, la piscine ou la mer depuis leurs balcons ou terrasses. Elles sont équipées de tout le nécessaire pour un séjour confortable </p>
          
          <Link to="https://booking.lesoleilbellavista.com/cr.resa/htlww/Hotel_Search.aspx?user=3124&ilng=1&curr=1" className="btn-more-info move-from-top">Reservation</Link>
        </div>
        <div className="">
          <img className="imageroomdt" src="commun.jpg" alt="Room"></img>
        </div>
      </div>
      <div className="sectionthree">
      <div className="sectionthreepart1">
        <h3 className='font-primary  info-title '>Équipements de la chambre</h3>
        <div className='flex flex-wrap gap-20'>
  <div className="roomIcons gap-20">
  <Facility icon={faSwimmer} text="2 piscines" />
  <Facility icon={faSpa} text="Spa et centre de bien-être" />
  <Facility icon={faUmbrellaBeach} text="Plage privée" />
  <Facility icon={faUtensils} text="Petit-déjeuner" />
  </div>
  
  <div className="roomIcons gap-20">
  <Facility icon={faBed} text="Chambres non-fumeurs" />
            <Facility icon={faWater} text="Front de mer" />
            <Facility icon={faDumbbell} text="Centre de remise en forme" />
  </div>
  
  <div className="roomIcons gap-20">
  <Facility icon={faConciergeBell} text="Service d'étage" />
            <Facility icon={faParking} text="Parking gratuit" />
            <Facility icon={faGlassCheers} text="Bar" />
  </div>
 
</div>
      </div>
      <div className="sectionthreeparttow">
     
        <h3 className='font-primary  info-title'>Règles des hôtels</h3>
        <p className='mb-6'>
        Dans notre hôtel, nous avons des règles internes qui garantissent un séjour agréable et confortable pour tous les clients. 
        </p>
        <ul className='flex flex-col gap-y-4'>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            Check-in: 3:00 PM - 9:00 PM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            Check-out: 12:00 
          </li>
         
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            No pets allowed
          </li>
        </ul>
      </div>
      </div>
     
    </div>
  );
};

function Facility({ icon, text }) {
  return (
    <div className="facility">
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </div>
  );
}

export default ComDt;
