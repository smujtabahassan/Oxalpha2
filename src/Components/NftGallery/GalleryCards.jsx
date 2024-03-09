import React from "react";
import cardimg from "../../assets/Cards/NFT Cards.svg";
import btnimgexpo from "../../assets/Cards/buttonexpo.png";
import btnimgtry from "../../assets/Cards/picbtn_try.png";
import Cards from "../Dashboard.jsx/Cards";
const GalleryCards = () => {
  return (
    <div className=" flex md:flex-row flex-col gap-[6rem]  sm:w-[1300px]w-[13px]   py-20 overflow-x-auto ">
      <div className="Rare relative top-11 flex flex-row   sm:w-[593px] w-[230px] sm:none mx-auto h-[269px]  border-2 border-green-400 rounded-2xl px-11 py-11 font-medium 	bg-black hover:bg-slate-800/30">
        <h2 className=" sm:text-[36px] text-[13px] max-w-[250.726px] bg-clip-text  text-transparent bg-gradient-to-r from-green-500 to-green-300">
          COLLECT RARE NFT HERE
        </h2>
        <img
          src={cardimg}
          alt="rare_card"
          className="z-[150px] sm:max-w-[360.726px] max-w-[130.726px]  h-[308.78px] absolute sm:right-[-75px] mx-auto top-[-40px] hover:scale-105 transition-all "
        />
        <img
          src={btnimgexpo}
          alt="expobtn"
          className=" absolute  w-[120px] h-[30px] sm:bottom-[30px] bottom-[20px] cursor-pointer hover:scale-105 transition-all"
        />
      </div>

      <div className="Rare relative top-11 flex flex-row  w-[600px] h-[269px]  border-2 border-green-400 rounded-2xl px-11 py-11 font-medium	bg-black hover:bg-slate-800/30">
        <img
          src={btnimgtry}
          alt="expobtn"
          className=" absolute  max-w-[281px] h-[270px] bottom-[30px] cursor-pointer hover:scale-90 transition-all"
        />

        <p className="absolute top-3 text-[25px] w-[160px] h-[36px] bg-clip-text  text-transparent bg-gradient-to-r from-white to-green-300 right-[80px]">
          Ebony #2775
        </p>
        <p className="absolute text-[15px] w-[160px] h-[23px] bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-500 right-[80px] top-[70px] font-medium">
          10.15 ETH
        </p>
        <p className="absolute text-[15px] w-[160px] h-[23px] bg-clip-text  text-transparent bg-gradient-to-r from-green-400/100 to-green-600 right-[80px] top-[95px] font-medium">
          Highest bid 5 WEIGHT
        </p>
        <button className="absolute z-[000] flex right-[20px] w-[94px] px-3 bottom-8 text-[15px] border-2  h-[29px] hover:scale-105 transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default GalleryCards;
