'use client'
import Image from "next/image";
import { buttonControle } from "@/logic/buttonControle";
const SmallControlButtons = () =>{
    return(
        <div className="w-[240px]  mx-auto">
            <div className="relative">
                <div className="w-full h-[50px] flex justify-between items-center  bg-slate-500 border-2 border-solid border-white rounded-[10px]">
                    <button className="w-[70px] h-full border-r-2 border-solid  rounded-l-[10px] ">-</button>
                        <p className="">1<span> /шт</span></p>
                    <button className="w-[70px] h-full border-l-2 border-solid  rounded-r-[10px] ">+</button>
                </div>    
                <div className="w-full mt-[10px] flex items-center justify-around rounded-[10px] bg-slate-800">
                <p className=" w-fit bg-slate-50 p-[4px] rounded-[10px]">100/грн</p>
                    <button className="relative" >
                        <Image src="/shopping-cart.svg" width={40} height={40} alt="Logo" />
                        <span className="absolute bottom-0 right-0 w-[20px]  h-[20px] rounded-[100%] text-center flex justify-center items-center text-[12px] font-bold bg-yellow-500">+</span>
                    </button>
                </div>         
            </div>
        </div>
    )
}

export default SmallControlButtons;