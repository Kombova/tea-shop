import Image from "next/image";

import Logo from "../Logo";
import Nav from "./nav";
import ShoppingCart from "./shopping-cart";

const Header = () =>{
    return(
        <div  className="header h-[150px] w-full  flex justify-around items-center shadow-md  mb-[20px]  overflow-hidden             max-[850px]:h-[80px] max-[850px]:px-[10px]       max-[850px]:justify-between" >  
        
            <Image className=" max-[800px]:hidden" src='/search.svg' alt="Search" width={30} height={30}/>
            <Nav/>
            <div className=" mx-auto min-[850px]:hidden"><Logo size={80}/></div>
            <ShoppingCart/>
        </div>
    )
}

export default Header;