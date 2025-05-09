import Button from "../atom/Button"
import Heading from "../atom/Heading"
import Paragraph from "../atom/Paragraph"
import vectorImage from "@/assets/Vector.png";
import bannerImage from "@/assets/img-banner.png";

const Banner = () => {
    return (
        <section className="w-full h-[calc(100vh-98px)] md:h-[calc(100vh-134px)] bg-[#F2F0F1] text-white flex flex-col md:flex-row items-center justify-between md:px-20">
            <div className="flex-1 flex flex-col space-y-5 px-5 md:px-0 mt-10 md:mt-0 overflow-hidden">
                <Heading className="md:text-left md:w-[400px] w-[300px]">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </Heading>
                <Paragraph>
                    Browse through diverse range of metlculously crafted garments,
                    designed to bring out your individuality and cater to your sense of
                    style
                </Paragraph>
                <Button variant="neutral" size={"lg"} className="rounded-full md:w-50">
                    Show Now
                </Button>
                <div className="flex flex-wrap justify-center gap-10">
                    <div>
                        <Heading level={2} className="font-medium">200+</Heading>
                        <Paragraph className="md:text-md">International Brands</Paragraph>
                    </div>
                    <div>
                        <Heading level={2} className="font-medium">2,000+</Heading>
                        <Paragraph className="md:text-md">Hight-Quality Products</Paragraph>
                    </div>
                    <div>
                        <Heading level={2} className="font-medium">30,000+</Heading>
                        <Paragraph className="md:text-md">Happy Customers</Paragraph>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full h-full relative overflow-hidden">
                <img
                    src={vectorImage}
                    alt="Vector"
                    className=" w-20 absolute z-2 md:top-10 md:right-30 right-10 top-10"
                />
                <img
                    src={vectorImage}
                    alt="Vector"
                    className=" w-14 absolute z-2 md:bottom-36 md:left-10 bottom-0 left-10"
                />
                <img
                    src={bannerImage}
                    alt="Image"
                    className="object-contain absolute md:right-5 md:top-5 top-0 h-full w-full"
                />
            </div>
        </section>
    )
}

export default Banner