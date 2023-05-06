import Logo from "../Logo";
import Nav from "./nav";
import ShoppingCart from "./shopping-cart";
const Header = () =>{
    return(
        <div className=" flex justify-between items-center px-2  h-16 bg-hunter-green rounded-b-[10px] " >
            <Logo/>
            <Nav/>
            <ShoppingCart/>
        </div>
    )
}

export default Header;