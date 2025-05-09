import Divider from "../atom/Devider"
import Logo from "../atom/Logo"
import Paragraph from "../atom/Paragraph"
import FooterSection from "../molecules/FooterSection"
import SosialIcon from "../molecules/SosialIcon"
import NewsLatter from "./NewsLatter"


const Footer = () => {
    return (
        <footer className="w-full bg-[#F0F0F0] px-10 md:px-20 mt-30 md:pt-30 pt-55 relative">
            <NewsLatter className={"absolute md:-top-20 md:right-20 md:left-20 -top-20 left-5 right-5"} />
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col gap-4 max-w-md">
                    <Logo />
                    <Paragraph className="text-gray-700 font-light">We have clothes that suit your style and which you're proud to wear. From women to men.</Paragraph>
                    <SosialIcon />
                </div>
                <div className="grid gap-10 grid-cols-2 md:flex">
                    <FooterSection
                        title="COMPANY"
                        links={[
                            { label: "About", href: "/" },
                            { label: "Features", href: "/" },
                            { label: "Works", href: "/" },
                            { label: "Career", href: "/" },
                        ]}
                    />
                    <FooterSection
                        title="HELP"
                        links={[
                            { label: "Customer Support", href: "/" },
                            { label: "Delivery Details", href: "/" },
                            { label: "Terms & Conditions", href: "/" },
                            { label: "Privacy Policy", href: "/" },
                        ]}
                    />

                    <FooterSection
                        title="FAQ"
                        links={[
                            { label: "Account", href: "/" },
                            { label: "Manage Deliveries", href: "/" },
                            { label: "Orders", href: "/" },
                            { label: "Payments", href: "/" },
                        ]}
                    />

                    <FooterSection
                        title="RESOURCES"
                        links={[
                            { label: "Free eBooks", href: "/" },
                            { label: "Development Tutorials", href: "/" },
                            { label: "How to - Blog", href: "/" },
                            { label: "Youtube Playlist", href: "/" },
                        ]}
                    />
                </div>

            </div>
            <Divider />
            <div className="flex md:justify-between items-center justify-center p-2">
                <Paragraph className="text-gray-700 font-light">
                    Shop.co &copy; 2000–2023. All Rights Reserved
                </Paragraph>
            </div>
        </footer>
    )
}

export default Footer