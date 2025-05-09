import CommonForm from "@/components/organisms/CommonForm"
import { loginFormControls, schemaLogin } from "@/config"
import { useState } from "react";

const initialState = {
    email: "",
    password: "",
};

const AuthLogin = () => {

    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const { error } = schemaLogin.validate(formData, { abortEarly: false });
        if (error) {
            const newErrors = error.details.reduce((acc, err) => {
                acc[err.path[0]] = err.message;
                return acc;
            }, {});
            setErrors(newErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log(formData)
        }
    }

    return (
        <CommonForm
            heading={"Sign in to your account"}
            text={"Dont' have an account"}
            link={"Register"}
            to={"/register"}
            formControl={loginFormControls}
            formData={formData}
            buttonText={"Login"}
            onSubmit={onSubmit}
            setFormData={setFormData}
            errors={errors}
        />
    )
}

export default AuthLogin