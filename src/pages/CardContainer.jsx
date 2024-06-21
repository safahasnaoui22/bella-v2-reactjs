import "./cardcontainer.scss";
import React from "react";

function CardContainer() {
    return (
        <div>

<div className="cardtestcontainer">
            <div className="carttest">
                <div className="card3d">
                    <h3>Hover me</h3><br />
                  
                    <div className="layerstest">
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="layertest"></div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="carttest">
                <div className="card3d">
                    <h3>Hover me</h3><br />
                <img src="https://th.bing.com/th/id/R.4d044c15d3d238717545e5610a330142?rik=WwUYzjHM22g6uA&riu=http%3a%2f%2fbvapartments.apartmentblogging.com%2fwp-content%2fuploads%2fsites%2f420%2f2018%2f06%2fbella-vista.jpg&ehk=SKnBLV1ReiPjoVN06z4ofaEJMaG8RbUqb6hGypnt6qo%3d&risl=&pid=ImgRaw&r=0"/>
                    <div className="layerstest">
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="layertest"></div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>




        </div>
     
    )
}

export default CardContainer;
