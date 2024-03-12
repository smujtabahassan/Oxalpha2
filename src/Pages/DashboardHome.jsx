import React, { useState } from "react";
import { Cards, DashBoarNav, SideNav, Trx } from "../Components/index";
import { MdMenu } from "react-icons/md";

const DashboardHome = () => {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return (
    <div className="relative overflow-x-auto  ">
      <DashBoarNav text={"Dashboard"} paragraph={"Updated on 23 may 2023"} />
      <div className="flex gap-[1rem] py-[1rem]  ">
        <div className={`${show ? "block" : "hidden"}`}>
          <SideNav />
          app.
        </div>
        <div className="w-[100%]">
          <Cards />
          <div className="   ">
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

export default DashboardHome;
