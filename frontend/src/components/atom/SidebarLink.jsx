import { Link } from "react-router-dom";

const SidebarLink = ({ icon: Icon, label, to }) => {
  return (
    <Link to={to} className="flex items-center gap-2">
      <Icon className="w-4 h-4" />
      {label}
    </Link>
  );
};

export default SidebarLink;
