import starimg from "../assets/backgrounstar.svg";
export const Star = () => {
  return (
    <div>
      <div className="mainstar flex  flex-col  gap-40 p-10 md:text-[15px] text-[10px]  ">
        <div className="flex   justify-around  w-[100%]  ">
        
          <div className="descriptions flex flex-col  w-[443px]  gap-6">
            <h1 className="border-b-2 border-green-600/50">Sniper Bot</h1>

            <p>
              The TUF Sniper Bot is a market-leading tool for trading newly
              released tokens on decentralized exchanges. With the speed of our
              Sniper Bot, you will be able to take positions on new launches,
              once trading has been enabled on the DEXs. Using the built-in
              simulator, you will be able to predict your outcomes and
              protections needed.
            </p>

            <button className="border-2 rounded-lg border-green-600 w-[136px] h-[50px]">
              See More
            </button>
          </div>

          <div className="descriptions flex flex-col w-[443px] gap-6">
            <h1 className="border-b-2 border-green-600/50">Tracker Bot</h1>

            <p>
              The TUF Wallet Tracker Bot lets traders follow any selected
              wallets on the BSC & ETH networks. It copies the buy/sell orders
              of the wallet you wish to copy trade, allowing you to front-run
              the wallet owner’s trade or follow it closely. Use this powerful
              tool to find and earn from projects like never before.
            </p>

            <button className="border-2 rounded-lg border-green-600 w-[136px] h-[50px]">
              See More
            </button>
          </div>
        </div>
        <div className="flex   justify-around  w-[100%] ">
          <div className="descriptions flex flex-col w-[443px] gap-6">
            <h1 className="border-b-2 border-green-600/50">TUF ExtracTool</h1>

            <p>
              The TUFExt web application enables you to analyze on-chain data,
              transactions, addresses on both, ETH and BSC networks. The data
              provided would allow analytics in an industry leading way. Roadmap
              details are also available.
            </p>

            <button className="border-2 rounded-lg border-green-600 w-[136px] h-[50px]">
              See More
            </button>
          </div>

          <div className="descriptions flex flex-col w-[443px] gap-6">
            <h1 className="border-b-2 border-green-600/50">
              NFT & Miner ETH Bot
            </h1>

            <p>
              With the NFT Sniper bot, you can time to be the latest bid during
              an auction. This will allow you to take the timed trade at the
              optimal time. With our NFT Sniper bot, you will be able to
              automate your NFT trading with one of the best in its class.
            </p>

            <button className="border-2 rounded-lg border-green-600 w-[136px] h-[50px]">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
