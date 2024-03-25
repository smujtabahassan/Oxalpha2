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
import { Status } from "../Components/Status";
import BalanceTrack from "../Components/BalancewithTracking"
const Porfolio = () => {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return (
    <div className="relative overflow-x-auto  ">
      <DashBoarNav text={"Portfolio"} paragraph={"Updated on 23 may 2023"} />
      <div className="flex gap-[1rem] py-[1rem] flex-row  bg-[#191919]  ">
        <div className={`${show ? "block" : "hidden"}`}>
          <SideNav />
        </div>

        <div className="md:block hidden">
          <SideNav />
        </div>

        <div className="   md:px-[0rem] px-[1rem] w-[90%] overflow-x-auto  ">
          <BalanceTrack/>
          {/* <Chart /> */}
          {/* <AnalyticCards /> */}

          <div className="  w-[100%]  ">
            <Status trxstatus={"Your holdings"}/>
            <Trx />
          </div>
        </div>
      </div>
      <div
        className=" absolute   right-5  top-[5%] text-[#fff] text-[24px] md:hidden block "
        onClick={toggle}
      >
        {!show ? (
          <MdMenu />
        ) : (
          <p className="text-[24px] fixed right-[13%] top-[13%]">{"X"}</p>
        )}
      </div>
    </div>
  );
};

export default Porfolio;
