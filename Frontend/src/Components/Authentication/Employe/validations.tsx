import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is required."),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .length(4, "OTP must be 4 digits")
    .matches(/^\d+$/, "OTP must be numeric")
    .required("OTP is required"),
});
