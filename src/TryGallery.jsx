import "./TryGallery.css";
import React from "react";

function TryGallery() {
    return (
        <div className="tyrgallery">
            <div className="gallerytry">
                <img className="galleryimagetry" src="secondrest.jpg"  />
                <img   className="galleryimagetry" src="secondrest.jpg" />
                <img   className="galleryimagetry"src="mainresto.jpg"/>
                <img   className="galleryimagetry" src="alacarte.jpg" />
            </div>
        </div>
    );
}

export default TryGallery;
