import Image from "next/image";
import ProductCenterButtons from "../product-control-buttons";
const ProductCard = () =>{
    return(
        <div className="w-[250px] h-[370px] bg-slate-600 bg-opacity-30 rounded-[10px] overflow-hidden     max-[500px]:w-screen max-[500px]:h-[500px]">
            <div className="w-full h-[160px] max-[500px]:h-[200px] relative">
                <Image className=" object-cover"   src='/slider/slider-photo-1.jpg' fill={true}  alt='Product Card'/>
            </div>
            <div className="w-full h-full p-1 ">
                <h6 className="w-full h-[40px]  text-[14px] my-[5px]   uppercase text-center  ">Очень длинное название чая чай ебанись запашний sadsaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaываывввввв ыфвфывфца уфа</h6>
                <p className="w-full h-[20px] py-[2px] bg-slate-400 text-[14px] text-center">Зелений</p>
                <div className="w-full mt-[10px]">
                    <ProductCenterButtons/>
                </div>
                
            </div>
            
        </div>
    )
}

export default ProductCard;