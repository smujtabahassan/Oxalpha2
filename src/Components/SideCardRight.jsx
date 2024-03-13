import React from 'react'
import Liveimg from "../assets/Cards/Liveauth.png"
import Mainimg from "../assets/Cards/Rectangle 8.png"
import daysleftimg from "../assets/Cards/3daysLeft.png"
import Btn from './Btn';
import Ellipse213 from "../assets/Coins/Ellipse_213.png";
import Ellipse214 from "../assets/Coins/Ellipse_214.png";
import Ellipse215 from "../assets/Coins/Ellipse_215.png";
import Ellipse234 from "../assets/Coins/Ellipse_234.png";
import "../Landing.css"
export const SideCardRight = () => {
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
    
  
  
  const SideCard=[{
        Title:"Ebony ",
        number:"#2775",
        eth:"10.15ETH",
        ethno:"1/1",
        weight:"Highest bid 5 WEIGHT",
        }]
  return (
    <div className='flex md:flex-col flex-row  relative mr-5  '> 



<div className='topcard ' >


{SideCard.map((v,i)=>{

return(
    
    <div key={i} className='Rightcols relative  flex   md:flex-col flex-row  justify-start  border border-2  float-end md:right-[-450px] right-[-70px] md:top-[-1280px] bottom-[-60px]   rounded-xl  px-3  ' 
    >
{/*     
    //  <div key={i} className='Rightcols relative  flex   flex-col justify-start  border border-2  right-[-450px] top-[-1280px]    rounded-xl  px-3  ' 
    //  >     */}

<div className='flex   w-[380px] h-[291px] '>
    
<div className=' flex  absolute right-[80px]  mt-[-20px] '><img src={Liveimg} className='w-[260px] h-[70px]' alt="liveimg" /></div>
    
    <img src={Mainimg} alt="liveimg" />
    
    <div className='flex absolute top-[250px]  '>
    <img src={daysleftimg} alt="liveimg" className='w-[220px] h-[45px] ' /></div>

    </div>

<div className='flex flex-col font-mono  w-auto  md:mt-2 mt-14'>
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

{/* <div className='p-4 grid grid-cols-2   w-auto h-auto border-2 max-w-[5033px] rounded-xl  relative float-end border border-2   rounded-xl right-[-960px] top-[-680px] px-3 overflow-x-auto'>


{TopCreators.map((v,i)=>{
return(

    <div key={i}>

<div>
<h1>Top Creators</h1>

<div><img src={v.card1} alt="" className='w-[20%] h-[40%]' /></div>
<h2>{v.name}</h2>
<p>{v.email}</p>

    
    </div>

    <div >
        <h1>See More</h1>

<p><Btn text={"see more"} style={"w-[50%] h-[20%]"}/></p>

</div>



    </div>



)



})



}


</div>  */}




</div>

{/* <div className='p-4 grid grid-row-4   w-auto h-auto border-2 max-w-[5033px] rounded-xl  relative float-end border border-2   rounded-xl right-[-960px] top-[-680px] px-3 overflow-x-auto'>


{TopCreators.map((v,i)=>{
return(

    <div key={i}>

<div>
<h1>Top Creators</h1>

<div><img src={v.card1} alt="" className='w-[20%] h-[40%]' /></div>
<h2>{v.name}</h2>
<p>{v.email}</p>

    
    </div>

    <div >
        <h1>See More</h1>

<p><Btn text={"see more"} style={"w-[50%] h-[20%]"}/></p>

</div>



    </div>



)



})



}


</div> */}

<div className='Rightcols  p-4 flex flex-col  font-serif  md:w-auto w-[800px] h-auto md:max-w-[433px] max-w-[533px] rounded-xl  relative float-end border border-2   rounded-xl md:right-[-1170px] right-[400px] md:top-[-1180px] top-[390px] px-3 backdrop-blur-xl'>

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
    <Btn text={"Follow"} style={"w-[160px] h-[10px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-opacity-20 rounded-lg shadow-md backdrop-blur-5 border border-green-400 border-opacity-30  "} />
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
  )
}
