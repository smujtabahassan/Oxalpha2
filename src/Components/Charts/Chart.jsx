import React from "react";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import Btn from "../Btn";
import mainGraph from "../../assets/Analytics/mainGraph.svg";

const Chart = () => {
  return (
    <div className="bg-[#070707] rounded-[20px] shadow-2xl p-[2rem] my-[3rem]  ">
      <div className="flex justify-between border-b border-[#2A2A2A] py-[1rem] ">
        <h2>Chart</h2>
        <div>
          <div></div>
          <button className=" border-[1px] border-[#31353F] flex px-[1rem]  justify-center w-[150px] items-center gap-[0.5rem] text-[20px] py-[0.5rem] rounded-[10px] shadow-2xl hover:bg-[#000]">
            <PiCurrencyDollarBold />
            USD
            <IoMdArrowDropdown />
          </button>
        </div>
      </div>
      <div className="flex justify-between py-[1.5rem]">
        <div>
          <p className="text-[#E4E4E4] text-[12px]">ETH/BTC</p>
          <h2 className="md:text-[26px] text-[12px] font-semibold">
            $38,252.02
          </h2>
        </div>
        {/* buttos is here */}
        <div className="flex gap-[1rem]">
          <Btn
            text={"1h"}
            style={
              "md:w-[100px] p-1 md:h-auto h-[10px] border-[#31353F] border-[#31353F] bg-green-500 hover:text-[#fff]"
            }
          />
          <Btn
            text={"3h"}
            style={" md:w-[100px] p-1 md:h-auto h-[10px] border-[#31353F]"}
          />
          <Btn
            text={"1d"}
            style={"md:w-[100px] p-1 md:h-auto h-[10px] border-[#31353F]"}
          />
          <Btn
            text={"1w"}
            style={"md:w-[100px] p-1 md:h-auto h-[10px] border-[#31353F]"}
          />
          <Btn
            text={"1m"}
            style={"md:w-[100px] p-1 md:h-auto h-[10px] border-[#31353F]"}
          />
        </div>
        {/* graphs is here */}
      </div>
      <div className="flex md:gap-[4rem] gap-[0.5rem] md:h-[500px] h-auto">
        <div className="flex flex-col gap-[3rem] my-[2rem]">
          <p className="text-[#9E9E9E] text-[12px]">50.000</p>
          <p className="text-[#9E9E9E] text-[12px]">50.000</p>
          <p className="text-[#9E9E9E] text-[12px]">50.000</p>
          <p className="text-[#9E9E9E] text-[12px]">50.000</p>
          <p className="text-[#9E9E9E] text-[12px]">50.000</p>
        </div>
        <div className="md:w-[90%] w-[95%]">
          <img src={mainGraph} alt="" className="w-[100%] h-[100%]" />
        </div>
      </div>
      <div className="flex md:gap-[2rem] gap-[0.5rem] justify-center w-[90%] ml-auto">
        <p className="text-[#9E9E9E] text-[12px]">20:00</p>
        <p className="text-[#9E9E9E] text-[12px]">20:00</p>
        <p className="text-[#9E9E9E] text-[12px]">20:00</p>
        <p className="text-[#9E9E9E] text-[12px]">20:00</p>
        <p className="text-[#9E9E9E] text-[12px]">20:00</p>
        <p className="text-[#9E9E9E] text-[12px]">20:00</p>
      </div>
    </div>
  );
};

export default Chart;
