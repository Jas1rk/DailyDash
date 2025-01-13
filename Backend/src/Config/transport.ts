import nodemailer from 'nodemailer'

export const createTransporter = () => {
    return nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.ADMIN_MAIL,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    })
}