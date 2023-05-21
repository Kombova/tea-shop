import Link from "next/link";

const DesktopNav = ({children}) =>{
    return(
        <ul className="flex w-[700px]  items-center  justify-between font-semibold text-[24px]  overflow-hidden">
            <li className="  hover:scale-105 hover:opacity-[0.8] "><Link href={'/'}>Головна</Link></li>
            <li className="  hover:scale-105 hover:opacity-[0.8] "><Link href={'/shop'}>Магазин</Link></li>
            <li className="  hover:scale-105 hover:opacity-[0.8] ">{children}</li>
            <li className="  hover:scale-105 hover:opacity-[0.8]"><Link href={'/about'}>О нас</Link></li>
            <li className="  hover:scale-105 hover:opacity-[0.8]  "><Link href={'/delivery'}>Доставка</Link></li>
        </ul>
    )
}
export default DesktopNav;