import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Icon from "../atom/Icon";

const sosials = [
    { icon: Twitter, bg: "bg-white", color: "text-black" },
    { icon: Facebook, bg: "bg-black", color: "text-white" },
    { icon: Github, bg: "bg-white", color: "text-black" },
    { icon: Instagram, bg: "bg-white", color: "text-black" }
]

const SosialIcon = () => {
    return (
        <div className="flex gap-3 mt-2">
            {sosials.map((item, i) => (
                <div key={i} className={`p-2 ${item.bg} ${item.color} rounded-full border-2 flex items-center justify-center`}>
                    <Icon icon={item.icon} size={24} />
                </div>
            ))}
        </div>
    )
}

export default SosialIcon
