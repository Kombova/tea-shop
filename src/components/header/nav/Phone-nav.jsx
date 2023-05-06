
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";

const PhoneNav = () =>{
    const[viewNav,setViewNav]=useState(false);
    
    function clickOnButton(){
            setViewNav(!viewNav) 
            
    }
    return(
        <>
            <div className="burger_nav w-[50px] h-[50px] border-[2px] border-[white] border-solid rounded-[10px] flex justify-center items-center py-[10px] flex-wrap"  onClick={()=>clickOnButton()}>
                    <span className="w-[80%] h-[2px] block bg-slate-200"></span>
                    <span className="w-[80%] h-[2px] block bg-slate-200"></span>
                    <span className="w-[80%] h-[2px] block bg-slate-200"></span>
                </div>

            
                
                <AnimatePresence>
                    {
                        viewNav &&
                            <>
                                <motion.ul 
                                    className={` phone_nav w-[90%] h-full absolute z-10 left-0 top-0 p-[30px] pt-[60px] bg-slate-500 bg-opacity-90 text-[white] text-[25px] flex flex-col gap-[20px]`}
                                    initial={{translateX:'-100%' }}
                                    animate={{translateX:'0%',overflow: 'none'}}
                                    exit={{translateX:'-100%'}}
                                    transition={{duration:0.5}}
                                    >
                                    <button className=" cancel_button w-[20px] h-[20px] absolute right-[20px] top-[20px]" onClick={()=>clickOnButton()}>
                                        <Image
                                            src='/cancel.svg'
                                            alt="Cancel"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                    <li className="  hover:scale-105 hover:opacity-[0.8] border-b-2 border-solid pb-2 "><Link href={'/'}>Головна</Link></li>
                                    <li className="  hover:scale-105 hover:opacity-[0.8] border-b-2 border-solid pb-2">Магазин</li>
                                    <li className="  hover:scale-105 hover:opacity-[0.8] border-b-2 border-solid pb-2"><Link href={'/about'}>Про нас</Link></li>
                                    <li className="  hover:scale-105 hover:opacity-[0.8] border-b-2 border-solid pb-2">Доставка</li>               
                                </motion.ul>
                                <div className='w-full h-full absolute top-0 left-0 z-0 opacity-50 bg-black'/>
                            </>
                        
                    }    
                </AnimatePresence>
                
            
            
        </>
        
    )
}

export default PhoneNav;