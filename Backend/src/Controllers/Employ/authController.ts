import { Request, Response } from "express";
import httpStatus_Code from "../../Enums/httpStatsuCode";
import Employ from '../../Schema/employSchema'


export const registerEmploy = async (req: Request, res: Response,) => {
    try {
        const { employEmail } = req.body
        const isExistEmail = await Employ.findOne({ email: employEmail })
        if (isExistEmail) {
            return res.status(httpStatus_Code.NoAccess).json({ message: "The Email you entered is already exist" })
        }


    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}