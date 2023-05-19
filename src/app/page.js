
import MainSlider from "@/components/main-slider/Main-slider";
import BestSellers from "@/components/bestsellers";
export default function Home() {
 
  let arrImg =['/slider/slider-photo-1.jpg','/slider/slider-photo-2.jpg','/slider/slider-photo-3.jpg'];
                    
  return (
    <>
     <MainSlider array={arrImg}/>
     <BestSellers />
    </>
  )
}
