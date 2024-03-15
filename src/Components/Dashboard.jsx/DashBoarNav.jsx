import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Btn from "../Btn";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Analyticsgraph from "../../Pages/Analyticsgraph";
import History from "../../Pages/History";
import Porfolio from "../../Pages/Porfolio";
import { DashboardHome } from "../../Pages";
import { Link } from "react-router-dom";
const DashBoarNav = ({ text, paragraph }) => {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div
      className="w-full flex justify-around md:items-center items-start md:px-0 px-[2rem] shadow-2xl  py-[1rem] md:flex-row flex-col gap-[2rem] md:bg-[#000] bg-[#272525]  "
      style={{
        boxShadow: "0px 4px 9.3px 0px rgba(101, 232, 152, 0.50)",
      }}
    >
      <div>
        <img src="/DashBoardHome/Dashbaoardlogo.svg" alt="" />
      </div>
      <div className={`${show ? " block " : "hidden"}`}>
        <h2 className="text-[30px] font-semibold">{text}</h2>
        <p className="text-sm font-semibold text-[#909093]">{paragraph}</p>
      </div>
      <div className={`${show ? " block relative " : "hidden relative"}`}>
        <input
          type="text"
          className="rounded-[30px] shadow-lg py-[1rem] px-[3.4rem] bg-transparent border-[0.5px] md:w-[300px] w-[100%]"
          placeholder="Search your coin"
        />

        <IoSearch className="text-[24px] absolute top-4 left-5 " />
      </div>
      <div
        className={`${
          show ? " block flex gap-[2rem] md:flex-row flex-col " : "hidden"
        }`}
      >
      <Link to="/portfolio" >  <Btn text={"Portfolio"} style={"w-[100px] "} /></Link >
      <Link to="/analytics"><Btn text={"Analytics"} style={"w-[100px]"} /></Link >
      <Link to="/history"> <Btn text={"History"} style={"w-[100px]"} /></Link >
      </div>

      <div className={`${show ? "block relative" : "hidden"}  `}>
        <Link to="/"> <Btn
          text={"Connect Wallet"}
          style={
            "text-[#D9D9D9] border-2 border-green-500 lg:w-[187px] w-[167px] hover:bg-green-900 hover:text-[#fff]"
          }
        />
        <img
          src="/DashBoardHome/ConnectIcon.svg"
          alt=""
          className=" absolute top-5 left-5"
        />

</Link>
      </div>
      <div className="text-[24px] absolute top-5 right-5 md:hidden block">
        {!show ? (
          <AiOutlineMenuFold onClick={handleToggle} />
        ) : (
          <RxCross1 onClick={handleToggle} />
        )}
      </div>
    </div>
  );
};

export default DashBoarNav;
