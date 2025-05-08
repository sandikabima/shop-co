import { CircleUser, Search, ShoppingCart } from "lucide-react"
import Icon from "../atom/Icon"
import Logo from "../atom/Logo"
import NavbarLinks from "../molecules/NavbarLinks"
import SearchBar from "../molecules/SearchBar"
import IconLink from "../atom/IconLink"
import MobileMenuDrawer from "../molecules/MobileMenuDrawer"


const Navbar = () => {
    return (
        <div className="h-16 md:h-24 shadow-md px-5 md:px-20 sticky top-0 z-50 bg-[#fff]">
            <div className="hidden md:flex justify-between items-center h-full gap-10">
                <Logo />
                <NavbarLinks />
                <SearchBar />
                <div className="flex gap-2">
                    <Icon icon={ShoppingCart} size={24} />
                    <IconLink to={"/login"} icon={CircleUser} size={24} />
                </div>
            </div>

            <div className="flex md:hidden justify-between items-center h-full">
                <div className="flex gap-2 items-center">
                    <MobileMenuDrawer />
                    <Logo />
                </div>
                <div className="flex gap-2 items-center">
                    <Icon icon={Search} size={24} />
                    <Icon icon={ShoppingCart} size={24} />
                    <Icon icon={CircleUser} size={24} />
                </div>
            </div>
        </div>
    )
}

export default Navbar