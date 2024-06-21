import "./SocialTry.css";
import React from "react";
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faComments, faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialTry() {
    const handleClick = (url) => {
        window.location.href = url;
    };

    return (
        <div className="socialtry">
            <div className="menusocialtry">
                <input className="inputsocialtry" type="checkbox" id="toggle" />
                <div id="show-menu">
                    <label htmlFor="toggle" className="btnsocialtry">
                        <FontAwesomeIcon icon={faHeart } className="fa-lg toggleBtn menuBtn heartIcon" />
                        <FontAwesomeIcon icon={faTimes} className="fa-lg toggleBtn closeBtn" />
                    </label>
                    <div className="btnsocialtry" onClick={() => handleClick("https://www.facebook.com/LeSoleilBellaVista")}>
                        <FontAwesomeIcon icon={faFacebook} className="fa-lg" />
                    </div>
                    <div className="btnsocialtry" onClick={() => handleClick("https://www.instagram.com/lesoleilbellavistahotel/")}>
                        <FontAwesomeIcon icon={faInstagram} className="fa-lg" />
                    </div>
                    <div className="btnsocialtry" onClick={() => handleClick("https://www.tiktok.com")}>
                        <FontAwesomeIcon icon={faTiktok} className="fa-lg" />
                    </div>
                    <div className="btnsocialtry" onClick={() => handleClick("https://wa.me/54812998")}>
    <FontAwesomeIcon icon={faWhatsapp} className="fa-lg" />
</div>

                    <div className="btnsocialtry">
                        <FontAwesomeIcon icon={faComments} className="fa-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialTry;
