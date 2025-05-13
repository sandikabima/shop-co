import { CircleUser, Search, ShoppingCart } from "lucide-react"
import Icon from "../atom/Icon"
import Logo from "../atom/Logo"
import NavbarLinks from "../molecules/NavbarLinks"
import SearchBar from "../molecules/SearchBar"
import MobileMenuDrawer from "../molecules/MobileMenuDrawer"
import IconButton from "../atom/IconButton"
import { useState } from "react"
import UserDropdown from "../molecules/user-dropdown"
import { useDispatch } from "react-redux"
import { logout } from "@/store/auth/authThunk"
import { handleToast } from "@/shared/lib/handle-toast"
import { handleError } from "@/shared/lib/handle-error"

const Navbar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
            .unwrap()
            .then((data) => handleToast.success(data.message))
            .catch((error) => handleToast.error(handleError(error)))
    }

    return (
        <div className="h-16 md:h-24 shadow-md px-5 md:px-20 sticky top-0 z-50 bg-[#fff] border-2">
            <div className="hidden md:flex justify-between items-center h-full gap-10">
                <Logo />
                <NavbarLinks />
                <SearchBar />
                <div className="flex gap-2 items-center">
                    <Icon icon={ShoppingCart} size={24} />
                    <IconButton icon={CircleUser} size={24} className="cursor-pointer" onClick={() => setIsDropDownOpen(prev => !prev)} />
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
                    <IconButton icon={CircleUser} size={24} className="cursor-pointer" onClick={() => setIsDropDownOpen(prev => !prev)} />
                </div>
            </div>
            <div className="absolute md:top-7 md:right-20 top-4 right-5">
                <UserDropdown open={isDropDownOpen} onOpenChange={setIsDropDownOpen} handleLogout={handleLogout}/>
            </div>
        </div>
    )
}

export default Navbar