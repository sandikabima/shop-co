import CommonForm from "@/components/organisms/CommonForm"
import { registerFormControls, schemaRegister } from "@/config";
import { handleError } from "@/shared/lib/handle-error";
import { handleToast } from "@/shared/lib/handle-toast";
import { register } from "@/store/auth/authThunk";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
    username: "",
    email: "",
    password: "",
};

const AuthRegister = () => {
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})
    const distpatch = useDispatch()
    const navigate = useNavigate()

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
            distpatch(register(formData))
                .unwrap()
                .then((data) => handleToast.success(data.message || "Registrasi Berhasil"))
                .catch((error) => handleToast.error(handleError(error)))

            navigate("/login")
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