import React from "react";
// import Tether from "../../../src/assets/Cards/tether.svg";
import Tether from "../../assets/Cards/Tether.svg";
import Btc from "../../assets/Cards/Uniswap.svg";
import graph1 from "../../assets/Cards/graph1.svg";
import { FaStar } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";

const Trx = () => {
  const listTrx = [
    {
      id: 1,
      idItem: "1",
      img: Tether,
      text: "Tether",
      currency: "USDT",
      price: "$1.00",
      progress: "0.22%",
      sevenD: "3.22%",
      marketCrop: "$218,533,780",
      volume: "$5,763,203,118",
      graphImage: graph1,
    },
    {
      id: 1,
      idItem: "1",
      img: Btc,
      text: "Tether",
      currency: "USDT",
      price: "$1.00",
      progress: "0.22%",
      sevenD: "3.22%",
      marketCrop: "$218,533,780",
      volume: "$5,763,203,118",
      graphImage: graph1,
    },
    {
      id: 1,
      idItem: "1",
      img: Tether,
      text: "Tether",
      currency: "USDT",
      price: "$1.00",
      progress: "0.22%",
      sevenD: "3.22%",
      marketCrop: "$218,533,780",
      volume: "$5,763,203,118",
      graphImage: graph1,
    },
    {
      id: 1,
      idItem: "1",
      img: Tether,
      text: "Tether",
      currency: "USDT",
      price: "$1.00",
      progress: "0.22%",
      sevenD: "3.22%",
      marketCrop: "$218,533,780",
      volume: "$5,763,203,118",
      graphImage: graph1,
    },
  ];

  return (
    <div>
      {/* heading are here */}

      <div className="my-[2rem]    w-[auto] overflow-x-auto">
        <ul className=" rounded-[2px] py-[2rem] px-[1rem] grid grid-cols-12 items-center  mx-2 font-semibold shadow-2xl text-[12px] text-[#fff]  bg-gradient-to-r from-green-400 via-black to-green-400 md:w-[97%] w-[1500px] overflow-auto ">
          <li className=" col-span-5">Name</li>
          <li>Price</li>
          <li>24H</li>
          <li>7D</li>
          <li>Market cap</li>
          <li>Volume</li>
          <li>Last 7 days</li>
          <li>Actions</li>
        </ul>
        <ul>
          {listTrx.map(
            (
              {
                id,
                idItem,
                img,
                text,
                currency,
                price,
                progress,
                sevenD,
                marketCrop,
                volume,
                graphImage,
              },
              index
            ) => {
              return (
                <div
                  className=" border-[1px] border-[#2DC24E] rounded-[2px] py-[1.4rem] px-[1rem] grid grid-cols-12 items-center  mx-2 font-semibold shadow-2xl hover:text-[#2DC24E] cursor-pointer text-[12px]   transition-all ease-linear delay-150 md:w-[97%]   w-[1500px] overflow-auto"
                  key={index}
                >
                  <li className=" col-span-5 flex gap-[1rem] items-center">
                    <FaStar className="text-yellow-400 text-[24px]" />
                    <img src={img} alt=""className="" />
                    <p>{idItem}</p>
                    <p>{text}</p>
                    <p className="text-[10px] text-[#A1A1A1]">{currency}</p>
                  </li>

                  <li>{price}</li>
                  <li>{progress}</li>
                  <li>{sevenD}</li>
                  <li>{marketCrop}</li>
                  <li>{volume}</li>
                  <li>
                    <img src={graphImage} alt="" className="w-[100%]" />
                  </li>
                  <li className="text-[24px] font-semibold flex justify-around">
                    <IoMdMenu />
                    <CiMenuKebab />
                  </li>
                </div>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Trx;
