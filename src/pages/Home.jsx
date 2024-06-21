import CardContainer from "./CardContainer";
import FlipCard from "../FlipCard";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import HomeTry from "../HomeTry";
import Presentation from "./Presentation";
import React from "react";
import RestaurantsBars from "./RestaurantsBars";
import RommRestaurent from "./RommRestaurent";
import RoomComponent from "./RoomComponent";
import SecondHome from "../SecondHome";
import Services from "./Services";
import SocialTry from "./SocialTry";
import SuitsandRooms from "./SuitsandRooms";
import Testimonials from "../Testimonials";
import VideoComponent from "./VideoComponent";

const Home = () => {
  return <>

  <HomeTry/>
  <div className='container mx-auto relative'>
  

  <div className=" bg-accent/20 "> 
  <div>
  
  </div>
  <Presentation />
  </div>



<div className="  "> 
  
  </div>
 
<RommRestaurent/>

  <VideoComponent/>
  <div>
    <Services/>
  </div>
  <div>
    <FlipCard/>
  </div>
  <div className="">
  <Testimonials/>

  </div>
  
</div>





  </>
};

export default Home;
