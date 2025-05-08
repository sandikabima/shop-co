import React from "react";

const Input = React.forwardRef(
  ({ type = "text", className = "", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`px-4 py-2 border rounded-full w-full focus:outline-none bg-[#F0F0F0] ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
