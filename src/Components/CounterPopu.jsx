export const CounterPopu = () => {
  let datacounter = [
    {
      heading1: "3650+",
      para: "Transactions",
    },
    {
      heading1: "1000+",
      para: "Users",
    },
    {
      heading1: "3600+",
      para: "Support Help",
    },
    {
      heading1: "10+",
      para: "Team Experts",
    },
  ];

  return (
    <div className="flex border-green-600  rounded-3xl border-3    lg:flex-row flex-col justify-between sm:w-[70%] w-[90%] mx-auto p-20 lg:h-[150px]  bg-opacity-86 rounded-lg shadow-md backdrop-blur-0 border border-opacity-27 border-gray-800 ">
      {datacounter.map((v, i) => {
        return (
          <div className="flex flex-col  justify-center " key={i}>
            <div>
              <h1
                className="text-3xl font-bold bg-gradient-to-r from-green-300/60  to-green-500 text-transparent bg-clip-text "
                key={i}
              >
                {v.heading1}
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-sm">{v.para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
