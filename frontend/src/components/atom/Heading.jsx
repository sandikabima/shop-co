const Heading = ({ level = 1, children, className = "" }) => {
    const Tag = `h${level}`;
    return (
        <Tag className={`font-bold text-[#000] ${headingSize(level)}`}>{children}</Tag>
    )
}

const headingSize = (level) => {
    switch (level) {
        case 1:
            return "text-4xl md:text-5xl";
        case 2:
            return "text-3xl md:text-4xl";
        case 3:
            return "text-2xl md:text-3xl";
        default:
            return "text-sm md:text-lg";
    }
}

export default Heading