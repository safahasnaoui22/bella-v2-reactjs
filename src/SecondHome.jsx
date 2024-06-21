import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400italic');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: calc(5px + 0.4vw);
  }

  body {
    font-family: 'Playfair Display', serif;
    backgroud-color: 'linear-gradient(to left bottom, #F2E3C6 0%, #A7A1A5 100%)';
  }

  a {
    text-decoration: none;
  }
`;

const Intro = styled.section`
  position: relative;
  width: 100%;
  height: 800px;
`;

const Left = styled.div`
  float: left;
  height: 100%;
  width: 60%;
  padding: 3rem 3rem 3rem 5rem;
  display: table;

  & > div {
    display: table-cell;
    vertical-align: middle;
  }

  span {
    color: #E8CA2B;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    display: inline-block;
    text-transform: uppercase;
    font-family: sans-serif;
    margin-bottom: 4rem;
  }

  h1 {
    color: #b3965a;
    font-size: 8rem;
    margin-bottom: 3rem;
  }

  h1 + p {
    color: #949494;
    font-size: 1.6rem;
    margin-bottom: 4rem;
  }

  p + a {
    font-size: 1.6rem;
    color: #000;
  }
`;

const Slider = styled.div`
  float: right;
  position: relative;
  width: 40%;
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

      h3, a {
        opacity: 1;
        transition-delay: 1s;
        transform: translate3d(0, 0, 0);
      }
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

    h3 {
      font-size: 5rem;
      font-style: italic;
    }

    h3 + a {
      font-size: 1.6rem;
      display: inline-block;
      color: #fff;
      margin-top: 2rem;
    }

    h3, a {
      opacity: 0;
      transition: opacity .7s 0s, transform .5s .2s;
      transform: translate3d(0, 50%, 0);
    }
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

const SecondHome = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sliderRef = useRef(null);

  const slides = [
    {
      backgroundImage: 'url(/mother.jpg)',
    
    
    },
    {
      backgroundImage: 'url(/Waterslides.jpg)',
   
    },
    {
      backgroundImage: 'url(/kidspool.JPG)',
   
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
    <div className="homesecond">
         
      <GlobalStyle />
     
      <Intro>
    
        <Left>
    
          <div>
        
            <h1>L'Endroit Où Vous Irez</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eveniet amet excepturi voluptates dolorem totam ad quod hic, porro accusamus, repellat, corrupti at obcaecati ducimus, dolor quibusdam sequi nemo inventore?</p>
          
          </div>
       
        </Left>
       
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
    </div>
  );
};

export default SecondHome;
