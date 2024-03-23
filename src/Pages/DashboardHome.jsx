import React, { useState } from "react";
import { Cards, DashBoarNav, SideNav, Trx } from "../Components/index";
import { MdMenu } from "react-icons/md";
import Layout from "../Layout";

const DashboardHome = () => {
  const [show, setShow] = useState(false);

  function change() {
    setShow(!show);
  }
  return (
    <>
    <div className="relative  overflow-x-auto  ">
      
      <DashBoarNav text={"Dashboard"} paragraph={"Updated on 23 may 2023"} />

      <div className="flex gap-[1rem] py-[1rem]  ">
        <div className={`${show ? "block" : "hidden"}`}>
          <SideNav />
          
        </div>

        <div className=" md:block hidden">
          <SideNav />
          
        </div>


        <div className="w-[80%] md:none ml-[10px]">
          <Cards />
          <div className="">
            < Trx className="md:w-[80%] w-[30%]" />
          </div>
        </div>
      </div>
      <div
        className=" absolute   right-5  top-[1%] text-[#fff] text-[24px] md:hidden block "
        onClick={change}
      >
        {!show ? (
          <MdMenu className="" />
        ) : (
          <p className="text-[24px] fixed right-[13%] top-[2%]">{"X"}</p>
        )}
      </div>
    </div>

    </>

  );
};

export default DashboardHome;
