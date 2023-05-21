import Link from "next/link";
import { useState } from "react";

const DesktopNav = ({children}) =>{
    const[pageNow,setPageNow]=useState('home');
    const selectMotion = () =>{

    }
    return(
        <ul className="flex w-[700px] relative   items-center text-center  justify-between font-semibold text-[24px]  overflow-hidden ">
            
        
            <li className="w-[120px]  hover:scale-105 hover:opacity-[0.8] relative overflow-visible" value={'home'}><Link href={'/'} onClick={(e)=>selectMotion(e)}>Головна</Link>
            <span className="w-[120px] h-1  border-2 border-solid border-[#0E8388] absolute left-[0px] bottom-[-8px]" />
            </li>
            <li className="  hover:scale-105 hover:opacity-[0.8] "><Link href={'/shop'}>Магазин</Link></li>
            <li className="  hover:scale-105 hover:opacity-[0.8] ">{children}</li>
            <li className="  hover:scale-105 hover:opacity-[0.8]"><Link href={'/about'}>О нас</Link></li>
            <li className="  hover:scale-105 hover:opacity-[0.8]  "><Link href={'/delivery'}>Доставка</Link></li>
        </ul>
    )
}
export default DesktopNav;