import mongoose, { Schema } from "mongoose";
import { EmployItems } from "../Interface/interface";

const employSchema: Schema = new Schema<EmployItems>({

    employId: {
        type: String
    },

    email: {
        type: String
    },
    name: {
        type: String
    },
    number: {
        type: Number
    },
    profilePicture: {
        type: String
    },
    password: {
        type: String
    }

}, { versionKey: false })

const Employ = mongoose.model<EmployItems>("Employ", employSchema)

export default Employ