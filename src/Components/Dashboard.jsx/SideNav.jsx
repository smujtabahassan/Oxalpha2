import React from "react";
import homeIcon from "/DashBoardHome/homeIcon.svg";
import galleryIcon from "/DashBoardHome/gallery.svg";
import tokenIcon from "/DashBoardHome/tokenIcon.svg";
import trnadingIcon from "/DashBoardHome/trandingIcon.svg";
import user from "/DashBoardHome/usericon.svg";
import wallet from "/DashBoardHome/ConnectIcon.svg";
import { NftGallery } from "../../Pages";
import { IoSettingsOutline } from "react-icons/io5";
import { GiPowerButton } from "react-icons/gi";
import { Link } from "react-router-dom";
const SideNav = () => {
  const sideNavLinks = [
    {
      id: 1,
      text: "Dashboard",
      link: "/dashboardHome",
      iconImage: homeIcon,
    },
    {
      id: 2,
      text: "Tokens",
      link: "/tokens",
      iconImage: tokenIcon,
    },
    {
      id: 3,
      text: "NFT Gallery ",
      link: "/nftgallery",
      iconImage: galleryIcon,
      linot: "",
    },
    
    {
      id: 5,
      text: "Profile",
      link: "/profile",

      iconImage: user,
    },
    {
      id: 6,
      text: "Wallet",
      iconImage: wallet,
    },
  ];
  return (
    <div className=" relative  h-[1000px] md:w-[340px] w-[150px] rounded-[20px]  border-2 border-green-400 bg-black shadow-2xl hover:bg-[#131212] cursor-pointer transition-all ease-in-out delay-150 flex items-center flex-col py-[2rem] ">
      <ul className="flex flex-col gap-[2rem]">
        {sideNavLinks.map(({ id, link, text, iconImage }) => {
          return (
            <Link to={link}>
            <li
              key={id}
              className="flex gap-x-[0.5rem] text-[16px] font-semibold rounded-lg hover:border-[0.5px] hover:border-green-500 hover:bg-gray-800 shadow-md py-[0.8rem] px-[2rem] transition-all ease-linear delay-150 "
            >
              <img src={iconImage} alt="" />
              {text}
            </li>
            </Link>

          );
        })}
      </ul>

      <div className=" absolute bottom-8 lg:left-[50px] left-[5px] flex flex-col gap-[1rem]  ">
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
