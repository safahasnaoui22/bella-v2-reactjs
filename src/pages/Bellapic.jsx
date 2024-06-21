import "./roompic.css";
import React from "react";

function Bellapic() {
    return (
        <div className="roompic">
            
            <div className="wrapper">
                <div className="roomcontainer">
                    <input  className="radioInput" type="radio" name="slide" id="c13" defaultChecked />
                    <label htmlFor="c13" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                           
                               
                            </div>
                        </div>
                    </label>
                    <input className="radioInput"  type="radio" name="slide" id="c14" />
                    <label htmlFor="c14" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                          
                         
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c15" />
                    <label htmlFor="c15" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                           
                          
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c16" />
                    <label htmlFor="c16" className="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                            
                              
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default  Bellapic;
