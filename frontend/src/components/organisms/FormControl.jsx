import Button from "../atom/Button"
import FormInput from "../molecules/FormInput"

const FormControl = ({ formControl, formData, buttonText, onSubmit, setFormData, errors }) => {
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {formControl.map((controlItem) => (
                    <FormInput key={controlItem.name} {...controlItem} value={formData[controlItem.name] || ""} onChange={handleChange} error={errors[controlItem.name]} />
                ))}
            </div>
            <Button variant="neutral" className="mt-5 w-full rounded-lg">{buttonText || "Submit"}</Button>
        </form>
    )
}

export default FormControl