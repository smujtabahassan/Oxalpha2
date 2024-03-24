import React, { useState } from "react";
import {
  Cards,
  DashBoarNav,
  SideNav,
  Trx,
} from "../Components/index";
import { MdMenu } from "react-icons/md";
import AnalyticCards from "../Components/AnalyticCards/AnalyticCards";
import Chart from "../Components/Charts/Chart";
import Balance from "../Components/Balance";
import { Status } from "../Components/Status";

const Analyticsgraph = () => {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return (
    <div className="relative overflow-x-auto ">
      <DashBoarNav text={"Analytics"} paragraph={"Updated on 23 may 2023"} />
      <div className="flex gap-[1rem] py-[1rem] flex-row bg-[#191919]  ">
      <div className={`${show ? "block" : "hidden"}`}>
          <SideNav />
        </div>

        <div className="md:block hidden">
          <SideNav />
        </div>
      
        <div className=" overflow-x-auto   md:px-[0rem] px-[1rem] w-[100%] ">
          <Balance />
          <Chart />
          <AnalyticCards />

          <div className="   ">
            <Status trxstatus={"Your Analytics"}/>
            <Trx />
          </div>
        </div>
      </div>
      <div
        className=" absolute   right-1  top-[5%] text-[#fff] text-[24px] md:hidden block "
        onClick={toggle}
      >
        {!show ? (
          <MdMenu />
        ) : (
          <p className="text-[24px] fixed right-[23%] top-[13%]">{"X"}</p>
        )}
      </div>
    </div>
  );
};

export default Analyticsgraph;
