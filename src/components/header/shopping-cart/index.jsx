'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ViewShoppingCart from "./view-shopping-cart";
const { default: Image } = require("next/image");

const ShoppingCart = () => {
    const[showCart,setShowCart] = useState(false);
    return(
        <div className=" order-3">
{/*------------------------------------------- button cart --------------------------*/}
            <button className="relative" onClick={()=>setShowCart(!showCart)}>
                <Image
                    
                    src="/shopping-cart.svg"
                    width={50}
                    height={50}
                    alt="Logo"
                />
                <span className="absolute bottom-0 right-0 w-[20px] h-[20px] rounded-[100%] text-center py-[3px] text-[12px] font-bold bg-yellow-500">5</span>
            </button>
{/*------------------------------------------- Show Cart --------------------------*/}
        <AnimatePresence>
            {showCart && 
            <>
                <motion.div
                    className="absolute top-0 right-0 w-[90%] z-10 h-full"
                    initial={{translateX:'100%' }}
                    animate={{translateX:'0%',overflow: 'none'}}
                    exit={{translateX:'100%'}}
                    transition={{duration:0.5}}
                >
                    <ViewShoppingCart stateNow={showCart} setState={setShowCart}/>  
                                  
                </motion.div>
                <div className="w-full h-full absolute top-0 left-0 z-0 opacity-50 bg-black"/>
            </>
              
            }
        </AnimatePresence>
        </div>
    )
}
export default ShoppingCart;