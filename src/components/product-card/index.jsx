import Image from "next/image";

const ProductCard = () =>{
    return(
        <div className="w-[250px] h-[350px] bg-slate-600 rounded-[10px]     max-[500px]:w-screen max-[500px]:h-[500px]">
            <div className="w-full h-[160px] max-[500px]:h-[200px] relative">
                <Image className=" object-cover"   src='/slider/slider-photo-1.jpg' fill={true}  alt='Product Card'/>
            </div>
            <h6 className="w-full h-[50px] bg-slate-300  text-[14px] p-2  uppercase  ">Очень длинное название чая чай ебанись запашний sadsaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaываывввввв ыфвфывфца уфа</h6>
            <p className="w-full h-[20px] bg-slate-400 text-[14px] p-x-2 py-1 text-center">Зелений</p>
            <div className="w-full h-[100px] bg-stone-50">

            </div>
            <p>Цена</p>
        </div>
    )
}

export default ProductCard;