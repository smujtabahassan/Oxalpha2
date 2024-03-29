import React from 'react'
import Marks from "../assets/Cards/Marks.png";
import Monkey from "../assets/Cards/Monkey.png";
import SmokeyMonkey from "../assets/Cards/smokerMonkey.gif";
import Badboy from "../assets/Cards/Boy.gif";

import etheriuemIcons from "../assets/Cards/Eth_icon.svg";
import Ellipse219 from "../assets/Coins/Ellipse_219.png";
import Ellipse216 from "../assets/Coins/Ellipse_216.png";
import Ellipse220 from "../assets/Coins/Ellipse_220.png";
import Ellipse221 from "../assets/Coins/Ellipse_221.png";
import Ellipse222 from "../assets/Coins/Ellipse_222.png";
import Ellipse223 from "../assets/Coins/Ellipse_223.png";
import etheriumimg from "../assets/Coins/etherium.png";
import Catgif from "../assets/Coins/monkeycraxy.gif"


import Ellipse213 from "../assets/Coins/Ellipse_213.png";
import Ellipse214 from "../assets/Coins/Ellipse_214.png";
import Ellipse215 from "../assets/Coins/Ellipse_215.png";
import Ellipse234 from "../assets/Coins/Ellipse_234.png";

import Btn from './Btn';
import { BsThreeDots } from "react-icons/bs";
import "../Landing.css";
import myProfile from "../assets/Cards/UserProfile.png";
import { FaFire } from "react-icons/fa6";

