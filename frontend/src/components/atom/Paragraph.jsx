const Paragraph = ({ children, className = "" }) => {
    return (
        <p className={`text-base md:text-lg text-gray-700 ${className}`}>{children}</p>
    )
}

export default Paragraph