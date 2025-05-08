
const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
    return (
        <button className={`font-medium transition ${buttonVariants[variant]} ${buttonSize[size]} ${className}`}>{children}</button>
    )
}

const buttonVariants = {
    primary: "bg-white text-gray-800 hover:bg-gray-100",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    neutral: "bg-neutral-900 text-white hover:bg-neutral-700"
}

const buttonSize = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
}

export default Button