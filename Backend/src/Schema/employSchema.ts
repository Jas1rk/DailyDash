import mongoose, { Schema } from "mongoose";

const employSchema: Schema = new Schema({
    email: {
        type: String
    }
})

const Employ = mongoose.model("Employ", employSchema)

export default Employ