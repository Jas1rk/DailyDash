import { Response } from "express"

export const cookieHandler = (res: Response, accessToken: string, refreshToken: string): void => {
    const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "strict" as const
    }

    res.cookie("accessToken", accessToken, {
        ...cookieOptions,
        maxAge: 24 * 60 * 60 * 1000,
    })

    res.cookie("refreshToken", refreshToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })
}