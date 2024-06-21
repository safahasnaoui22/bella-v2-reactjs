import Aqua from "./pages/Aqua";
import Aquapic from "./pages/Aquapic";
import Bellapic from "./pages/Bellapic";
import ChatBot from "./ChatBot";
import Circular from "./pages/Circular";
import ComDt from "./pages/ComDt";
import Contact from "./pages/Contact";
import CursorFollower from "./pages/CursorFollower";
import ExBella from "./ExBella";
import Example from "./pages/Example";
import ExampleFami from "./ExampleFami";
import FizzyButton from "./components/FizzyButton";
import FlightDeals from "./pages/FlightPanel ";
import FlipCard from "./FlipCard";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Home from "./pages/Home";
import HomeTry from "./HomeTry";
import IDN from "./pages/IDN";
import Kidspic from "./pages/kidspic";
import Loisir from "./pages/Loisir";
import MiniClub from "./pages/MiniClub";
import MoreInfo from "./pages/MoreInfo";
import Notfound from "./Notfound";
import Presentation from "./pages/Presentation";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Restauranttry from "./Restaurenttry";
import Restaurent from "./Restaurent";
import Restaurentpic from "./pages/Restaurentpic";
import Room from "./components/Room";
import RoomComponent from "./pages/RoomComponent";
import RoomPic from "./pages/Roompic";
import Roomms from "./Roomms";
import SecondHome from "./SecondHome";
import Serv from "./pages/Serv";
import Services from "./pages/Services";
import Slideshow from "./Slideshow";
import SocialTry from "./pages/SocialTry";
import StandartRomm from "./pages/StandartRomm";
import SupDt from "./pages/SupDt";
import Try from "./Try";
import TryGallery from "./TryGallery";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

function App() {
  



  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Router>
        <Routes>
        <Route exact path="/exbella" element={<ExBella />} />
        <Route exact path="/familly" element={<ExampleFami />} />
        <Route exact path="/idn" element={<IDN />} />
        <Route exact path="/chat" element={<ChatBot />} />
        <Route exact path="/try" element={<Try />} />
        <Route exact path="/idk" element={<Slideshow />} />
        <Route exact path="/secondhome" element={<SecondHome />} />
        <Route exact path="/smb" element={<SocialTry />} />
        <Route exact path="/FizzyButton" element={<FizzyButton />} />
        <Route exact path="/TryGallery" element={<TryGallery />} />
        <Route exact path="/Kidspic" element={<Kidspic />} />
        <Route exact path="/Bellapic" element={<Bellapic />} />
        <Route exact path="/Restaurentpic" element={<Restaurentpic />} />
        <Route exact path="/Aquapic" element={<Aquapic />} />


        
        <Route exact path="/RoomComponent" element={<RoomComponent />} />
        <Route exact path="/StandartRomm" element={<StandartRomm />} />
        <Route exact path="/ComDt" element={<ComDt />} />
        <Route exact path="/SupDt" element={<SupDt />} />
        <Route exact path="/Serv" element={<Serv />} />
        <Route exact path="/Loisir" element={<Loisir />} />
        <Route exact path="/Aqua" element={<Aqua />} />
        <Route exact path="/MiniClub" element={<MiniClub />} />
        <Route exact path="/FlipCard" element={<FlipCard />} />
        <Route exact path="/HomeTry" element={<HomeTry />} />
        <Route exact path="/Restauranttry" element={<Restauranttry />} />
        <Route exact path="/policy" element={<PrivacyPolicy />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/exmple" element={<Example />} />
        <Route exact path="/flight" element={<FlightDeals />} />
          <Route exact path="/" element={<Home />} />
     
          <Route exact path="/more-info" element={<MoreInfo />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/roompic" element={<RoomPic />} />
      
        
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/roomsdetails" element={<Roomms />} />
          <Route exact path="/circular" element={<Circular />} />
          <Route exact path="/pre" element={<Presentation />} />
          <Route exact path="/restaurent" element={<Restaurent />} />
      
          <Route path="/rooms&suites" element={<Room/>} />
       
          <Route path="*" element={<Notfound />} />
        
        </Routes>
      </Router>
      <CursorFollower /> 
      <Footer />
    </>
  );
}

export default App;
