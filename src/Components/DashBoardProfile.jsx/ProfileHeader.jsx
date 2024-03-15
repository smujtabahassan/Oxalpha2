import React from "react";
import userProfile from "../../assets/Profile/userProfile.svg";
import Btn from "../Btn";
import "./Styles.css";

const ProfileHeader = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center py-[1rem]">
        <div className="border-[1px] border-[#44DD68] p-[0.7rem] rounded-full shadow-xl">
          <img
            src={userProfile}
            alt=""
            className=" shadow-2xl hover:scale-110 transition-all ease-linear delay-150  cursor-pointer"
          />
        </div>
        <h2 className="my-[1rem] md:text-[24px] text-[18px] font-semibold">
          Alexim
        </h2>
      </div>
      <div className="flex justify-center items-center gap-[2rem] ">
        <div className="flex justify-center items-center flex-col md:gap-[1rem] gap-[0.5rem] md:my-0 my-[2rem]">
          <Btn
            text={"120"}
            style={
              "md:w-[100px] w-[50px] rounded-lg border-l-2 border-r-2 border-green-500 bg-black backdrop-filter backdrop-blur-lg "
            }
          />
          <p className="md:text-[18px] text-[14px] font-semibold">Asset</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-[1rem]">
          <Btn
            text={"10K"}
            style={
              "md:w-[100px] w-[50px]  rounded-lg border-l-2 border-r-2 border-green-500 bg-black backdrop-filter backdrop-blur-lg "
            }
          />
          <p className="md:text-[18px] text-[14px] font-semibold">Followers</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-[1rem]">
          <Btn
            text={"70k"}
            style={
              " md:w-[100px] w-[50px] rounded-lg border-l-2 border-r-2 border-green-500 bg-black backdrop-filter backdrop-blur-lg "
            }
          />
          <p className="md:text-[18px] text-[14px] font-semibold">Likes</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-[1rem]">
          <Btn
            text={"60"}
            style={
              " md:w-[100px] w-[50px] rounded-lg border-l-2 border-r-2 border-green-500 bg-black backdrop-filter backdrop-blur-lg "
            }
          />
          <p className="md:text-[18px] text-[14px] font-semibold">Bidding</p>
        </div>
      </div>

      <div className=" absolute gradient w-[294.236px] h-[300px] top-[14%] left-[20%] "></div>
      <div className=" absolute gradient w-[615.236px] h-[615px] top-[8%] right-[2%] "></div>
    </div>
  );
};

export default ProfileHeader;
