import "./Suits.css";
import React from "react";
import RestaurantsBars from "./RestaurantsBars";
import SuitsandRooms from "./SuitsandRooms";

function RommRestaurent() {
    return (
        <div className="rommANDrestaurent">
            <div><SuitsandRooms /></div>
            <div> <RestaurantsBars /></div>
        </div>
    )
}

export default RommRestaurent
