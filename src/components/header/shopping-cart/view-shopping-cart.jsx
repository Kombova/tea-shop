import Image from "next/image";
const ViewShoppingCart = ({setState,stateNow}) =>{
    return(
        <div className="absolute w-[100%] h-full bg-slate-500 bg-opacity-90">
            <button className=" cancel_button w-[20px] h-[20px] absolute left-[20px] top-[20px]" onClick={()=>setState(!stateNow)}>
                <Image
                    src='/arrow-right.svg'
                    alt="Cancel"
                    width={20}
                    height={20}
                />
            </button>  
        </div>
    )
    
}
export default ViewShoppingCart;