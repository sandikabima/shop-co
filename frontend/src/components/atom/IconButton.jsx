import { cn } from "@/lib/utils";
import Icon from "./Icon";
import React from "react";

const IconButton = React.forwardRef(
  ({ icon, size = 5, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("p-2 rounded-md hover:bg-gray-100 transition", className)}
        {...props}
      >
        <Icon icon={icon} size={size} />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
