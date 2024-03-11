
import { useState } from 'react';
import {
    DashBoarNav,
    SideNav,
    Trx,
  } from "../Components/index";

  import { MdMenu } from "react-icons/md";


export const Tokkens = () => {
    const [show, setShow] = useState(false);

    function toggle() {
      setShow(!show);
    }
  return (
    <div>
<DashBoarNav text={"Tokkens"} paragraph={"Updated on 23 may 2023"} />
      <div className="flex  gap-[1rem] py-[1rem]  ">
        <div className={`${show ? "block " : "hidden"}`}>
          <SideNav />
        </div>
        <div className="overflow-x-auto ">
          
          <div className="trendingnft ">
          
          </div>
          <br />
          <div className="mt-[100px]  ">
          
          </div>

      <div className=" absolute gradient w-[515.236px] h-[615px] top-[8%] right-[-20%] "></div>

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
  )
}
