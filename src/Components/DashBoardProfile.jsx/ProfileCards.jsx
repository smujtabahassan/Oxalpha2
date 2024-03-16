import React from "react";
import activity1 from "../../assets/Profile/activity1.svg";
import activity2 from "../../assets/Profile/activity2.svg";
import activity3 from "../../assets/Profile/activity3.svg";

const ProfileCards = () => {
  const cards = [
    {
      id: 1,
      image: activity1,
      heading: "Crystal_Art",
      text: "by",
      text1: "dsddfsfasf",
      bid: "New Bid",
      ETH: "6.25 ETH",
      time: "3m ago",
    },
    {
      id: 2,
      image: activity2,
      heading: "Creative Art",
      text: "by",
      text1: "asdadsd",
      bid: "New Bid",
      ETH: "7.50 ETH",
      time: "3m ago",
    },
    {
      id: 3,
      image: activity3,
      heading: "4,668 ETH",
      text: "",
      text1: "",
      bid: "",
      ETH: "",
      time: "Add >",
    },
  ];

  return (
    <div>
      <h2 className="text-[20px] font-semibold">Recent Activity</h2>
      <div className=" flex md:flex-row flex-col justify-around gap-[1rem]">
        {cards.map(
          ({ id, image, heading, text, text1, bid, ETH, time }, index) => {
            return (
              <div
                key={index}
                className="md:w-[40%] w-[98%] mx-auto flex  justify-between py-[1rem] px-[1rem] my-[1rem] transition-all ease-in-out delay-250 items-center cursor-pointer hover:text-[#44DD68] bg-[rgba(0, 0, 0, 0.40)] hover:bg-[#292828]"
                style={{
                  borderRadius: "16px",
                  border: "2px solid var(--stroke-button, #44DD68)",
                  background: "",
                }}
              >
                <div className=" rounded-[10px] overflow-hidden hover:scale-105  transition-all delay-150 ">
                  <img src={image} alt="" />
                </div>
                <div>
                  <h2 className="text-[18px] font-semibold">{heading}</h2>
                  <p>
                    {text} <span className=" text-[#65E898]">{text1}</span>
                  </p>
                </div>
                <div>
                  <p className="text-[#65E898]">{bid}</p>
                  <p className=" text-[18px] font-semibold">{ETH}</p>
                  <p className="text-[#65E898] font-semibold">{time}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProfileCards;
