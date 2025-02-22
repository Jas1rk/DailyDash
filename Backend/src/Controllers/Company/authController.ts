import { Request, Response, } from "express";
import httpStatus_Code from "../../Enums/httpStatusCode";

export const registerCompany = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(httpStatus_Code.InternalServerError).json({ message: "Internal Server Error" })
    }
}