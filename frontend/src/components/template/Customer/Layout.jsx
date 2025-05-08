import PromoBar from "@/components/atom/PromoBar"
import Navbar from "@/components/organisms/Navbar"
import { Outlet } from "react-router-dom"


const CustomerLayout = () => {
    return (
        <>
            <PromoBar />
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default CustomerLayout