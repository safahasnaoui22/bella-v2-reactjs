import "./footer.css";
import React from "react";
import Weather from "../pages/Weather";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
     
          <div className="footer-bottom">
            <a href="/"><img src="./logo.png" alt="logo" /></a>
          
          </div>
         
          <div className="footer-col">
            <h4 className="footer-col-title">Hotel</h4>
          
            <ul className="footer-col-list">
              <li className="footer-col-item"><a href="./pre" className="footer-col-link">About Us</a></li>
              <li className="footer-col-item"><a href="./services" className="footer-col-link">Our Services</a></li>
              <li className="footer-col-item"><a href="./policy" className="footer-col-link">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Get Help</h4>
            <ul className="footer-col-list">
              <li className="footer-col-item"><a href="./contact" className="footer-col-link">Contact</a></li>
              <li className="footer-col-item"><a href="./gallery" className="footer-col-link">Gallery</a></li>
              <li className="footer-col-item"><a href="./flight" className="footer-col-link">Rooms</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/AbouSofianeHotelSousse" className="social-link"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://www.instagram.com/abousofianehotel/" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.tiktok.com/@abou.sofiane.hotel" className="social-link"><FontAwesomeIcon icon={faTiktok} /></a>
            </div>
          </div>
          <div>
          <Weather/>
        </div>
          <div className="footer-bottom">
            <p>Copyright &copy; {currentYear}. Powered by  SD</p>
          </div>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
