import React from 'react'
import "../Landing.css";

import { PicCardss } from "../Components/PicCardss";
import { CounterPopu } from "../Components/CounterPopu";
import mainImage from "../assets/heroo2.png";
import auditcard from "../assets/Main.svg";
import cardheadings from "../assets/Key Features.svg";
import carddesign from "../assets/cards.svg";
import slider from "../assets/slider.svg";
import star from "../assets/star.svg";
import details from "../assets/details.svg";
import footerpic from "../assets/Footer.svg";
import logo from "../assets/logooxalpha.svg";

import {
  FaYoutubeSquare,
  FaTelegram,
  FaTwitterSquare,
  FaDiscord,
} from "react-icons/fa";
import { Keyfeatures } from "../Components/Keyfeatures";
import { Parteners } from "../Components/Parteners";
import { Star } from "../Components/Star";

import { useState } from "react";







const LandingPage = () => {
    const [toogle, settoogle] = useState(true);

    return (
    <div className='Landing'>

<header>
<nav
  className={`flex flex-col justify-around items-center md:flex-row     text-white relative md:h-[100px] h-[auto]  bg-gradient-to-r from-green-500/20 to-green-500 via-gray-900 bg-opacity-67 h-16 w-full opacity-90 shadow-md   `}
>
  <button
    className={`menu  md:hidden block absolute right-5 top-5`}
    onClick={() => settoogle(!toogle)}
  >
    {toogle ? <span>&times;</span> : <span>&#9776;</span>}
  </button>
  <h1 className="text-[30px] md:left-auto left-0 ">
    <img src={logo} alt="" />
  </h1>

  <ul
    className={`${
      toogle
        ? "flex  md:justify-around  lg:text-[16px] text-[10px]  w-[auto] md:gap-12 gap-1 md:flex-row flex-col    md:bg-transparent  cursor-pointer  "
        : "hidden"
    }`}
  >
    <li className="hover:text-green-400 ">Docs</li>
    <li className="hover:text-green-400 ">Telegram</li>
    <li className="hover:text-green-400 ">Twitter</li>
    <li className="hover:text-green-400 ">Staking Dapp</li>
  </ul>

  <div
    className={` ${
      toogle
        ? " cursor-pointer  flex justify-center items-center flex-grow-0 flex-shrink-0 w-[200px] h-14 relative gap-3 px-[69px] py-3.5 rounded-[30px] bg-[#0B0121] border-2 border-green-500 p-8 "
        : "hidden"
    }`}
  >
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <path
        d="M15.0156 0C18.4644 0 20.5 1.98459 20.5 5.3818H16.2689V5.41647C14.3052 5.41647 12.7133 6.96849 12.7133 8.883C12.7133 10.7975 14.3052 12.3495 16.2689 12.3495H20.5V12.6615C20.5 16.0154 18.4644 18 15.0156 18H5.98444C2.53556 18 0.5 16.0154 0.5 12.6615V5.33847C0.5 1.98459 2.53556 0 5.98444 0H15.0156ZM19.7533 6.87241C20.1657 6.87241 20.5 7.19834 20.5 7.60039V10.131C20.4952 10.5311 20.1637 10.8543 19.7533 10.8589H16.3489C15.3548 10.872 14.4855 10.2084 14.26 9.26432C14.1471 8.67829 14.3056 8.07357 14.6931 7.61222C15.0805 7.15087 15.6573 6.88007 16.2689 6.87241H19.7533ZM16.7489 8.04237H16.42C16.2181 8.04005 16.0236 8.11664 15.88 8.25504C15.7364 8.39344 15.6556 8.58213 15.6556 8.77901C15.6555 9.19205 15.9964 9.52823 16.42 9.53298H16.7489C17.1711 9.53298 17.5133 9.1993 17.5133 8.78767C17.5133 8.37605 17.1711 8.04237 16.7489 8.04237ZM10.8822 3.89119H5.23778C4.81903 3.89116 4.4782 4.2196 4.47333 4.62783C4.47333 5.04087 4.81415 5.37705 5.23778 5.3818H10.8822C11.3044 5.3818 11.6467 5.04812 11.6467 4.6365C11.6467 4.22487 11.3044 3.89119 10.8822 3.89119Z"
        fill="url(#paint0_linear_57_109)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_57_109"
          x1="0.5"
          y1="1.31068"
          x2="24.0711"
          y2="10.4547"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9AFF87"></stop>
          <stop offset="0.347164" stop-color="#1AFF87"></stop>
        </linearGradient>
      </defs>
    </svg>
    <p className=" flex-grow-0 flex-shrink-0 text-base text-center  text-transparent bg-clip-text bg-gradient-to-r from-green-600 from-50%  via-green-700/100 to-green-600 to-80%    ">
      <a href="LandingPage.jsx">Connect Wallet</a>
    </p>
  </div>
</nav>
</header>
<main className="relative w-full  opacity-90">
<img src={mainImage} alt="here" />
<button
  className=" bg-green-500 shadow-lg shadow-green-500/30  font-bold absolute lg:left-[90px] 
left-[49px] md:left-[49px] left-[15px] sm:left-[38px]  smm:left-[35px] left-[20px] rounded-xl  md:w-[200px] w-[120px] lg:h-[60px] h-[40px]  
 lg:top-[550px] top-[280px]  
 md:top-[280px]  sm:top-[250px]  top-[155px] smm:top-[210px]   bg-gradient-to-r from-green-600 from-10% via-white-500 to-green-600   transition duration-300 ease-out transform hover:scale-105  "
>
  Try it now
</button>
</main>
{/* <div className="endportion bg-gradient-to-r from-green-500/30 via-black via-50% to-green-500/20"> */}
<div className="endportion overflow-x-auto flex xl:flex-nowrap flex-wrap lg:items-center  justify-center   gap-20 align-center  mx-[auto] md:h-[900px] h-[auto] p-12 bg-gradient-to-r from-green-500/30 via-black via-50% to-green-500/20">
<PicCardss />
{/* </div> */}
</div>

<br />
<CounterPopu />

<Keyfeatures />
<br />

<br />
<Parteners />
<br />
<Star />

<br />

<footer className="">
<div className=" relative  flex flex-col items-center gap-10 z-10 bg-gradient-to-r from-green-950/60 from-1% via-black via-90% to-green-950 to-1% opacity-100 h-[200px] p-12">
  <h2>0xalpha</h2>
  <div className="social-icons flex flex-row align-middle items-center justify-center gap-3  ">
    <div className="youtube ">
      <FaYoutubeSquare />
    </div>
    <div className="telegram">
      <FaTelegram />
    </div>

    <div className="twitter">
      <FaTwitterSquare />
    </div>
    <div className="discord">
      <FaDiscord />
    </div>
  </div>
  <p className="font-sans text-[10px]">
    Copyright © 2022 TUF Sniper Bot
  </p>
</div>
</footer>



    </div>
  )
}
export default LandingPage;