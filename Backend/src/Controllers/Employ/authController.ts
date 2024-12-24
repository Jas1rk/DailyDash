import { Request, Response } from "express";
import httpStatus_Code from "../../Enums/httpStatsuCode";


export const registerController = async (req: Request, res: Response,) => {
    try {

    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}