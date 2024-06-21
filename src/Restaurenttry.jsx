import "./Restaurant.css";
import React, { useEffect, useRef, useState } from "react";
import SocialTry from "./pages/SocialTry";
import styled, { createGlobalStyle } from "styled-components";

const Restauranttry = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };


  const GlobalStyle = createGlobalStyle`
 



  body {
    font-family: 'Playfair Display', serif;
  
  }

 
`;

const Intro = styled.section`
  position: relative;
  width: 800px;
  height: 600px;
  margin-top : 40px;
`;

const Left = styled.div`





 



`;

const Slider = styled.div`
margin-right : 20px;
  float: right;
  position: relative;
  width: 90%;
  height: 100%;

  ul {
    position: relative;
    height: 100%;
  }

  li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    transition: clip .7s ease-in-out, z-index 0s .7s;
    clip: rect(0, 100vw, 100vh, 100vw);
    display: table;

    &.current {
      z-index: 1;
      clip: rect(0, 100vw, 100vh, 0);

    
    }

    &.prev {
      clip: rect(0, 0, 100vh, 0);
    }
  }

  .center-y {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #fff;


  

  
  }

  nav {
    position: absolute;
    bottom: 5%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;

    a {
      display: inline-block;
      border-radius: 50%;
      width: 1.2rem;
      height: 1.2rem;
      min-width: 12px;
      min-height: 12px;
      background: #fff;
      margin: 0 1rem;
      transition: transform .3s;

      &.current_dot {
        transform: scale(1.4);
      }
    }
  }
  
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 70%;

    ${Left} {
      width: 100%;
      height: 100vh;
    }
  }
`;


  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sliderRef = useRef(null);

  const slides = [
    {
      backgroundImage: 'url("https://th.bing.com/th/id/R.30a0a46c90e538186eec5bfeff88f5db?rik=Z0JvDbxUdMc96w&riu=http%3a%2f%2fi.imgur.com%2f0PzvezB.jpg&ehk=8jreDaPKcTTBiKeHzpP7Z8dX8ztm9HAatZVlZD0ufJs%3d&risl=&pid=ImgRaw&r=0"',
    
    
    },
    {
      backgroundImage: 'url("https://th.bing.com/th/id/OIP.zpXNVkLRzq4S8CIal2i5YwHaE8?rs=1&pid=ImgDetMain")',
   
    },
    {
      backgroundImage: 'url("https://th.bing.com/th/id/OIP.WonnZjizEidtYqSS7e8o5QHaHa?rs=1&pid=ImgDetMain")',
   
    }
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        setCurrent((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [autoPlay, totalSlides]);

  const changeSlide = (index) => {
    setCurrent(index);
  };



  return (

    <section className="restaurant top" id="restaurant">
      <div className="container flex">
              
      <GlobalStyle />
      <Intro>
    
    <Slider ref={sliderRef} onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
      <ul>
        {slides.map((slide, index) => (
          <li key={index} className={current === index ? 'current' : current > index ? 'prev' : ''} style={{ backgroundImage: slide.backgroundImage }}>
            
          </li>
        ))}
      </ul>
    
      <nav>
        {slides.map((_, index) => (
          <a
            href="#"
            key={index}
            className={current === index ? 'current_dot' : ''}
            onClick={(e) => {
              e.preventDefault();
              changeSlide(index);
            }}
          ></a>
        ))}
      </nav>
    </Slider>
  </Intro>
        <div className="right">
          <div className="text">
            <h2 className="titleHotel font-primary text-[45px]"> Restaurant</h2>
            <p>

Dégustez une variété de plats gastronomiques préparés avec des ingrédients frais et une expertise culinaire dans notre restaurant</p>
          </div>
          <div className="accordionWrapper">
            {accordionData.map((item, index) => (
              <div key={index} className={`accordionItem ${activeIndex === index ? 'open' : 'close'}`}>
                <h2 className="accordionIHeading" onClick={() => toggleItem(index)}>
                  {item.heading}
                </h2>
                <div className="accordionItemContent">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const accordionData = [
  {
    heading: 'Cuisine italienne',
    content: 'Découvrez l essence de l Italie dans notre « Cuisine italienne », où les saveurs authentiques et le savoir-faire culinaire vous attendent.'
  },
  {
    heading: 'Cuisine tunisienne',
    content: 'Dégustez les saveurs exquises de la cuisine tunisienne dans notre « Cuisine tunisienne », où chaque plat est préparé avec des ingrédients frais et une passion pour la tradition culinaire.'
  },
  {
    heading: 'Cuisine française',
    content: ' Plongez dans lélégance et la finesse de la cuisine française dans notre « Cuisine française », alliant qualité des ingrédients et raffinement des saveurs.'
  },
  {
    heading: 'Cuisine de fruits de mer',
    content: ' Explorez notre « Cuisine aux fruits de mer », où chaque plat est préparé avec des produits de la mer frais et de qualité, vous offrant une expérience culinaire riche en saveurs marines.'
  }
];

export default Restauranttry;
