import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'



dotenv.config()

interface TokenPayload extends JwtPayload {
    userid: string
}

const accessKey = process.env.JWT_ACCESS_SECRET_KEY as string
const refreshKey = process.env.JWT_REFRESH_SECRET_KEY as string

export const createAccessToken = (userid: string) => {
    const accessToken = jwt.sign({ userid }, accessKey, { expiresIn: "1h" })
    console.log("The AccessToken in JWT",accessToken)
    return accessToken
}

export const createRefreshToken = (userid: string) => {
    const refreshToken = jwt.sign({ userid }, refreshKey, { expiresIn: "7d" })
    console.log("The RefreshToken in JWT",refreshToken)
    return refreshToken
}

