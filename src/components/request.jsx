'use client'
import { useEffect, useState } from "react";
const Request = ()=>{
    const[state,setState]=useState('Приветик');
    useEffect(()=>{
         getText()
    },[])
    
    let text = 'sd';
    
    async function getText() {
        const response = await fetch('https://tea-shop-steel.vercel.app/api/text');
        const data = await response.json();
        // console.log(data[0]._id)
        
        setState(data[0]._id)
            
    }
 
  return(
    <>
         <p className="text-[30px] text-[red]">{state}</p>
    
    </>
  )
}
export default Request;