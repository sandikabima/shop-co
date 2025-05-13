import IconButton from "@/components/atom/IconButton"
import UserDropdown from "@/components/molecules/user-dropdown"
import AdminSidebar from "@/components/organisms/Sidebar"
import { logout } from "@/store/auth/authThunk"
import { CircleUser } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"

const AdminLayout = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
            .unwrap()
            .then((data) => handleToast.success(data.message))
            .catch((error) => handleToast.error(handleError(error)))
    }

    return (
        <section className="flex h-screen">
            <div className="hidden md:block md:w-1/5 p-4">
                <AdminSidebar />
            </div>
            <div className="w-full md:w-4/5 bg-[#E7E7F4] flex justify-between p-5">
                <div></div>
                <div>
                    <IconButton icon={CircleUser} size={24} className="cursor-pointer" onClick={() => setIsDropDownOpen(prev => !prev)} />
                    <UserDropdown open={isDropDownOpen} onOpenChange={setIsDropDownOpen} handleLogout={handleLogout} />
                </div>
            </div>
        </section>
    )
}

export default AdminLayout