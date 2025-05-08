import React from "react";

const Icon = React.forwardRef(
  ({ icon: Icon, size = 5, className = "", ...props }, ref) => {
    return (
      <Icon ref={ref} size={size} className={`${className}`} {...props} />
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
