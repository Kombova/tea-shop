import ProductCard from "../product-card"
const BestSellers = () =>{
    return(
        <div className="w-full min-h-[600px] mt-[20px] rounded-[10px]  bg-hunter-green bg-opacity-30">
            <h1 className="w-full mt-[20px] text-center text-[30px] overflow-hidden ">Best Sellers</h1>
            <ul className="flex flex-wrap justify-center gap-5 mt-[20px] p-[10px] max-[500px]:p-0">
                <li>
                    <ProductCard/>
                </li>
                <li>
                    <ProductCard/>
                </li>
                <li>
                    <ProductCard/>
                </li>
                <li>
                    <ProductCard/>
                </li>
                <li>
                    <ProductCard/>
                </li>

            </ul>
        </div>
        
    )
}

export default BestSellers;