import "./roompic.css";
import React from "react";
import { Link } from "react-router-dom";

function Aquapic() {
    return (
        <div className="roompic">
            
            <div className="wrapper">
                <div className="roomcontainer">
                    <input  className="radioInput" type="radio" name="slide" id="c17" defaultChecked />
                    <label htmlFor="c17" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                           
                               
                            </div>
                        </div>
                    </label>
                    <input className="radioInput"  type="radio" name="slide" id="c18" />
                    <label htmlFor="c18" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                          
                         
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c19" />
                    <label htmlFor="c19" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                         
                          
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c20" />
                    <label htmlFor="c20" className="card">
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

export default  Aquapic;
