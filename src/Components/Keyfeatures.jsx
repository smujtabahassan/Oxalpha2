import bgfeatures from "../assets/cards.svg";
import "../App.css";
import cardImage from "../assets/cards.svg";
export const Keyfeatures = () => {
  let keyFeatures = [
    {
      head: "Speed",
      description:
        "The ability to execute trades in milliseconds.Ability to work on ethereum is quick.",
      img: bgfeatures,
    },
    {
      head: "Automation",
      description:
        " Operating based on predefined rules and conditions, reducing the need for constant monitoring by traders.",
      img: bgfeatures,
    },
    {
      head: "Precision",
      description:
        "Operating based on predefined rules and conditions, reducing the need for constant monitoring by traders.",

      img: bgfeatures,
    },
    {
      head: "Consistency",
      description:
        " Operating based on predefined rules and conditions, reducing the need for constant monitoring by traders.",

      img: bgfeatures,
    },
  ];

  return (
    <div>
      <div className="cards flex flex-col items-center align-bottom   gap-16 bg-gradient-to-r  from-green-600/50  to-black-400/10 lg:h-[400px] h-[1080px] my-6 p-10 ">
        <div className="        ">
          <h1 className=" text-4xl  font-bold  flex   flex-col items-center gap-4">
            Key Features Of <br />
            <span className="text-5xl  bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text font-extrabold">
              OXalpha Sniper Bot
            </span>
          </h1>
          <div
            className=" grid lg:grid-cols-4 grid-cols-1 w-[90%]  gap-[1rem]   
     "
          >
            {keyFeatures.map((v, i) => {
              return (
                <div
                  className=" relative flex flex-col  justify-center item-center  gap-5    my-[2rem] hover:scale-105 transition-all ease-linear delay-150 cursor-pointer hover:text-green-400 "
                  key={i}
                >
                  <div>
                    <img src={cardImage} alt="" className="absolute w-[100%]" />
                  </div>
                  <div className=" z-[999]  w-[100%] px-[2rem] text-center">
                    <h1 className="lg:text-[30px] text-[25px] z-[999] font-semibold">
                      {v.head}
                    </h1>
                    <p className="text-[10px]  text-justify  ">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
