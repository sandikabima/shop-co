import { Link } from "react-router-dom"
import Heading from "../atom/Heading"
import Paragraph from "../atom/Paragraph"

const AuthCard = ({ heading, text, to, link, children }) => {
    return (
        <div className="mx-auto w-full max-w-md space-y-6 bg-white px-4 py-2 rounded-lg">
            <div className="text-center">
                <Heading level={3}>{heading}</Heading>
                <Paragraph>{text}<Link to={to} className="ml-2 font-medium hover:underline">{link}</Link></Paragraph>
            </div>
            {children}
        </div>
    )
}

export default AuthCard