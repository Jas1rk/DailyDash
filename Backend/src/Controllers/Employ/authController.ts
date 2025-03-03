import { Request, Response } from "express";
import httpStatus_Code from "../../Enums/httpStatusCode";
import Employ from '../../Schema/employSchema'
import dotenv from 'dotenv'
dotenv.config()
import { LoginTicket, OAuth2Client } from "google-auth-library";
import { createAccessToken, createRefreshToken } from "../../Utils/jwt";
import { EmployItems } from "../../Interface/interface";


const googleClientId = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(googleClientId)




export const registerEmploy = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("there is a man ", req.body)
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


export const googleAuthentication = async (req: Request, res: Response): Promise<void> => {
    try {
        const { token } = req.body
        if (!token) {
            res.status(httpStatus_Code.Unauthorized).json({ message: "Failed to login, Token is not provided" })
            return
        }
        const ticket: LoginTicket = await client.verifyIdToken({
            idToken: token,
            audience: googleClientId
        })
        const payload = ticket.getPayload()
        if (!payload) {
            res.status(httpStatus_Code.Unauthorized).json({ message: "Login failed. Failed to retrieve user data" })
            return
        }

        const { email, name, picture } = payload
        if (!email) {
            res.status(httpStatus_Code.Unauthorized).json({ message: "Email is not provided while google authentication." })
            return
        }

        const employ: EmployItems | null = await Employ.findOne({ email: email })
        if (!employ) {
            const newEmploy = new Employ({
                email: email,
                name: name,
                profilePicture: picture,
                authType: "google",
            })
            await newEmploy.save()
            const accessToken = createAccessToken(newEmploy.id)
            const refreshToken = createRefreshToken(newEmploy.id)

            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000,
            });


            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.status(httpStatus_Code.OK).json({
                message: "Login successful",
                employ: {
                    id: newEmploy._id,
                    name: newEmploy.name,
                    email: newEmploy.email,
                    profilePicture: newEmploy.profilePicture,
                },
            });
        }
    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}