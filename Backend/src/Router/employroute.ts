import { Router } from "express";
import { registerEmploy } from "../Controllers/Employ/authController";

const employRoute = Router()

employRoute.post('/register-employ',registerEmploy)

export default employRoute