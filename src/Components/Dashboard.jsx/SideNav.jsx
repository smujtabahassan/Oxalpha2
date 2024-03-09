import React from "react";
import homeIcon from "/DashBoardHome/homeIcon.svg";
import galleryIcon from "/DashBoardHome/gallery.svg";
import tokenIcon from "/DashBoardHome/tokenIcon.svg";
import trnadingIcon from "/DashBoardHome/trandingIcon.svg";
import user from "/DashBoardHome/usericon.svg";
import wallet from "/DashBoardHome/ConnectIcon.svg";

import { IoSettingsOutline } from "react-icons/io5";
import { GiPowerButton } from "react-icons/gi";

const SideNav = () => {
  const sideNavLinks = [
    {
      id: 1,
      text: "Dashboard",
      iconImage: homeIcon,
    },
    {
      id: 2,
      text: "Tokens",
      iconImage: tokenIcon,
    },
    {
      id: 3,
      text: "NFT Gallery ",
      iconImage: galleryIcon,
      linot: "",
    },
    {
      id: 4,
      text: "Trading",
      iconImage: trnadingIcon,
    },
    {
      id: 5,
      text: "Profile",
      iconImage: user,
    },
    {
      id: 6,
      text: "Wallet",
      iconImage: wallet,
    },
  ];
  return (
    <div className=" relative h-[1000px] md:w-[340px] w-[150px] rounded-[20px]  border-2 border-green-400 bg-black shadow-2xl hover:bg-[#131212] cursor-pointer transition-all ease-in-out delay-150 flex items-center flex-col py-[2rem] ">
      <ul className="flex flex-col gap-[2rem]">
        {sideNavLinks.map(({ id, text, iconImage }) => {
          return (
            <li
              key={id}
              className="flex gap-x-[0.5rem] text-[16px] font-semibold rounded-lg hover:border-[0.5px] hover:border-green-500 hover:bg-gray-800 shadow-md py-[0.8rem] px-[2rem] transition-all ease-linear delay-150 "
            >
              <img src={iconImage} alt="" />
              {text}
            </li>
          );
        })}
      </ul>

      <div className=" absolute bottom-8 left-[50px] flex flex-col gap-[1rem]  ">
        <div className="flex   ">
          <p className="flex gap-x-[0.5rem] text-[16px] font-semibold rounded-lg hover:border-[0.5px] hover:border-green-500 hover:bg-gray-800 shadow-md py-[0.8rem] px-[2rem] transition-all ease-linear delay-150  items-center">
            <IoSettingsOutline className="text-[24px] " /> settings
          </p>
        </div>
        <div className="flex   ">
          <p className="flex gap-x-[0.5rem] text-[16px] font-semibold rounded-lg hover:border-[0.5px] hover:border-red-500 hover:bg-gray-800 shadow-md py-[0.8rem] px-[2rem] transition-all ease-linear delay-150  items-center text-[#FF2E00]">
            <GiPowerButton className="text-[24px]" /> Log Out
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
