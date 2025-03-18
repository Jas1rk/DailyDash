import mongoose from "mongoose";

type OtpType = {
    email: string;
    otp: string;
    expiresAt?: Date;
}

const otpSchema = new mongoose.Schema<OtpType>({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: '1m' }
    }

}, { timestamps: true })

const Otp = mongoose.model('Otp', otpSchema)
export default Otp