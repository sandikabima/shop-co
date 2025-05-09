import Icon from "./Icon"
import Input from "./Input"



const InputIcon = ({ icon, placeholder, className, wrapperClassName, iconClassName, ...props }) => {
    return (
        <div className={`relative w-full ${wrapperClassName}`}>
            <Icon icon={icon} size={20} className={`text-[#89868D] absolute left-3 top-1/2 transform -translate-y-1/2 ${iconClassName}`} />
            <Input
                placeholder={placeholder}
                className={`pl-10 ${className}`}
                {...props}
            />
        </div>
    )
}

export default InputIcon