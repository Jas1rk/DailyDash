import { Request, Response } from "express";
import httpStatus_Code from "../../Enums/httpStatusCode";
import Employ from '../../Schema/employSchema'
import dotenv from 'dotenv'
import { LoginTicket, OAuth2Client } from "google-auth-library";
import { createAccessToken, createRefreshToken } from "../../Utils/jwt";
import { EmployItems } from "../../Interface/interface";
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import { cookieHandler } from "../../Config/cookieHandler";
import { emailVerification } from "../../Utils/nodemailer";
import { generateOtp } from "../../Config/otpgenerator";
import Otp from "../../Schema/otpSchema";
import { comparePassword, hashPassword } from "../../Config/bcrypt";
dotenv.config()




const googleClientId: string = process.env.GOOGLE_CLIENT_ID as string
const client = new OAuth2Client(googleClientId)




export const registerEmploy = async (req: Request, res: Response): Promise<void> => {
    try {
        const { employEmail } = req.body
        const isExistEmail = await Employ.findOne({ email: employEmail })
        if (isExistEmail) {
            res.status(httpStatus_Code.NoAccess).json({ message: "The Email you entered is already exist" })
            return
        }

        const OTP = generateOtp()

        await Otp.create({
            email: employEmail,
            otp: OTP,
            expiresAt: new Date(Date.now() + 60 * 1000)
        })

        await emailVerification(employEmail, OTP)
        res.status(httpStatus_Code.OK).json({ message: "OTP sent successfully" })

    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}


export const employAuthOtp = async (req: Request, res: Response): Promise<void> => {
    const customId: string = uuidv4()
    try {
        const { enteredOTP, employName, employEmail, employMobile, employPassword } = req.body
        const storedOTP = await Otp.findOne({ email: employEmail }).sort({ createdAt: -1 })

        if (!storedOTP) {
            res.status(httpStatus_Code.NotFound).json({ message: "OTP not found" });
            return;
        }

        if (new Date() > storedOTP.expiresAt!) {
            await Otp.deleteOne({ _id: storedOTP._id })
            res.status(httpStatus_Code.Expired).json({ message: "OTP has been expired" })
            return
        }

        if (enteredOTP !== storedOTP) {
            res.status(httpStatus_Code.NotFound).json({ message: "Provided otp is incorrect" })
            return
        }

        const securePassword = await hashPassword(employPassword)

        const newEmploy = new Employ<EmployItems>({
            employId: customId,
            name: employName,
            email: employEmail,
            number: employMobile,
            password: securePassword
        })
        await newEmploy.save()
        await Otp.deleteOne({ _id: storedOTP._id })
        res.status(httpStatus_Code.OK).json({ message: "Registration completed successfully" })
    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}


export const googleAuthentication = async (req: Request, res: Response): Promise<void> => {
    const customId: string = uuidv4()
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
            const accessToken = createAccessToken(newEmploy.id)
            const refreshToken = createRefreshToken(newEmploy.id)

            cookieHandler(res, accessToken, refreshToken)

            res.status(httpStatus_Code.OK).json({
                message: "Login successful",
                employ: {
                    id: newEmploy.employId,
                    name: newEmploy.name,
                    email: newEmploy.email,
                    profilePicture: newEmploy.profilePicture,
                },
            })
        } else {
            res.status(httpStatus_Code.NotFound).json({ message: "This email is already exists" })
        }

    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: "Service Unavailable" })
    }
}


export const loginEmploy = async (req: Request, res: Response): Promise<void> => {
    try {
        const { employEmail, employPassword } = req.body
        const findEmploy = await Employ.findOne<EmployItems>({ email: employEmail })
        if (!findEmploy) {
            res.status(httpStatus_Code.NotFound).json({ message: 'The provided email is not exist' })
            return
        }
        if (findEmploy.isBlocked) {
            res.status(httpStatus_Code.NoAccess).json({ message: 'You have been blocked' })
            return
        }

        if (!findEmploy.password || !(await comparePassword(employPassword, findEmploy.password))) {
            res.status(httpStatus_Code.Unauthorized).json({ message: 'Incorrect password' });
            return;
        }

        const EmployData: Partial<EmployItems> = {
            employId: findEmploy.employId,
            email: findEmploy.email,
            name: findEmploy.name,
            number: findEmploy.number,
            profilePicture: findEmploy.profilePicture,
        }

        const accessToken = createAccessToken(findEmploy.id)
        const refreshToken = createRefreshToken(findEmploy.id)

        cookieHandler(res, accessToken, refreshToken)
        res.status(httpStatus_Code.OK).json(EmployData)
    } catch (error) {
        res.status(httpStatus_Code.ServiceUnavailable).json({ message: 'Service Unavailable' })
    }
}