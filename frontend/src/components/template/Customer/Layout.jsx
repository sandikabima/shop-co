import PromoBar from "@/components/atom/PromoBar"
import { Outlet } from "react-router-dom"


const CustomerLayout = () => {
    return (
        <>
            <PromoBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default CustomerLayout