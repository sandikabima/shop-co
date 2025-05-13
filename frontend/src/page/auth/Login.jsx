import CommonForm from "@/components/organisms/CommonForm"
import { loginFormControls, schemaLogin } from "@/config"
import { handleError } from "@/shared/lib/handle-error";
import { handleToast } from "@/shared/lib/handle-toast";
import { login } from "@/store/auth/authThunk";
import { useState } from "react";
import { useDispatch } from "react-redux";

const initialState = {
    email: "",
    password: "",
};

const AuthLogin = () => {

    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

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
           dispatch(login(formData))
           .unwrap()
           .then((data) => handleToast.success(data.message || "Login Berhsail"))
           .catch((error) => handleToast.error(handleError(error)))
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