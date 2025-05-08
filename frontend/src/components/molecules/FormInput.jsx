import FormErrorMessage from "../atom/FormErrorMessage"
import { Input } from "../ui/input"
import { Label } from "../ui/label"


const FormInput = ({ label, name, placeholder, type = "", value, onChange, error, componentType = "input", option = [] }) => {
    const renderComponent = () => {
        switch (componentType) {
            case 'text':
                return (
                    <Input name={name} id={name} placeholder={placeholder} type={type} value={value} onChange={(e) => onChange(name, e.target.value)} />
                )
            default:
                return (
                    <Input name={name} id={name} placeholder={placeholder} type={type} value={value} onChange={(e) => onChange(name, e.target.value)} />
                )
        }
    }

    return (
        <div className="grid w-full gap-1.5">
            <Label htmlFor={name}>{label}</Label>
            {renderComponent()}
            <FormErrorMessage message={error} />
        </div>
    )

}

export default FormInput