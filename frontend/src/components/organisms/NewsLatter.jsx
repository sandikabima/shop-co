import { Mail } from "lucide-react"
import Button from "../atom/Button"
import Heading from "../atom/Heading"
import InputIcon from "../atom/InputIcon"


const NewsLatter = ({ className }) => {
    return (
        <div className={`bg-[#000] rounded-lg flex flex-col md:flex-row items-center justify-between p-10 gap-6 ${className}`}>
            <Heading level={2} className="text-white md:max-w-md">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </Heading>

            <div className="flex flex-col gap-4 w-full md:w-[40%]">
                <InputIcon
                    icon={Mail}
                    placeholder="Enter your email address"
                    inputClassName="bg-white text-black"
                />
                <Button variant="primary" size="md" className="rounded-full">
                    Subscribe to Newsletter
                </Button>
            </div>
        </div>
    )
}

export default NewsLatter