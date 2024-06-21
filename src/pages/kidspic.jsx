import "./roompic.css";
import React from "react";
import { Link } from "react-router-dom";

function Kidspic() {
    return (
        <div className="roompic">
            
            <div className="wrapper">
                <div className="roomcontainer">
                    <input  className="radioInput" type="radio" name="slide" id="c5" defaultChecked />
                    <label htmlFor="c5" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                            
                               
                            </div>
                        </div>
                    </label>
                    <input className="radioInput"  type="radio" name="slide" id="c6" />
                    <label htmlFor="c6" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                           
                         
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c7" />
                    <label htmlFor="c7" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                         
                          
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c8" />
                    <label htmlFor="c8" className="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                            
                              
                            </div>
                        </div>
                    </label>
                </div>
                <Link to="/gallery">
            <button className="gallerybtn2">back</button>
        </Link>
            </div>
        </div>
    );
}

export default  Kidspic;
