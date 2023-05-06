'use client';

import DesktopNav from "./Desktop-nav";
import PhoneNav from "./Phone-nav";

const Nav = () =>{

    if(typeof window !== 'undefined' && window.innerWidth >= 800){
        return(
            <nav>
                <DesktopNav/>
            </nav> 
        )
        
    }else{
        return(
            <nav className="order-1">
                <PhoneNav/>
            </nav>
        )
    }
   
};
export default Nav;