import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "text-sm font-medium transition-colors hover:text-blue-600 whitespace-nowrap",
        isActive && "text-blue-600",
        className
      )
    }
  >
    {label}
  </NavLink>
);

export default NavItem;