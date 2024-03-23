import React from "react";
import userProfile from "../../assets/Profile/userProfile.svg";
import Btn from "../Btn";
import "./Styles.css";

const ProfileHeader = () => {
  return (
    <div>
      <div className="w-full  flex flex-col md:mr-0 ml-12  md:items-center items-start py-[1rem]">
        <div className="border-[1px] border-[#44DD68] p-[0.7rem] rounded-full shadow-xl">
          <img
            src={userProfile}
            alt=""
            className=" shadow-2xl hover:scale-110 transition-all ease-linear delay-150  cursor-pointer"
          />
        </div>
        <h2 className="my-[1rem] md:text-[24px] text-[18px] md:m-[0px] mx-[5rem] font-semibold">
          Alexim
        </h2>
      </div>
      <div className="flex md:justify-center justify-start  gap-[2rem] ">
        <div className="flex justify-center items-center md:ml-0 ml-8 flex-col md:gap-[1rem] gap-[0.5rem] md:my-0 my-[2rem]">
          <Btn
            text={"120"}
            style={
              "md:w-[100px] w-[50px] rounded-lg border-l-2 border-r-2 border-green-500 bg-black backdrop-filter backdrop-blur-lg "
            }
          />
          <p className="md:text-[18px] text-[14px] font-semibold">Asset</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-[1rem] ">
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

      <div className=" absolute gradient w-[294.236px] h-[30px] top-[100%] left-[10%] "></div>
      <div className=" absolute gradient w-[615.236px] h-[615px] md:top-[10%] bottom-[10%] right-[0%] "></div> 
    </div>
  );
};

export default ProfileHeader;
