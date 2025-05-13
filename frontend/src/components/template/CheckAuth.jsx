import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const CheckAuth = ({ isAuthenticated, user, children }) => {

    const { isLoading } = useSelector((state) => state.auth)
    const location = useLocation();

    if (isLoading) {
        return <div>Loading ...</div>
      }

    if (location.pathname === "/") {
        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        } else {
            if (user?.role === "admin") {
                return <Navigate to="/admin/dashboard" />;
            } else {
                return <Navigate to="/customer/dashboard" />;
            }
        }
    }

    if (
        !isAuthenticated &&
        !(
            location.pathname.includes("/login") ||
            location.pathname.includes("/register")
        )
    ) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (
        isAuthenticated &&
        (location.pathname.includes("/login") ||
            location.pathname.includes("/register"))
    ) {
        if (user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />;
        } else {
            return <Navigate to="/customer/dashboard" />;
        }
    }

    if (
        isAuthenticated &&
        user?.role !== "admin" &&
        location.pathname.includes("admin")
    ) {
        return <Navigate to="/unauth-page" />;
    }

    if (
        isAuthenticated &&
        user?.role === "admin" &&
        location.pathname.includes("customer")
    ) {
        return <Navigate to="/admin/dashboard" />;
    }

    return <div>{children}</div>;
};

export default CheckAuth;
