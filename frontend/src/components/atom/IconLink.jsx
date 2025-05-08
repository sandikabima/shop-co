import { Link } from "react-router-dom";
import Icon from "./Icon";

const IconLink = ({ to, icon, size = 5, className }) => {
  return (
    <Link to={to} className={className}>
      <Icon icon={icon} size={size} />
    </Link>
  );
};

export default IconLink;
