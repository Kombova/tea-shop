import Link from "next/link";
const DesktopNav = () =>{
    return(
        <ul className="flex w-[400px] h-[20px] text-[white] justify-between overflow-hidden">
            <li className="  hover:scale-105 hover:opacity-[0.8] "><Link href={'/'}>Головна</Link></li>
            <li className="  hover:scale-105 hover:opacity-[0.8] ">Магазин</li>
            <li className="  hover:scale-105 hover:opacity-[0.8]"><Link href={'/about'}>Про нас</Link></li>
            <li className="  hover:scale-105 hover:opacity-[0.8] ">Доставка</li>
        </ul>
    )
}
export default DesktopNav;