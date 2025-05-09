import PromoBar from "@/components/atom/PromoBar"
import Footer from "@/components/organisms/Footer"
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
            <Footer />
        </>
    )
}

export default CustomerLayout