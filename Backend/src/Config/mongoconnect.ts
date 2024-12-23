import { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connection_url = process.env.MONGODBURL as string

const databaseConnection = async (): Promise<void> => {
    try {
        await connect(connection_url)
        console.log("Database connected successfully😎")

    } catch (error) {
        console.log("Failed to connect database😭", error)
    }
}


export default databaseConnection