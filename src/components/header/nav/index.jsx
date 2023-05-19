'use client';

import { useEffect, useState } from "react";
import DesktopNav from "./Desktop-nav";
import PhoneNav from "./Phone-nav";

const Nav = () =>{
    const[navScreen,setNavScreen]= useState(<PhoneNav/>);
    useEffect(()=>{
        if(typeof window !== 'undefined' && window.innerWidth >= 800){
                   setNavScreen(<DesktopNav/>)    
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