// validate log in and sign up using yup
import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    username: Yup.string()
    .min(6,"Username must be atleast 6 characters long, please try again")
    .max(50,"Username cannot be above 24 characters in length.")
    .required('Username field is required'),
    password:Yup.string()
    .min(6,"Password must be atleast 6 characters long")
    .required('Password field is required')
})

export const SignUpSchema = Yup.object().shape({
    username: Yup.string()
    .min(6,"Username must be atleast 6 characters long, please try again")
    .max(50,"Username cannot be above 24 characters in length.")
    .required('Username field is required'),
    password:Yup.string()
    .min(6,"Password must be atleast 6 characters long")
    .required('Password field is required'),
    email:Yup.string().email("Invalid email").required("Email field is required")
    
})