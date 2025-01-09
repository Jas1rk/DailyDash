import { Router } from "express";
import { employAuthOtp, registerEmploy } from "../Controllers/Employ/authController";

const employRoute = Router()

employRoute.post('/register-employ', registerEmploy)
employRoute.post('/auth-otp', employAuthOtp)

export default employRoute