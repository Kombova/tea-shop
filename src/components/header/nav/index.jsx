'use client';

import { useEffect, useState } from "react";
import DesktopNav from "./Desktop-nav";
import PhoneNav from "./Phone-nav";
import Logo from "@/components/Logo";

const Nav = () =>{
    const[navScreen,setNavScreen]= useState(<PhoneNav/>);
    useEffect(()=>{
        if(typeof window !== 'undefined' && window.innerWidth >= 850){
                   setNavScreen(<DesktopNav ><Logo size={130}/></DesktopNav>)    
        }else{
            setNavScreen(<PhoneNav/>) 
        }
    },[])
    return(
        <nav>
            {navScreen}
        </nav>
    )
};
export default Nav;