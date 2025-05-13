import SidebarMenu from "../molecules/SidebarMenu";
import {
    Command,
    CommandEmpty,
    CommandList,
    CommandSeparator,
} from "../ui/command";

const AdminSidebar = () => {
    return (
        <Command>
            <CommandList>
                <CommandEmpty>No result Found</CommandEmpty>
                <SidebarMenu />
                <CommandSeparator />
            </CommandList>
        </Command>
    );
};

export default AdminSidebar;
