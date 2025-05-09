import CommonForm from "@/components/organisms/CommonForm"
import { registerFormControls, schemaRegister } from "@/config";
import { useState } from "react";

const initialState = {
    username: "",
    email: "",
    password: "",
};

const AuthRegister = () => {
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const { error } = schemaRegister.validate(formData, { abortEarly: false })
        if (error) {
            const newErrors = error.details.reduce((acc, err) => {
                acc[err.path[0]] = err.message
                return acc
            }, {})
            setErrors(newErrors)
            return false
        }
        setErrors({})
        return true
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log(formData)
        }
    }

    return (
        <CommonForm
            heading={"Create new account"}
            text={"Already have an account"}
            link={"Login"}
            to={"/login"}
            formControl={registerFormControls}
            formData={formData}
            buttonText={"Registrasi"}
            onSubmit={onSubmit}
            setFormData={setFormData}
            errors={errors}
        />
    )
}

export default AuthRegister