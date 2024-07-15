import "./hometry.scss";
import BtnBooking from "../BtnBooking";
import React, { useEffect, useState } from "react";

const HomeTry = () => {
  const [curSlide, setCurSlide] = useState(1);
  const [animation, setAnimation] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (animation) return;
      let delta = e.wheelDelta || -e.detail;
      if (delta > 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    };

    document.addEventListener('mousewheel', handleScroll);
    document.addEventListener('DOMMouseScroll', handleScroll);

    setTimeout(() => {
      document.querySelector('.app').classList.add('initial');
    }, 1500);

    setTimeout(() => {
      setAnimation(false);
    }, 4500);

    return () => {
      document.removeEventListener('mousewheel', handleScroll);
      document.removeEventListener('DOMMouseScroll', handleScroll);
    };
  }, [animation]);

  const pagination = (slide, target) => {
    setAnimation(true);
    const nextSlide = target !== undefined ? target : scrolledUp ? slide - 1 : slide + 1;
    document.querySelector(`.pages__item--${nextSlide}`).classList.add('page__item-active');
    document.querySelector(`.pages__item--${slide}`).classList.remove('page__item-active');
    document.querySelector('.app').classList.toggle('active');

    setTimeout(() => {
      setAnimation(false);
    }, 3000);
  };

  const navigateDown = () => {
    if (curSlide > 1) return;
    setScrolledUp(false);
    pagination(curSlide);
    setCurSlide(curSlide + 1);
  };

  const navigateUp = () => {
    if (curSlide === 1) return;
    setScrolledUp(true);
    pagination(curSlide);
    setCurSlide(curSlide - 1);
  };

  const handlePageClick = (target) => {
    if (animation) return;
    pagination(curSlide, target);
    setCurSlide(target);
  };

  return (

    <div className="hometry">
    
    <div className="rowhero">
    <div className=" text-center">
      <h3 className="animate-charcter"> BELLA VISTA</h3>
      <div className="wrapperbtntry ctn">

  
</div>
    </div>
  </div>
  
 <div className="cont">

 



      <div className="mouse"></div>
      <div className="app">
        
        <div className="app__bgimg">
          <div className="app__bgimg-image app__bgimg-image--1"></div>
          <div className="app__bgimg-image app__bgimg-image--2"></div>
        </div>
        <div className="app__img">
          <img onMouseDown={(e) => e.preventDefault()} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/whiteTest4.png" alt="city" />
        </div>
        <div className="app__text app__text--1">
          <div className="app__text-line app__text-line--4  ">Élégant </div>
          <div className="app__text-line app__text-line--3 animate-charcter">Confortable</div>
          <div className="app__text-line app__text-line--2">Accueillant </div>
          <div className="app__text-line app__text-line--1">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png" alt="" />
          </div>
        </div>
        <div className="app__text app__text--2">
          <div className="app__text-line app__text-line--4 animate-charcter">Agréable</div>
          <div className="app__text-line app__text-line--3">Chaleureux</div>
          <div className="app__text-line app__text-line--2">Chic </div>
          <div className="app__text-line app__text-line--1">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png" alt="" />
          </div>
          
        </div>
      </div>
      <div className="pages">
        <ul className="pages__list">
          <li data-target="1" className={`pages__item pages__item--1 ${curSlide === 1 ? 'page__item-active' : ''}`} onClick={() => handlePageClick(1)}></li>
          <li data-target="2" className={`pages__item pages__item--2 ${curSlide === 2 ? 'page__item-active' : ''}`} onClick={() => handlePageClick(2)}></li>
        </ul>
      </div>
  
      <a href="https://www.instagram.com/lesoleilbellavistahotel/" target="_blank" rel="noopener noreferrer" className="icon-link icon-link--instagram">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
</a>

   
    </div>
   

    </div>
   
  );
};

export default HomeTry;
