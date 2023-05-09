
import MainSlider from "@/components/main-slider/Main-slider";
import Request from "@/components/request";
export default function Home() {
 
  let arrImg =['/slider/slider-photo-1.jpg','/slider/slider-photo-2.jpg','/slider/slider-photo-3.jpg'];
  
                    
  return (
    <main className="">
      <MainSlider array={arrImg}/>
      <Request/>
      
    </main>
  )
}
