import { Request, Response } from "express";
import httpStatus_Code from "../../Enums/httpStatusCode";
import Employ from '../../Schema/employSchema'


export const registerEmploy = async (req: Request, res: Response): Promise<void> => {
    try {
        const { employEmail } = req.body
        const isExistEmail = await Employ.findOne({ email: employEmail })
        if (isExistEmail) {
            res.status(httpStatus_Code.NoAccess).json({ message: "The Email you entered is already exist" })
            return
        }


    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}


export const employAuthOtp = async (req: Request, res: Response): Promise<void> => {
    try {

    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}


export const googleAuthEmploy = async (req: Request, res: Response): Promise<void> => {
    try {

    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}