import { LogOut, Search, UserCog } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

const UserDropdown = ({ open, onOpenChange, handleLogout }) => {
    return (
        <DropdownMenu open={open} onOpenChange={onOpenChange}>
            <DropdownMenuTrigger className="outline-none mt-10"></DropdownMenuTrigger>
            <DropdownMenuContent className={"mr-2 z-50"}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <UserCog /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogOut />
                    <Link to="/" onClick={handleLogout}>
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
