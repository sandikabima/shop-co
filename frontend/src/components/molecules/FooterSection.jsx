import { Link } from "react-router-dom"
import Heading from "../atom/Heading"

const FooterSection = ({ title, links }) => {
    return (
        <div className="flex flex-col gap-3">
            <Heading level className="font-semibold">{title}</Heading>
            <ul className="text-gray-700 font-light space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.href} className="hover:underline">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterSection