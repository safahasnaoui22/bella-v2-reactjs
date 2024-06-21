import "swiper/css";
import "swiper/css/effect-fade";
import "./hero.css";
import React from "react";
import Video1 from "../assets/img/heroSlider/bg.mp4";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    title: "Bella vista",
    bg: Video1,
 
  },

 
];

function HeroSlider() {
  return (
    <Swiper className="heroSlider h-[600px] lg:h-[700px] ">
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            className="h-full relative"
            key={index}
          >
         <div className="video-container">
    <video
        className="video object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
    >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>
            <div className="absolute inset-0 flex justify-center items-center text-white z-20">
              <div className="text-center">
                <div className="uppercase front-tertiary tracking-[6px] mb-5">
               
                </div>
                <div className="containerhero">
  <div className="rowhero">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter"> BELLA VISTA</h3>
    </div>
  </div>
</div>
                <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                 {/* {title} */}
                </h1>
                <div className="wrapperbtntry ctn">
  <div className="linkwrapperbtn">
    <a  className="linkbtn"  href="https://booking.lesoleilbellavista.com/cr.resa/htlww/Hotel_Search.aspx?user=3124&ilng=1&curr=1">Booking!</a>
    <div className="iconbtn">
      <svg  className="svgbtn"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
  
</div>
              </div>
            </div>
            {/** overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroSlider;
