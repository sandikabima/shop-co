import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import IconButton from "../atom/IconButton";

const MobileMenuDrawer = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IconButton icon={Menu} size={24}/>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <div className="p-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuDrawer;
