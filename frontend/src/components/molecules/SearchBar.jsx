import { Search } from "lucide-react";
import Icon from "../atom/Icon";
import Input from "../atom/Input";

const SearchBar = () => {
  return <div className="relative w-full">
     <Icon icon={Search} size={20} className="text-[#89868D] absolute left-3 top-1/2 transform -translate-y-1/2"/>
     <Input placeholder={"Search for products..."} className="pl-10"/>
  </div>;
};

export default SearchBar;
