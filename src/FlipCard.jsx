import "./fliped.css";
import React from "react";
import { Link } from "react-router-dom";

const FlipCard = () => {
  return (
    <>    <h1 className="restaurenttitle">Offers</h1>
    <div className="fliptry">

        <div className="flipone">
        <div className="flip-card-container" style={{ '--hue': 220 }}>
        <div className="flip-card">

          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img className="imgflip" src="https://th.bing.com/th/id/OIP.HvAGTkMg7WFw2ah9w0LxMQHaFJ?rs=1&pid=ImgDetMain"  />
              <figcaption>Forfait Lune de Miel</figcaption>
            </figure>
            <ul className="ulflip">
              <li className="liflip">Romance</li>
              <li  className="liflip">Amour</li>
              <li  className="liflip">Bonheur</li>
              <li  className="liflip">Paradis</li>
              </ul>
           
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img src="https://th.bing.com/th/id/OIP.HvAGTkMg7WFw2ah9w0LxMQHaFJ?rs=1&pid=ImgDetMain"  />
            </figure>

   
         
            <Link to="/exmple">
            <button className="flipbtn">Lire La Suite</button> 
            </Link>


            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>

        </div>
        
      </div>
        </div>
    
        <div className="flipone">
        <div className="flip-card-container" style={{ '--hue': 220 }}>
        <div className="flip-card">







        <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img className="imgflip" src="https://images.pexels.com/photos/4148842/pexels-photo-4148842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
              <figcaption> Forfait famille</figcaption>
            </figure>
            <ul className="ulflip">
              <li className="liflip">Famille</li>
              <li  className="liflip">Aventure</li>
              <li  className="liflip">Détente</li>
              <li  className="liflip">Souvenirs</li>
              </ul>
           
          </div>







          






















          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img src="https://images.pexels.com/photos/4148842/pexels-photo-4148842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Brohm Lake" />
            </figure>

   
            <Link to="/familly">
            <button className="flipbtn">Lire La Suite</button> 
            </Link>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>

        </div>
        
      </div>
        </div>
   
    

      <div className="flipone">
        <div className="flip-card-container" style={{ '--hue': 220 }}>
        <div className="flip-card">






        <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img className="imgflip" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/446371593.jpg?k=6453045c6f065aca9a7f3a7c350caf7b32e776708f334c6ce9657a7fb0a77184&o=&hp=1"  />
              <figcaption>Forfait Séjour Long</figcaption>
            </figure>
            <ul className="ulflip">
              <li className="liflip">Avantageux </li>
              <li  className="liflip">Économique </li>
              <li  className="liflip">Confortable </li>
              <li  className="liflip">Flexible</li>
              </ul>
           
          </div>





          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/446371593.jpg?k=6453045c6f065aca9a7f3a7c350caf7b32e776708f334c6ce9657a7fb0a77184&o=&hp=1" alt="sup" />
            </figure>
            <Link to="/exbella">
            <button className="flipbtn">Lire La Suite</button> 
            </Link>
          
         

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>

        </div>
        
      </div>
        </div>
    </div>
    </>
  );
};

export default FlipCard;
