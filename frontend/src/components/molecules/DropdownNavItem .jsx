import { ChevronDown } from "lucide-react";
import Icon from "../atom/Icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { NavLink } from "react-router-dom";

const DropdownNavItem = ({ label, items }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-blue-600">
        {label}
        <Icon icon={ChevronDown} size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <NavLink to={item.to}>{item.label}</NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavItem;
