import React from "react";
import roboPic from "../assets/instruction1.svg";
import btnSignup from "../assets/btnsing.svg";
import robo2 from "../assets/instruction2.svg";
import btnverify from "../assets/Link.svg";

import robo3 from "../assets/instruction3.svg";
import btnstake from "../assets/stake.svg";

import robo4 from "../assets/instruction4.svg";
import btnregister from "../assets/Link-1.svg";

export const PicCardss = () => {
  const cards = [
    {
      imageSrc: roboPic,
      title: "Sign-Up and KYC",
      description:
        "Participating in the ChainGPT Pad requires that you signup and pass KYC.",
      btnPic: btnSignup,
    },
    {
      imageSrc: robo2,
      title: "Verify Wallet",
      description:
        "After registration you will verify the wallet address that you will be using to participate in IDOs. One wallet per user.",
      btnPic: btnverify,
    },
    {
      imageSrc: robo3,
      title: "Stake $CGPT",
      description:
        "Access your tier, unlock your multiplier,secure your allocations. Staking $CGPT will define your participation.",
      btnPic: btnstake,
    },
    {
      imageSrc: robo4,
      title: "Register for a Sale",
      description:
        "Signal your interest by registering for projects that you would like to participate in. Only those that register their interest can partake.",
      btnPic: btnregister,
    },
  ];

  return (
    // flex md:flex-row flex-col gap-[2rem] items-center
    // w-[80%] mx-auto
    // flex md:flex-row flex-col
    <div className="flex  md:flex-row flex-col gap-11">
      {cards.map((data, i) => {
        return (
          <div key={i}>
            <div className=" flex flex-col  items-center gap-5 ">
              <img src={data.imageSrc} alt="hi" />
              <h1 className="text-2xl  ">{data.title}</h1>
              <p className="font-segoe-ui max-w-[260px] h-[85px]  text-[12px] font-semibold  ">
                {data.description}
              </p>

             <img
                src={data.btnPic}
                alt="profile"
                width="90%"
                height="50%"
                className=""
              />
     
            </div>
          </div>
        );
      })}
    </div>
  );
};
