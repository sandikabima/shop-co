

import Joi from "joi";
export const schemaLogin = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            "string.base": `"Email" harus berupa teks`,
            "string.email": `"Email" tidak valid`,
            "any.required": `"Email" harus diisi`,
        }),
    password: Joi.string().min(6).required().messages({
        "string.base": `"Password" harus berupa teks`,
        "string.min": `"Password" minimal 6 karakter`,
        "any.required": `"Password" harus diisi`,
    }),
});

export const loginFormControls = [
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
    },
];