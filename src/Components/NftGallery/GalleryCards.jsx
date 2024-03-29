import React from "react";
import cardimg from "../../assets/Cards/NFT Cards.svg";
import btnimgexpo from "../../assets/Cards/buttonexpo.png";
import btnimgtry from "../../assets/Cards/picbtn_try.png";
import Cards from "../Dashboard.jsx/Cards";
const GalleryCards = () => {
  return (
    <div className=" flex md:flex-row flex-col gap-[6rem]  md:w-[1200px] w-[723px]   py-20 ">
      <div className="Rare relative   top-11 flex flex-row   lg:w-[593px] w-[230px] sm:mx-auto left-2 h-[269px]  border-2 border-green-400 rounded-2xl px-11 py-11 font-medium 	bg-black hover:bg-slate-800/30">
        <h2 className="  xl:text-[36px] text-[13px] xl:max-w-[250.726px] max-w-[125.726px] bg-clip-text  text-transparent bg-gradient-to-r from-green-500 to-green-300">
          COLLECT RARE NFT HERE
        </h2>
        <img
          src={cardimg}
          alt="rare_card"
          className="z-[150px] lg:max-w-[270.726px] sm:max-w-[200.726px] max-w-[130.726px]  h-[308.78px] absolute sm:right-[-75px] mx-auto sm:top-[-40px] top-[-10px] hover:scale-105 transition-all "
        />
        <img
          src={btnimgexpo}
          alt="expobtn"
          className=" absolute  w-[120px] h-[30px] sm:bottom-[30px] bottom-[20px] cursor-pointer hover:scale-105 transition-all"
        />
      </div>

      <div className="Rare relative top-11 grid sm:grid-cols-2 grid-rows-1 lg:w-[600px] md:w-[330px] sm:w-[320px] w-[210px] h-[269px] sm:mx-auto left-2 border-2 border-green-400 rounded-2xl px-11 py-11 font-medium	bg-black hover:bg-slate-800/30">
      <div>
        <img
          src={btnimgtry}
          alt="expobtn"
          className=" absolute  lg:max-w-[281px] max-w-[130.726px] lg:h-[270px] h-[125px] lg:bottom-[30px]  md:bottom-[120px] bottom-[130px] cursor-pointer hover:scale-90 transition-all"
        />
</div>
<div className="sm:none flex sm:items-center ">
        <p className="absolute  sm:top-11 bottom-14 sm:text-[25px] text-[13px] w-[160px] h-[36px] bg-clip-text  text-transparent bg-gradient-to-r from-white to-green-300 xl:right-[80px] sm:right-[1px] right-[-15px] ">
          Ebony #2775
        </p>
      

        <p className="absolute text-[15px] w-[160px] h-[23px] bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-500 xl:right-[80px] sm:right-[1px] right-[-15px] sm:top-[70px] bottom-[50px] font-medium">
          10.15 ETH
        </p>
        <p className="absolute sm:text-[15px] text-[7px]  w-[160px] h-[23px] bg-clip-text  text-transparent bg-gradient-to-r from-green-400/100 to-green-600 xl:right-[80px] sm:right-[1px] right-[-15px] sm:top-[95px] bottom-[25px] font-medium">
          Highest bid 5 WEIGHT
        </p>
        <button className="absolute z-[000] flex md:right-[30px] sm:right-[100px] right-[95px] md:w-[94px] w-[40px] px-3 sm:bottom-8  bottom-1  md:text-[15px] text-[8px] border-2  md:h-[29px] h-[25px] cursor-pointer hover:scale-105 transition-all ">
          Buy Now
        </button>
      </div>
      </div>
    </div>
  );
};

export default GalleryCards;
