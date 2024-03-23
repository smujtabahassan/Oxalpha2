import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Btn from "../Btn";
import { AiOutlineMenuFold,AiOutlineBell  } from "react-icons/ai";
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
      className=" overflow-x-auto  flex justify-around md:items-center items-start xl:px-0 lg:px-[-10rem]  md:px-[1rem] px-[2rem] shadow-2xl  py-[1rem] md:flex-row flex-col gap-[2rem] md:bg-[#0009] bg-[#272525]  "
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
          className=" rounded-[30px]  shadow-lg py-[1rem] px-[3.4rem] bg-transparent border-[0.5px] lg:w-[300px] w-[100%]"
          placeholder="Search your coin"
        />

        <IoSearch className="text-[24px] absolute top-4 left-5 " />
      </div>
<div className={`${show ?"block" :"hidden" }`}>
      <div className=" md:ml-0 ml-1 rounded-full border-2 border-white-400 md:w-[43px] w-[43px]  md:h-[43px] h-[43px]  flex items-center justify-center hover:border-[green] bg-border-green-500 hover:text-green-500 ">
      <AiOutlineBell   className="relative size-5 hover:translate-x-[1px] scale-150   transition-all "/>
      <div className="abosulte bg-[red] w-[5px] h-[5px] rounded-xl mt-[-20px] "></div>
      </div>
      </div>

      <div
        className={`${
          show ? " block flex gap-[2rem] md:flex-row flex-col " : "hidden"
        }`}
      >
      <Link to="/portfolio" >  <Btn text={"Portfolio"} style={"lg:w-[100px] w-[80px]  "} /></Link >
      <Link to="/analytics"><Btn text={"Analytics"} style={"lg:w-[100px] w-[80px] "} /></Link >
      <Link to="/history"> <Btn text={"History"} style={"lg:w-[100px] w-[80px]"} /></Link >
      </div>

      <div className={`${show ? "block relative flex flex-row justify-between" : "hidden"}  `}>
        <Link to="/">
          
          <Btn
          text={"Connect Wallet"}
          style={
            "text-[#D9D9D9] lg:text-[10px] text-[6px] border-2 border-green-500   lg:w-[187px] w-[100px] hover:bg-green-900 hover:text-[#fff]"
          }
        /> 

<div>  <img
          src="/DashBoardHome/ConnectIcon.svg"
          alt=""
          className=" absolute top-4 lg:left-5 left-2  lg:size-6 size-4"
        /></div>
</Link>
      </div>

      <div className="text-[24px] absolute top-[-5] right-16 md:hidden block">
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
