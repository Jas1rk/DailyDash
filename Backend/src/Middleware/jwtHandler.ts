import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import httpStatus_Code from '../Enums/httpStatusCode'
import { createAccessToken } from '../Utils/jwt'
dotenv.config()

 
const secretKey:string  = process.env.JWT_ACCESS_SECRET_KEY as string

interface Auth extends Request {
    userid?:string
}

function verifyToken(req: Auth, res: Response, next: NextFunction): void {
    const accessToken: string | undefined = req.cookies?.accessToken;
 
    if (!accessToken) {
       return handleRefreshToken(req, res, next);
    };
 
    jwt.verify(accessToken, secretKey, (err, decoded) => {
       if (err || !(decoded as JwtPayload)?.userid) {
          return handleRefreshToken(req, res, next);
       };
 
       const userid = (decoded as JwtPayload).userid;
       req.userid = userid;
       next();
    });
 };
 
 
 
 function handleRefreshToken(req: Auth, res: Response, next: NextFunction): void {
    try {
       const refreshToken: string | undefined = req.cookies?.refreshToken;
 
       if (!refreshToken) {
          throw {
             status: httpStatus_Code.Unauthorized,
             message: "Access denied. No token provided.",
          };
       }
 
       jwt.verify(refreshToken, secretKey, (err, decoded) => {
          if (err || !(decoded as JwtPayload)?.userid) {
             throw {
                status: httpStatus_Code.Unauthorized,
                message: "Access denied. Invalid token.",
             };
          }
 
          const userid = (decoded as JwtPayload).userid;
          const newAccessToken = createAccessToken(userid);
 
          res.cookie("AccessToken", newAccessToken, {
             httpOnly: true,
             sameSite: 'none',
             maxAge: 15 * 60 * 1000
          });
 
          req.userid = userid;
          next();
       });
 
    } catch (error) {
       next(error);
    };
 };
 
 export default verifyToken;
