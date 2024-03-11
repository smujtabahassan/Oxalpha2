import React from 'react'
import Marks from "../assets/Cards/Marks.png";
import Monkey from "../assets/Cards/Monkey.png";
import etheriuemIcons from "../assets/Cards/eth_icon.svg";
import Btn from './Btn';
import { BsThreeDots } from "react-icons/bs";
import "../Landing.css";

export const TokkensCards = () => {
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
const TrendingGifs=[


    {
id:2,
img:Monkey,
image:Marks,
name:"Moonfall",
email:"By @JSmith",
sale:"on sale",
ethicon:etheriuemIcons,
eth:"4.89 ETH",
amountdollar:"($ 654,874.86)"

    },

    {
        id:2,
        img:Monkey,
        image:Marks,
        name:"Moonfall",
        email:"By @JSmith",
        sale:"on sale",
        ethicon:etheriuemIcons,
        eth:"4.89 ETH",
        amountdollar:"($ 654,874.86)"
        
            },
            {
                id:2,
                img:Monkey,
                image:Marks,
                name:"Moonfall",
                email:"By @JSmith",
                sale:"on sale",
                ethicon:etheriuemIcons,
                eth:"4.89 ETH",
                amountdollar:"($ 654,874.86)"
                
                    },
                    {
                        id:2,
                        img:Monkey,
                        image:Marks,
                        name:"Moonfall",
                        email:"By @JSmith",
                        sale:"on sale",
                        ethicon:etheriuemIcons,
                        eth:"4.89 ETH",
                        amountdollar:"($ 654,874.86)"
                        
                            },
                                                


]


    return (
        <div className='flex w-[100%] md:flex-row flex-col md:gap-[2rem] gap-[1rem]'>

       {cardData.map(({id , image , heading , monkey , monkeyId , amount , bidHigest , bidEth} , index) =>{
         return    <div className='cards flex flex-col  relative  border md:w-[auto] h-[auto] border-2 rounded-lg gap-[0.5rem] p-2 transition-all ease-linear delay-150 md:hover:scale-105 w-[90%] mx-auto' key={index} >


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
       })}
          







        </div>
    )
}
