import "./restaurent.css";
import React from "react";
import Restauranttry from "./Restaurenttry";

function Restaurent() {
    return (
        <div className="both"> 
            <div className="resturenttry">
        <Restauranttry/>
    </div>
            <div className="test">
            
            <div className="book">
                <input className="input" type="checkbox" id="c1" /> 
                <input className="input" type="checkbox" id="c2" /> 
                <input className="input" type="checkbox" id="c3" /> 
                <div id="cover"> 
                    <img className="restImg" src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="PIZZA"></img>
                </div>
            
                <div className="flip-book">
                    <div className="flip" id="p1">
                        <div className="back">
                            <img className="restImg" src="https://th.bing.com/th/id/R.a946297159b94236cb8de871a5643a8b?rik=jvN2KwzqytsVCw&pid=ImgRaw&r=0" alt="COUSCOUS"></img>
                            <label className="back-btn" htmlFor="c1">Back</label>
                        </div>
                        <div className="front">
                            <h2 className="h2Rest title text-[15px] tracking-[6px] font-primary text-[50px]">Cuisine italienne "Pizza"</h2>
                            <p>Dégustez nos pizzas artisanales, préparées avec des ingrédients frais et une passion pour la tradition italienne. Chaque pizza est cuite à la perfection pour offrir une croûte croustillante et des saveurs savoureuses. Que vous préfériez les classiques ou les créations spéciales, notre menu varié saura satisfaire tous les palais. Venez savourer une expérience authentique de la pizza chez nous !</p>
                            
                            <label className="next-btn" htmlFor="c1">Next</label>
                        </div>
                    </div>
                
                    <div className="flip" id="p2">
                        <div className="back">
                            <img className="restImg" src="https://cdn.pixabay.com/photo/2016/06/04/18/44/duck-breast-1436039_1280.jpg" alt="canard"></img>
                            <label className="back-btn" htmlFor="c2">Back</label>
                        </div>
                        <div className="front">
                            <h2 className="h2Rest title text-[15px] tracking-[6px] font-primary text-[50px]"> Cuisine tunisienne </h2>
                            <p>Explorez notre délicieux couscous tunisien, préparé avec des épices exquises, des légumes frais et des viandes savoureuses, pour une expérience gastronomique méditerranéenne authentique et mémorable. Découvrez notre recette artisanale qui promet une explosion de saveurs, alliant tradition culinaire et qualité irréprochable. Plongez dans l'ambiance chaleureuse de notre restaurant et savourez chaque bouchée de notre couscous, un plat symbolique de convivialité et de générosité</p>
                         
                            <label className="next-btn" htmlFor="c2">Next</label>
                        </div>
                    </div>
                
                    <div className="flip" id="p3">
                        <div className="back">
                            <label className="back-btn" htmlFor="c3">Back</label>
                        </div>
                        <div className="front">
                            <h2 className="h2Rest title text-[15px] tracking-[6px] font-primary text-[50px]">Cuisine française "Magret de canard"</h2>
                            <p>Découvrez le délicieux Magret de Canard, un plat emblématique de la cuisine française, réputé pour sa tendreté et sa saveur riche. Préparé avec soin, ce morceau de canard gras est grillé à la perfection, révélant une peau croustillante et une chair juteuse. Accompagné d'une sauce au choix, il offre une expérience gastronomique exquise, idéale pour les amateurs de viande raffinée. Savourez ce plat incontournable dans une ambiance conviviale et découvrez pourquoi le Magret de Canard est un favori des tables françaises depuis des générations</p>
                          
                            <label className="next-btn" htmlFor="c3">Next</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Restaurent;
