import React from "react";
import { DashoBoardHome } from "./Data";
import tether from "../../assets/Cards/Tether.svg";
import uniswap from "../../assets/Cards/Uniswap.svg";
import WazirX from "../../assets/Cards/WazirX.svg";
import Pinkcoin from "../../assets/Cards/Pinkcoin.svg";
import stack from "../../assets/Cards/stack.svg";
import Symbol from "../../assets/Cards/Symbol.svg";
import histro1 from "../../assets/Cards/history1.svg";
import histro2 from "../../assets/Cards/history2.svg";
import histro3 from "../../assets/Cards/history3.svg";
import histro4 from "../../assets/Cards/history4.svg";

const Cards = () => {
  const TrandingCard = [
    {
      id: 1,
      image: tether,
      text: "Trending",
      lists: [
        {
          text: "Tether",
          currency: "USDT",
          progress: "+0.40%",
          img: tether,
        },
        {
          text: "Uniswap",
          currency: "USDT",
          progress: "+0.40%",
          img: uniswap,
        },
        {
          text: "Wazirx",
          currency: "USDT",
          progress: "+0.40%",
          img: WazirX,
        },
      ],
    },
    {
      id: 2,
      image: tether,
      text: "Recently added",
      lists: [
        {
          text: "Pinoxa",
          currency: "PINO",
          progress: "+0.40%",
          img: Pinkcoin,
        },
        {
          text: "Stacks",
          currency: "STK",
          progress: "+0.40%",
          img: stack,
        },
        {
          text: "Symbol",
          currency: "SYB",
          progress: "+0.40%",
          img: Symbol,
        },
      ],
    },
  ];

  const smallCards = [
    {
      id: 1,
      text: "Net worth",
      amount: "$2,77,308.0",
    },
    {
      id: 2,
      text: "Total rewards",
      amount: "$0.98",
    },
    {
      id: 3,
      text: "Total assets",
      amount: "$2,77,308.0",
    },
    {
      id: 4,
      text: "Total depth",
      amount: "$800",
    },
  ];

  const History = [
    {
      id: 1,
      heading: "History",
      seeAll: "See all",
      trxHistory: [
        {
          id: 1,
          img: histro1,
          heading: "SushiSwap ",
          headingSpan: "+$345.90",
          History: "Bitcoins Evolution™. 234000 Satisfied Customers..",
          date: "11 Mar 23",
        },
        {
          id: 2,
          img: histro2,
          heading: "Akash  ",
          headingSpan: "-$29.80",
          History: "Akash is a decentralized with smart contract functionality",
          date: "13 Mar 23",
        },
        {
          id: 3,
          img: histro3,
          heading: "Quorum  ",
          headingSpan: "+$2,567.80",
          History: "Quorum is a peer-to-peer cryptocurrency.",
          date: "13 Mar 23",
        },
        {
          id: 1,
          img: histro4,
          heading: "Cream  ",
          headingSpan: "+$7.80",
          History:
            "Cream Evolution™. 234000 Satisfied Customers From 107 Countries.",
          date: "13 Mar 23",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-col gap-[1rem]">
        <div className=" md:grid-cols-8 col-span-12 ">
          <div className=" flex gap-[3rem] md:flex-row flex-col  ">
            {TrandingCard.map(({ id, image, text, lists }) => {
              return (
                <div
                  key={id}
                  className=" rounded-[34px] border-[1px] border-[#000] bg-[#151718] p-[16px] filter drop-shadow-md md:w-[500px] w-[95%] h-[300px] px-[0.5rem] hover:text-green-500 transition-all ease-linear delay-150 cursor-pointer md:hover:scale-105 "
                  style={{
                    filter:
                      "drop-shadow(0px 4px 16.1px rgba(101, 232, 152, 0.24))",
                  }}
                >
                  <div className="flex gap-[0.5rem] item-center ">
                    <img src={image} alt="" />
                    <h2 className="text-[22px] font-semibold">{text}</h2>
                  </div>
                  <div>
                    {lists.map((items, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-[#000] flex justify-between w-full py-[1rem] px-[2rem] rounded-[20px] my-[1rem] font-semibold text-[14px] "
                        >
                          <ul className="flex gap-[0.5rem] items-center ">
                            <li className="text-[20px] font-normal">
                              {index + 1}
                            </li>
                            <li>
                              <img src={items.img} alt="" />
                            </li>
                            <li> {items.text}</li>
                            <li className="text-[#A1A1A1]">{items.currency}</li>
                          </ul>
                          <li className=" list-none my-auto   ">
                            {items.progress}
                          </li>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" grid md:grid-cols-4 grid-cols-2 gap-[2rem] my-[2rem]   w-[97%]">
            {smallCards.map(({ id, text, amount }, index) => {
              return (
                <div
                  key={index}
                  className="   py-[1rem] rounded-[20px] bg-[#000] my-[2rem] mx-[0rem] flex justify-center items-center flex-col gap-[1rem] hover:scale-105 transition-all ease-linear delay-150 cursor-pointer "
                  style={{
                    borderRight: "1px solid var(--card-gradient, #2DC24E)",
                    borderLeft: "1px solid var(--card-gradient, #2DC24E)",
                    boxShadow: "0px 0px 4.5px 0px rgba(255, 0, 255, 0.50)",
                  }}
                >
                  <h2 className="text-[18px] ">{text}</h2>
                  <p className="text-[#44DD68] font-bold md:text-[24px] text-[16px] ">
                    {amount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" md:w-[470px] w-auto rounded-[20px] md:px-[1.5rem] px-[1rem] py-[0.5rem] bg-[#000] shadow-2xl hover:shadow border-[#2DC24E] border-[1px] cursor-pointer transition-all ease-linear delay-150 hover:bg-[#141414]   md:col-span-3 col-span-12 ">
          {History.map(({ id, heading, seeAll, trxHistory }, index) => {
            return (
              <div key={index}>
                <div className="flex  justify-between my-[1.5rem] ">
                  <h2 className=" md:text-[24px] text-[18px] font-semibold">
                    {heading}
                  </h2>
                  <p className="text-green-700"> {seeAll}</p>
                </div>
                <div className="">
                  {trxHistory.map(
                    (
                      { id, img, heading, headingSpan, History, date },
                      index
                    ) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between  py-[1rem] rounded-[20px] px-[0rem] shadow-2xl  items-center "
                        >
                          <div className=" flex gap-[1rem] ">
                            <div>
                              <img src={img} alt="" />
                            </div>
                            <div>
                              <h2 className="md:text-[22px] text-[16px] font-semibold">
                                {heading}{" "}
                                <span className="md:text-[14px] text-[12px] text-green-400">
                                  {headingSpan}
                                </span>
                              </h2>
                              <p className="text-[#A1A1A1] md:text-[13px] text-[10px]">
                                {History}
                              </p>
                            </div>
                          </div>
                          <div className="md:text-[12px] text-[8px]">
                            <p>{date}</p>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* history is here */}
      </div>
    </>
  );
};

export default Cards;
