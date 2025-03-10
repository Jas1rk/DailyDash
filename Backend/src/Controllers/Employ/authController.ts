import { Request, Response } from "express";
import httpStatus_Code from "../../Enums/httpStatusCode";
import Employ from '../../Schema/employSchema'
import dotenv from 'dotenv'
import { LoginTicket, OAuth2Client } from "google-auth-library";
import { createAccessToken, createRefreshToken } from "../../Utils/jwt";
import { EmployItems } from "../../Interface/interface";
import { v4 as uuidv4 } from 'uuid'
dotenv.config()




const googleClientId: string = process.env.GOOGLE_CLIENT_ID as string
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
    const customId: string = uuidv4()
    console.log("custom id is here ", customId)
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
            const newEmploy = new Employ<EmployItems>({
                employId: customId,
                email: email,
                name: name,
                profilePicture: picture,
                authType: "google",
            })
            await newEmploy.save()
            console.log("the damn thing saved", newEmploy)
            const accessToken = createAccessToken(newEmploy.id)
            console.log("Here is the access Token", accessToken)
            const refreshToken = createRefreshToken(newEmploy.id)
            console.log("Here is the Access Token", refreshToken)

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
                    id: newEmploy.employId,
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