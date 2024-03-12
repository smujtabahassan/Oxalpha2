import React from "react";

const Btn = ({ text, style, onclick }) => {
  return (
    <div
      className={` bordrer text-[12px] transition-all ease-in-out delay-150 border-[1px] rounded-[62px] shadow-2xl hover:shadow-sm hover:cursor-pointer flex flex-col justify-center items-center py-[1.2rem] hover:border-[#44DD68] hover:text-[#44DD68] ${style}`}
      onClick={onclick}
    >
      {text}
    </div>
  );
};

export default Btn;
