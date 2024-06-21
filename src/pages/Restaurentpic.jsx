import "./roompic.css";
import React from "react";
import { Link } from "react-router-dom";

function Restaurentpic() {
    return (
        <div className="roompic">
            
            <div className="wrapper">
                <div className="roomcontainer">
                    <input  className="radioInput" type="radio" name="slide" id="c9" defaultChecked />
                    <label htmlFor="c9" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                           
                               
                            </div>
                        </div>
                    </label>
                    <input className="radioInput"  type="radio" name="slide" id="c10" />
                    <label htmlFor="c10" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                         
                         
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c11" />
                    <label htmlFor="c11" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                            
                          
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c12" />
                    <label htmlFor="c12" className="card">
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

export default  Restaurentpic;
