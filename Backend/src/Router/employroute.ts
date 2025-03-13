import { Router } from "express";
import { employAuthOtp, registerEmploy, googleAuthentication,loginEmploy } from "../Controllers/Employ/authController";

const employRoute = Router()

employRoute.post('/register-employ', registerEmploy)
employRoute.post('/auth-otp', employAuthOtp)
employRoute.post('/google/auth', googleAuthentication)
employRoute.post('/login-employ',loginEmploy)

export default employRoute