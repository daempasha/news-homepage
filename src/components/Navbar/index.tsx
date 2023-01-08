import Logo from "@assets/logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import Links from "./Links";

const Navbar = () => {
    return <div className="flex items-baseline justify-between my-20 ">
        <img src={Logo} alt="Logo" />


        <Links />
        <HamburgerMenu />
    </div>
}

export default Navbar;