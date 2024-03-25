import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import Btn from "../Components/Btn";
import { BiEditAlt } from "react-icons/bi";
import Trackline from "../assets/Trackingline.png"

const Balance = () => {
  const Profits = [
    {
      id: 1,
      caption: "All time profit",
      amount: "2.52% (+$324.82)",
      color: "text-[#2DC24E]",
    },
    {
      id: 2,
      caption: "Best performer",
      amount: "10.52% (+$627.82)",
      color: "text-[#2DC24E]",
    },
    {
      id: 3,
      caption: "Worst performer",
      amount: "1.23% (-$87.32)",
      color: "text-[#F92C2C]",
      rotate: "rotate-180",
    },
  ];
  return (
    <div className="py-[2rem] overflow-x-auto  ">
    
     <div className=" flex flex-row justify-between ">
      
      <div className="flex flex-col gap-[0.5rem] ">
        <h2 className="text-[#E1E1E1] text-[12px]">Current balance</h2>
        <h2 className="text-[28px] font-semibold">$2,77,308.00</h2>
        <p className="text-[12px]  text-[#F92C2C]">
          -$1200.78 (-1.89%) <span className="text-[#fff] mx-2">24H</span>
        </p>
        </div>



      </div>
      {/* Profits data is here */}
      <div className="flex gap-[2rem] py-[2rem] ">
        {Profits.map(({ id, caption, amount, color, rotate }) => {
          return (
            <div className="flex gap-[0.5rem] flex-col" key={id}>
              <p className={`md:text-[12px] text-[8px] text-[#E1E1E1] `}>
                {caption}
              </p>
              <p className={`${color} flex items-center sm:text-[12px] text-[8px] `}>
                {" "}
                <IoMdArrowDropup className={`sm:text-[20px] text-[10px] ${rotate}`} />
                {amount}
              </p>
            </div>
          );
        })}
      </div>
      {/* buttons is here */}
      <div className="flex md:gap-[1rem] gap-[0.5rem] ">
        <Btn text={"Chart"} style={"sm:w-[150px] w-[100px] rounded-[30px]"} />
        <Btn
          text={"Allocation"}
          style={"sm:w-[150px] w-[100px] bg-green-600 hover:text-[#fff] rounded-[30px]"}
        />
        <Btn text={"Statistics"} style={"sm:w-[150px] w-[100px] rounded-[30px]"} />
      </div>

    </div>
  );
};

export default Balance;
