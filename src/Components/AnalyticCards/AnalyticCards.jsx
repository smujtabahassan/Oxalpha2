import React from "react";
import graph1 from "../../assets/Analytics/graph1.svg";
import graph2 from "../../assets/Analytics/graph.svg";
import graph3 from "../../assets/Analytics/graph4.svg";
import graph4 from "../../assets/Analytics/graph3.svg";
import { MdArrowOutward } from "react-icons/md";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaLitecoinSign } from "react-icons/fa6";
import { TbCurrencyEthereum } from "react-icons/tb";

const AnalyticCards = () => {
  const data = [
    {
      id: 1,
      coin: <BsCurrencyBitcoin />,
      coinText: "Bitcoin",
      symbol: "BTC",
      arrow: <MdArrowOutward />,
      price: "$52,291",
      progress: "+0.25%",
      image: graph1,
    },
    {
      id: 2,
      coin: <FaLitecoinSign />,
      coinText: "Litecoin",
      symbol: "ITC",
      arrow: <MdArrowOutward />,
      price: "$8,291",
      progress: "+0.25%",
      image: graph2,
    },
    {
      id: 3,
      coin: <TbCurrencyEthereum />,
      coinText: "Ethereum",
      symbol: "ETH",
      arrow: <MdArrowOutward />,
      price: "$28,291",
      progress: "+0.25%",
      image: graph3,
    },
    {
      id: 3,
      coin: <TbCurrencyEthereum />,
      coinText: "Solana",
      symbol: "SOL",
      arrow: <MdArrowOutward />,
      price: "$14,291",
      progress: "-0.25%",
      image: graph4,
    },
  ];
  return (
    <div className=" flex justify-between md:flex-row flex-col gap-[2rem]">
      {data.map(
        (
          { id, coin, coinText, symbol, arrow, price, progress, image },
          index
        ) => {
          return (
            <div
              className="bg-[#070707] md:hover:scale-105  rounded-[20px] border-[1px] border-[#1DD6B4] shadow-2xl p-4 md:w-[20%] w-[80%] mx-auto transition-all ease-linear delay-200 cursor-pointer"
              key={index}
            >
              <div className="flex items-center justify-around  mx-auto">
                <div className="bg-[#373737] p-2 flex-col rounded-full w-[50px] h-[50px] flex items-center justify-center ">
                  <span className="text-[#F0D85A] text-[24px] ">{coin}</span>
                </div>
                <p className="font-semibold">
                  {coinText} <br />{" "}
                  <span className="text-[#fff]/70">{symbol}</span>
                </p>
                <div className="bg-[#1DD6B4] p-2 w-[40px] h-[40px] rounded-full">
                  <span className="text-[24px]">{arrow}</span>
                </div>
              </div>
              <div className="flex justify-around py-[1.5rem] items-center">
                <div>
                  <p className="text-[24px] font-semibold text-[#E4E4E4]">
                    {price}
                  </p>
                  <p className="text-[14px] font-semibold text-[#1DD6B4]">
                    {progress}
                  </p>
                </div>
                <img src={image} alt="" />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default AnalyticCards;
