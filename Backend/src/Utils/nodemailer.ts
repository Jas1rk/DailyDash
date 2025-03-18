
import { createTransporter } from "../Config/transport";

const commonStyles = `
     <div style="font-family: Helvetica, Arial, sans-serif; min-width: 100px; overflow: auto; line-height: 2">
    <div style="margin: 50px auto; width: 70%; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border: 2px solid #00466a;">
`;



export const emailVerification = async (email: string, OTP: string): Promise<void> => {
    try {
        const transport = createTransporter()
        let mailOptions = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: "DailyDash - OTP Verification",
            text: `Your OTP is : ${OTP}`,
            html: `${commonStyles}
            <p style="font-size: 1.1em">Hi ${email},</p>
           <p>This message is from DailyDash. Use the following OTP to complete your registration procedures. OTP is valid for 1 minute.</p>
            <h2 style="background: #00466a; margin: 0 auto; width: max-content; padding: 0 10px; color: #fff; border-radius: 4px;">${OTP}</h2>
            <p style="font-size: 0.9em;">Regards,<br />DailyDash</p>
            <hr style="border: none; border-top: 1px solid #eee" />
          </div></div>`,
        };

        await transport.sendMail(mailOptions)

    } catch (error) {
        console.error(`Error sending email to ${email}:`, error);
        throw new Error(`Failed to send OTP email.`);
    }
}