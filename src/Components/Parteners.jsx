import web3 from "../assets/web3dev.svg";
import solana from "../assets/solana.svg";
import meta from "../assets/metamask.svg";
import designsem from "../assets/Design sem nome.svg";
import thinkdev from "../assets/Think_Dev.svg";
import polygon from "../assets/polygon.svg";
import hexa from "../assets/HexaChainy (6) 1.svg";

export const Parteners = () => {
  return (
    <div>
      <div className="parteners relative  flex flex-col   items-center gap-10 z-10 bg-gradient-to-r from-green-950/30 from-1% via-black via-90% to-green-950 to-1% opacity-95  sm:p-12 p-1 w-auto ">
        <h2 className="text-[38px] text-green-500">Partners</h2>
        <div className=" flex flex-row border-1 rounded-2xl  align-middle items-center justify-center gap-6 bg-gradient-to-r from-green-600 to-gray-800  bg-opacity-50 sm:p-10 p-1   ">
          <div className="web3 cursor-pointer hover:scale-110 transition-all  ">
            <img src={web3} alt="web3" />
          </div>
          <div className="solana cursor-pointer hover:scale-110 transition-all "  >
            <img src={solana} alt="solana" />
          </div>
          <div className="metamask cursor-pointer hover:scale-110 transition-all">
            <img src={meta} alt="meta" />
          </div>
          <div className="sem cursor-pointer hover:scale-110 transition-all">
            <img src={designsem} alt="sem" />
          </div>
          <div className="thinkdev cursor-pointer hover:scale-110 transition-all">
            <img src={thinkdev} alt="thinkdev" />
          </div>
          <div className="polygon cursor-pointer hover:scale-110 transition-all">
            <img src={polygon} alt="polygon" />
          </div>
          <div className="lachain cursor-pointer hover:scale-110 transition-all">
            <img src={hexa} alt="hexachain" />
          </div>
        </div>
        <h2 className=" text-[10px]  text-green-500 text-[20px]">
          Still Have Any Questions?
        </h2>
        <h2 className=" md:text-[20px] text-[10px]">
          Join to our discord channel to talk with one of our team members!
        </h2>

        <button className="rounded-full border border-solid border-stroke-button md:h-[56px] h-[45px] w-[185px]  p-4 pt-3 hover:scale-105  ">
          Open Discord
        </button>
      </div>
    </div>
  );
};