export const TrendingGifs= () => {
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
 
    const TopCreators=[{

      id: "#1",
      card1: Ellipse213,
     name: "Crown's Diary",
      email: "@Felixeffect",
      
    },
    {
  
      id: "#1",
      card1: Ellipse214,
     name: "Cinderella",
      email: "@Pharm",
      
    
  
  
  },
  {
  
      id: "#1",
      card1: Ellipse215,
     name: "Leinard Studio",
      email: "@Leinard",
      
    },{
  
      id: "#1",
      card1: Ellipse234,
     name: "Joe Adamu",
  email:"@Jadm2"
  
  
  },
  
  
  
  ]
const TrendingGif=[


    {
id:2,
img:SmokeyMonkey,
image:myProfile,
name:"Moonfall",
email:"By @JSmith",
sale:"on sale",
ethicon:etheriuemIcons,
eth:"4.89ETH",
amountdollar:"($ 654,874.86)"

    },

    {
        id:2,
        img:Badboy,
        image:myProfile,
        name:"Moonfall",
        email:"By @JSmith",
        sale:"on sale",
        ethicon:etheriuemIcons,
        eth:"4.89ETH",
        amountdollar:"($ 654,874.86)"
        
            },
            {
                id:2,
                img:Catgif,
                image:myProfile,
                name:"Moonfall",
                email:"By @JSmith",
                sale:"on sale",
                ethicon:etheriuemIcons,
                eth:"4.89ETH",
                amountdollar:"($ 654,874.86)"
                
                    },
                    {
                        id:2,
                        img:Badboy,
                        image:myProfile,
                        name:"Moonfall",
                        email:"By @JSmith",
                        sale:"on sale",
                        ethicon:etheriuemIcons,
                        eth:"4.89ETH",
                        amountdollar:"($ 654,874.86)"
                        
                            },
                                                


]


const SideCard=[{
    Title:"Ebony ",
    number:"#2775",
    eth:"10.15 ETH",
    ethno:"1/1",
    weight:"Highest bid 5 WEIGHT",
    }]

    return (
<div>

<div className='mt-[20px] text-[36px]  md:mx-0 sm:mx-auto mx-1 font-sans font-semibold'><h1>Trending NFTS</h1></div>


        <div className='flex md:w-[100%] sm:w-[50%]  w-[40%] md:flex-row flex-col md:gap-[2rem] gap-[6rem] mt-[20px] px-[10px]   md:mx-0 sm:mx-auto mx-1 '>


       {TrendingGif.map(({id , img,image, name ,email , sale , ethicon, eth , amountdollar} , index) =>{
        
    return    <div className='cardsgift flex flex-col  relative  border border-2  md:w-[auto] h-[auto]  rounded-xl gap-[0.5rem] p-2 transition-all ease-linear delay-150 md:hover:scale-105 w-[90%] mx-auto' key={index} >


         <div className='flex flex-row items-center justify-around gap-[2rem] '>


         <div className='px-[5px] '>

<img src={img} alt="etheriuemIcons" className='rounded-xl w-[90%] max-h-[270px] ' />

</div>

             
         </div>
         

         <div className='flex relative flex-row   my-[2rem]'> 
             <div className='  w-[25px] h-[20px]  mx-[2px] '>
                 <img src={image} alt="marks" className='' />
             </div>

             <div className='left-[40px] top-[12px] '>
                 <h1 className='text-[12px] font-semibold'>{name}</h1>
             </div>
             


             <div className='absolute indent-7 top-5 '>
<h2 className='text-[8.56px] font-bold'>{email}</h2>
</div>
             </div>


         




                
 <div className=''>

<div className=" flex flex-row justify-between   gap-[1rem]  bottom-[100px] w-auto   ">


<div className='flex flex-row  gap-1' >
<p className='text-[12px] w-auto'>

{sale}  
</p>
<span className='text-orange-500 text-[15px]'><FaFire/></span>
 



</div>


<div className='relative flex flex-row   w-[auto]  '>

<img src={ethicon} alt="" className=''/>

<p className='text-[10px] mr-[40px]'> {eth}</p>

<div className='absolute text-[7px] right-7 top-4'><p>{amountdollar}</p></div>
    
    
 </div>






</div>


</div>


         <div className=' mt-[10px]'>
             <div className='flex justify-center'>         
                    <Btn    text={"Buy Now"} style={"border-2 rounded-sm border-green-500  w-[55%] h-[5px] text-[12px]  right-[0] "} />
             </div>

         </div>






     </div>
       })}
          



          <div className='Rightcols ml-2  p-4 flex flex-col  font-serif   md:w-[750px] sm:w-[350px] w-[250px] h-auto md:max-w-[328px] max-w-[533px] rounded-xl  relative border border-2   rounded-xl  px-3 backdrop-blur-xl hover:bg-gray-500/40 scale-190 transition-all'>

<div className='flex flex-row justify-between '>
<h1 className='text-[24px] font-semibold py-2'>Top Creators</h1>
<h3>See more</h3>
</div>




<div className='grid grid-col-2 gap-4 '>

{TopCreators.map((v,i)=>{
return(

    <div key={i}  >


<div className='relative gap-2 '>

<div className='  flex flex-row justify-between py-[18px]'>

<div>
<img src={v.card1} alt="" className='w-[50px] h-[50px]   ' />
<h2 className=' absolute indent-8 top-[30px]  left-[19px]'>{v.name}</h2>
<p className='absolute indent-12  left-[11px] text-gray-500'>{v.email}</p>
</div>




<div className=''>
    <Btn text={"Follow"} style={"w-[60px] h-[10px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-opacity-20 rounded-lg shadow-md backdrop-blur-5 border border-green-400 border-opacity-30  "} />
</div>

</div>
    

</div>
</div>



)



})



}
</div>

</div>



        </div>


        <div className="Rare  hover:bg-slate-800/30 font-sans relative top-[57px] sm:w-[645px] w-[265px]   lg:none ml-[10px]  sm:h-[269px] h-[569px]  border-2 border-green-400 rounded-2xl px-11 py-11 font-medium 	bg-black ">

          <div className=" flex md:flex-row flex-col justify-between sm:items-center items-start align-middle sm:w-[485px] w-[320px]">

            <div>
              <h2 className=" text-[24px] max-w-[250.726px]  ">
                Top Collections
              </h2>
            </div>




            <div className=" r-[1px]">
              <p>Over last <span className="text-blue-500">7days</span></p>
            </div>




          </div>





          <div className="coins absolute grid sm:grid-cols-3 grid-cols-1 sm:gap-2  gap-0 w-[auto]  sm:left-[30px] left-[0px]">



            {iconsimg.map((v, i) => {


              return (

                <> 
             <div  className=" flex flex-col w-[200.726px] gap-2 hover:scale-105 transition-all" >  
                  
                  <div className="flex flex-row  p-4">
                    <div>{v.id}</div>
                    <div className="w-[25%]"><img src={v.card1} alt="" /></div>
                    <div >{v.title} </div>

                  </div>


                  <div className="relative flex flex-row mt-[-20px] gap-3 ">
                   
                    <div className="text-sm indent-[75px] mt-[-20px] text-gray-400">{v.desc}</div>
                    <div className="w-[12px] absolute top-[-16px] right-[10px]"><img src={v.cryptocoin} alt="" /></div>
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
    )
}
