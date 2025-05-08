import AuthCard from "../molecules/AuthCard"
import FormControl from "./FormControl"


const CommonForm = ({ heading, text, link, to, formControl, formData, buttonText, onSubmit, setFormData, errors }) => {
    return (
        <AuthCard heading={heading} text={text} link={link} to={to}>
            <FormControl formControl={formControl} formData={formData} buttonText={buttonText} onSubmit={onSubmit} setFormData={setFormData} errors={errors} />
        </AuthCard>
    )
}
export default CommonForm