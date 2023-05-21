import Image from "next/image";
import Link from "next/link";


const Logo = ({size}) =>{
    return(
        <Link href={'/'} className=''>
            <Image
            src="/logo.svg"
            width={size}
            height={size}
            alt="Logo"
            className=" hover:scale-90"
            />
        </Link> 
    )
}
export default Logo;