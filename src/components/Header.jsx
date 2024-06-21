import Audio from "./Audio";
import React, { useState } from "react";
import { useEffect } from "react";

import'./header.css'
function Header({ whiteText }) {
  const [header, setHeader] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClick = () => {
    window.location.href = "https://booking.lesoleilbellavista.com/cr.resa/htlww/Hotel_Search.aspx?user=3124&ilng=1&curr=1";
  };
  return (
    <header
      className={`${
        header
          ? "bg-gradient-to-r from-black via-gray-800 to-black py-3 shadow-lg"
          : "bg-transparent py-8"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="container flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between ">
        <a href="/">
          {header ? (
            <img className="w-[100px]" src="./logo.png" alt="Logo" />
          ) : (
            <img className="w-[100px]" src="./logo.png" alt="Logo" />
          )}
        </a>
        <nav
          className={`${
            isSidebarOpen ? "flex" : "hidden"
          } flex-col gap-y-4 font-tertiary tracking-[5px] ${
            whiteText ? "text-white" : "text-white"
          } items-center uppercase lg:flex lg:flex-row lg:gap-x-40`}
        >
       <Audio/>
         
          <a
            href="/flight"
            className="hover:text-accent transition"
          >
        CHAMBRES
          </a>
          <a
            href="/restaurent"
            className="hover:text-accent transition"
          >
            Restaurant
          </a>
          <a href="/gallery" className="hover:text-accent transition">
           GALERIE
          </a>
          <a href="/contact" className="hover:text-accent transition">
        Contact
          </a>
          <div className="bookingbutton">
      <button className="glowing-btn" onClick={handleClick}>
        <span className='glowing-txt'>B<span className='faulty-letter'>OO</span>KING</span>
      </button>
    </div>
        
          <a href="https://booking.lesoleilbellavista.com/cr.admin/login.aspx
          " className="hover:text-accent transition">
            Login
          </a>
        </nav>
        <div
          className="lg:hidden cursor-pointer"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;

