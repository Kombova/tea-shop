'use client';

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
let i = 0;
const MainSlider = () =>{ 
    let arrImg =['/slider/slider-photo-1.jpg','/slider/slider-photo-2.jpg','/slider/slider-photo-3.jpg'];
    const[imgNow,setImgNow]=useState(arrImg[i]);
    const[stateInterval,setStateInterval]=useState(true);

    useEffect(()=>{
        let intervalId = null;
        if(stateInterval){
            intervalId = setInterval(() => {
            
                if(i+1 === arrImg.length){
                    i = 0;
                    setImgNow(arrImg[i])
                  }else{
                    i++
                    setImgNow(arrImg[i])
                  }
               
              }, 3000);
        }
        
        return () => clearInterval(intervalId);
     },[stateInterval])
    
    function setImg(e){
        setStateInterval(false)
        setTimeout(() => {
            setStateInterval(true)
        }, 3000);
        let diraction = e.target.value;
       if(diraction === 'right' && i+1 < arrImg.length){
            i++
            setImgNow(arrImg[i]);
       }else if(diraction === 'right' && i+1 === arrImg.length){
            i=0;
            setImgNow(arrImg[i]);
        }else if(diraction === 'left' && i != 0){
            --i
            setImgNow(arrImg[i]);
        }else if(diraction === 'left' && i === 0){
            i= arrImg.length - 1;
            setImgNow(arrImg[i]);
        }
        
    }

    
    return(
        <div className=" w-full h-[500px] max-[800px]:h-[300px] relative overflow-hidden flex">
            <AnimatePresence   >
                <motion.div
                    className="w-full h-full absolute"
                    key={imgNow}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{
                       
                        opacity: { duration: 0.5 }
                    }} 
                >
                    <Image
                        src={imgNow}
                        alt='Slider Photo'
                        fill={true}
                        sizes="(max-width: 800px) 300px, 1280px"
                        className='object-cover' 
                        priority
                    />

                </motion.div>
               
            </AnimatePresence>
                    <label htmlFor="sliderLeft">
                        <Image
                            src={'/arrow-right.svg'}
                            alt='Slider Control'
                            width={50}
                            height={50}
                            className='object-cover rotate-180 absolute left-0 bottom-[50%] translate-y-[50%] cursor-pointer' 
                            priority    
                        />
                    </label>
                    <label htmlFor="sliderRight">
                        <Image
                            src={'/arrow-right.svg'}
                            alt='Slider Control'
                            width={50}
                            height={50}
                            className='object-cover z-20 absolute right-0 bottom-[50%] translate-y-[50%] cursor-pointer ' 
                            priority
                           
                            
                        />
                    </label>
                        <button id='sliderLeft' className="hidden" value={'left'} onClick={(e)=>setImg(e)}/>
                        <button id='sliderRight' className=" hidden" value={'right'} onClick={(e)=>setImg(e)}/>
                    
        </div>
    )
}
export default MainSlider;