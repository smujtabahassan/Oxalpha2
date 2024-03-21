import React from 'react'
import Marks from "../assets/Cards/Marks.png";
import Monkey from "../assets/Cards/Monkey.png";
import etheriuemIcons from "../assets/Cards/Eth_icon.svg";
import Btn from './Btn';
import { BsThreeDots } from "react-icons/bs";
import "../Landing.css";


import Liveimg from "../assets/Cards/Liveauth.png"
import Mainimg from "../assets/Cards/Rectangle 8.png"
import daysleftimg from "../assets/Cards/3daysLeft.png"

export const TokkensCards = () => {

    const SideCard=[{
        Title:"Ebony ",
        number:"#2775",
        eth:"10.15ETH",
        ethno:"1/1",
        weight:"Highest bid 5 WEIGHT",
        }]
  

    const cardData = [
        {
            id: 1,
            image: Marks,
            heading: "basic copper  ",
            monkey: Monkey,
            monkeyId: "Monkey #009",
            amount: "1/1",
            bidHigest: "highest bid",
            bidEth: "Bid 2.93 ETH"


        },
        {
            id: 1,
            image: Marks,
            heading: "basic copper  ",
            monkey: Monkey,
            monkeyId: "Monkey #009",
            amount: "1/1",
            bidHigest: "highest bid",
            bidEth: "Bid 2.93 ETH"


        },
        {
            id: 1,
            image: Marks,
            heading: "basic copper  ",
            monkey: Monkey,
            monkeyId: "Monkey #009",
            amount: "1/1",
            bidHigest: "highest bid",
            bidEth: "Bid 2.93 ETH"


        },
        {
            id: 1,
            image: Marks,
            heading: "basic copper  ",
            monkey: Monkey,
            monkeyId: "Monkey #009",
            amount: "1/1",
            bidHigest: "highest bid",
            bidEth: "Bid 2.93 ETH"


        },
    ]


    return (
        <div className='flex w-[100%] md:flex-row flex-col md:gap-[2rem] gap-[1rem]'>

       {cardData.map(({id , image , heading , monkey , monkeyId , amount , bidHigest , bidEth} , index) =>{
         return   <div className='cards flex flex-col  relative  border md:w-[auto] h-[auto] border-2 rounded-lg gap-[0.5rem] p-2 transition-all ease-linear delay-150 md:hover:scale-105 w-[90%] mx-auto' key={index} >


         <div className='flex flex-row items-center justify-around gap-[2rem] '>

             <div className='  w-[25px] h-[20px]  mx-[2px] my-[1rem]'>
                 <img src={image} alt="marks" className='' />
             </div>

             <div className='left-[40px] top-[10px] '>
                 <h1 className='text-[12px] font-semibold'>{heading}</h1>
             </div>
             <div>
                <BsThreeDots />
             </div>

         </div>
         <div className='px-[5px]'>

             <img src={monkey} alt="etheriuemIcons" />

         </div>
         <div>
             <Btn text={"13:06:20"} style={"w-[40%] border-2 border-green-500 h-[1rem] px-[1rem] text-[12px]"} />
         </div
         
         
         
         >
         <div className='flex gap-[1rem] mx-2'>
             <h2 className='text-[14px] font-bold'>{monkeyId}</h2>
             <p className='text-[12px]'>{amount}</p>
         </div>
         <div>
             <p className='mx-2'>{bidHigest}</p>
         </div>
         <div className='flex items-end justify-between'>
             <p className='text-[9px] mx-2 '> {bidEth}</p>
             <Btn    text={"Place a Bid"} style={"border-2 border-green-500  w-[55%] h-[1rem] text-[12px] "} />

         </div>

     </div>


       
       })
       
 }
          



 {SideCard.map((v,i)=>{

return(
    
    <div key={i} className='Rightcols relative  flex   md:flex-col flex-row mt-4 justify-start  border border-2       rounded-xl  px-7 mr-3 hover:bg-gray-500/40 scale-190 transition-all '>


<div className='flex   w-auto h-auto '>
    
<div className=' flex  absolute left-1/2 -translate-x-1/2 -top-4 z-10 '><img src={Liveimg} className='w-[260px] ' alt="liveimg" /></div>
    <div className='relative'>
    <img src={Mainimg} alt="liveimg" className='w-' />
    
    <div className='flex absolute bottom-0 left-0  '>
    <img src={daysleftimg} alt="liveimg" className='w-[120px]' /></div>

    </div>
    </div>

<div className='flex flex-col font-mono  w-auto  md:mt-1 mt-14'>
    <div ><h1 className='font-extrabold'>{v.Title}{v.number} </h1>
    <p>{v.eth} {v.ethno}</p>
    <h3 className='text-green-400'>{v.weight}</h3>
    </div>

    <div className='flex justify-end py-2 mr-1 '><Btn text={"Buy Now"} style={"w-[35%] border-green-500 h-[2%] hover:scale-140 transition-all "}/></div>
    </div>
    </div>

)

})

}




        </div>







    )
}
