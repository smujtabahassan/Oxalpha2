import Ellipse219 from "../../assets/Coins/Ellipse_219.png";
import Ellipse216 from "../../assets/Coins/Ellipse_216.png";
import Ellipse220 from "../../assets/Coins/Ellipse_220.png";
import Ellipse221 from "../../assets/Coins/Ellipse_221.png";
import Ellipse222 from "../../assets/Coins/Ellipse_222.png";
import Ellipse223 from "../../assets/Coins/Ellipse_223.png";
import etheriumimg from "../../assets/Coins/etherium.png";

import { FaFire } from "react-icons/fa6";
import cardsimg from "../.././assets/Cards/NFTCard2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidercompo from "./Slidercompo";



export const NftTrending = () => {

  let iconsimg = [{

    id: "#1",
    card1: Ellipse219,
    title: "CryptoKing",
    desc: "Floor price",
    cryptocoin: etheriumimg,
    number: "20",
  },

  {

    id: "#2",
    card1: Ellipse216,
    title: "CryptoKing",
    desc: "Floor price",
    cryptocoin: etheriumimg,
    number: "21",
  },
  
  {

    id: "#3",
    card1: Ellipse220,
    title: "CryptoKing",
    desc: "Floor price",
    cryptocoin: etheriumimg,
    number: "16",
  },

  {

    id: "#4",
    card1: Ellipse221,
    title: "coup",
    desc: "Floor price",
    cryptocoin: etheriumimg,
    number: "16",
  },{

    id: "#5",
    card1: Ellipse222,
    title: "frendz",
    desc: "Floor price",
    cryptocoin: etheriumimg,
    number: "16",
  },{

    id: "#6",
    card1: Ellipse223,
    title: "Omo Ologo",
    desc: "Floor price",
    cryptocoin: etheriumimg,
    number: "16",
  },

]

  return (
    <div  className="">
      <div className="grid lg:grid-cols-2 grid-cols-1 px-[30px] w-full  lg:gap-[10%] gap-[70%] md:h-auto  sm:py-[170px] py-[270px] ">


        <div className="relative flex flex-col w-[647px] h-[50px]  ">
          <div className="flex flex-row gap-[200px] justify-center">
            <div className="flex md:flex-row flex-col gap-2">
              <h1 className="text-[40px] sm:left-[10px] left-[1px]">TRENDING NFTs</h1>
              <div className="text-green-500 text-[30px]">
                <FaFire />
              </div>
            </div>
            <p className=" ">
              Art <span className="text-[10px] w-[10px]">V</span>
            </p>
          </div>
          <br />
         <div >

          <Slidercompo />
          </div>
        </div>


        <div className="Rare  hover:bg-slate-800/30  relative top-[57px] sm:w-[645px] w-[405px]   lg:none ml-[10px]  sm:h-[269px] h-[369px]  border-2 border-green-400 rounded-2xl px-11 py-11 font-medium 	bg-black ">

          <div className=" flex md:flex-row flex-col justify-between items-center align-middle sm:w-[485px] w-[320px]">

            <div>
              <h2 className=" text-[24px] max-w-[250.726px]  ">
                Top Collections
              </h2>
            </div>




            <div className=" r-[1px]">
              <p>Over last <span className="text-blue-500">7days</span></p>
            </div>




          </div>





          <div className="coins absolute grid sm:grid-cols-3 grid-cols-2 sm:gap-2  gap-0 w-[auto]  sm:left-[30px] left-[0px]">



            {iconsimg.map((v, i) => {


              return (

                <> 
             <div  className="flex flex-col w-[200.726px] gap-2 hover:scale-105 transition-all" >  
                  
                  <div className="flex flex-row  p-4">
                    <div>{v.id}</div>
                    <div className="w-[25%]"><img src={v.card1} alt="" /></div>
                    <div >{v.title} </div>

                  </div>


                  <div className="relative flex flex-row mt-[-20px] gap-3 ">
                   
                    <div className="text-sm indent-[75px] mt-[-20px] text-gray-400">{v.desc}</div>
                    <div className="w-[12px] absolute top-[-10px] right-[10px]"><img src={v.cryptocoin} alt="" /></div>
                    <div className=" mt-[-19px]">{v.number}</div>

                  </div>




                </div>



  
    
  
                </>

              )




            })
            }












          </div>
          
        </div>




      </div>
    </div>






  );
};
