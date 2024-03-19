import React from 'react'
import web333 from '../assets/web3dev.png'

export const Kazim = () => {

    return (
        <div className='practices'>

            <div className='  text-center '>

                <h1>Partnes</h1>

            </div>

            <div className='card grid gap-3 md:grid-cols-4  grid-cols-2  rounded-lg m-11'>
         
           <div className='bg-[red] '>
            
            
           <img src={web333} alt="" className='w-[220px]' />
            
            
             </div>

             <div className='bg-[green]'>
            
            
            <img src={web333} alt=""  className='w-[220px]'/>
             
             
              </div>
 
              <div className='bg-[blue] '>
            
            
            <img src={web333} alt=""  className='w-[220px]'/>
             
             
              </div>
 
              <div className='bg-[yellow]'>
            
            
            <img src={web333} alt=""  className='w-[220px] '/>
             
             
              </div>
 
   
            </div>

            <div className='text-center'>

                <h1>Kazim is here!</h1>
            </div>




        </div>
    )
}
