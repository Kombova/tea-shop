'use client';

import { useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import ViewShoppingCart from "./view-shopping-cart";





const { default: Image } = require("next/image");

const ShoppingCart = () => {
     let[showCart,setShowCart] = useState(false);
    
  
    return(
        <div className=" overflow-visible order-3">
{/*------------------------------------------- button cart --------------------------*/}
            <button className="relative overflow-visible" onClick={()=>setShowCart(true)}>
                <Image 
                    src="/shopping-cart.svg"
                    width={40}
                    height={40}
                    alt="Logo"
                />
                <span className="absolute bottom-[-10px] left-[-10px] w-[30px] h-[30px] rounded-full text-center flex justify-center items-center text-[20px] font-[nonserat] bg-[#0E8388] text-white ">10</span>
            </button>
{/*------------------------------------------- Show Cart --------------------------*/}
        <AnimatePresence>
            {showCart && 
            <>
                <motion.div
                    className="absolute top-0 right-0 w-[90%] z-20 h-full"
                    initial={{translateX:'100%' }}
                    animate={{translateX:'0%',overflow: 'none'}}
                    exit={{translateX:'100%'}}
                    transition={{duration:0.5}}
                >
                    <ViewShoppingCart setState={setShowCart} />  
                    
                                  
                </motion.div>
                <div className="w-full h-full absolute top-0 left-0 z-10 opacity-50 bg-black"/>
            </>
              
            }
        </AnimatePresence>
        </div>
    )
}
    
export default ShoppingCart;