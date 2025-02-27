import { Router } from "express";
import { employAuthOtp, registerEmploy, googleAuthentication } from "../Controllers/Employ/authController";

const employRoute = Router()

employRoute.post('/register-employ', registerEmploy)
employRoute.post('/auth-otp', employAuthOtp)
employRoute.post('/google/auth', googleAuthentication)

export default employRoute