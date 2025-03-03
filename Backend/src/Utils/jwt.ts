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
    return accessToken
}

export const createRefreshToken = (userid: string) => {
    const refreshToken = jwt.sign({ userid }, refreshKey, { expiresIn: "7d" })
    return refreshToken
}


// export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const accessToken = req.cookies["accessToken"]
//         if (!accessToken) {
//             return res.status(httpStatus_Code.Unauthorized).json({ message: "No Access Token Provided" })
//         }

//         jwt.verify(accessToken, accessKey, (err: Error | null, decoded: string | JwtPayload | undefined) => {
//             if (err) {
//                 return verifyRefreshToken(req, res, next)
//             }
//             const payload = decoded as TokenPayload
//             req.userid = payload.userid
//             next()
//         })

//     } catch (error) {
//         return res.status(httpStatus_Code.InternalServerError).json({ message: "Internal Server Error" })
//     }
// }

// export const verifyRefreshToken = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const refreshToken = req.cookies["refreshToken"]
//         if (!refreshToken) {
//             return res.status(httpStatus_Code.Unauthorized).json({ message: "No Refresh Token Provided" })
//         }

//         jwt.verify(refreshToken, refreshKey, (err: Error | null, decoded: string | JwtPayload | undefined) => {
//             if (err) {
//                 return res.status(httpStatus_Code.Unauthorized).json({ message: "Invalid Refresh Token" })
//             }

//             const newToken = createAccessToken(decoded.userid)
//             res.cookie("accessToken", newToken, {
//                 httpOnly: true,
//                 secure: true,
//                 sameSite: 'strict',
//                 maxAge: 1 * 60 * 60 * 1000,
//             })
//             const payload = decoded as TokenPayload
//             req.userid = payload.userid
//             next()
//         })

//     } catch (error) {
//         res.status(httpStatus_Code.InternalServerError).json({ message: "Internal Server Error" })
//     }
// }