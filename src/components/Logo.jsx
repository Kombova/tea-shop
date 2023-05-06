import Image from "next/image";
import Link from "next/link";


const Logo = () =>{
    return(
        <Link href={'/'} className=' max-[800px]:order-3'>
            <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="Logo"
            className=" hover:scale-90"
            />
        </Link> 
    )
}
export default Logo;