import {
    BookOpenText,
    LayoutDashboard,
    ShoppingCart,
    Users,
    UserRoundCog,
    BookText,
    LogOut
  } from "lucide-react";
  
  import { CommandGroup, CommandItem } from "../ui/command";
  import { menu } from "@/config";
import SidebarLink from "../atom/SidebarLink";
  
  
  const SidebarMenu = () => {
    const iconMapping = {
      LayoutDashboard,
      BookOpenText,
      Users,
      ShoppingCart,
      UserRoundCog,
      BookText,
    };
  
    return (
      <>
        {menu.map((group) => (
          <CommandGroup key={group.name} heading={group.name}>
            {group.subMenu.map((item) => {
              const Icon = iconMapping[item.icon];
              return (
                <CommandItem key={item.label}>
                  <SidebarLink icon={Icon} label={item.label} to={item.to} />
                </CommandItem>
              );
            })}
          </CommandGroup>
          
        ))}
      </>
    );
  };
  
  export default SidebarMenu;
  