import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import databaseConnection from './Config/mongoconnect'
import employRoute from './Router/employroute'
import companyRoute from './Router/companyroute'

dotenv.config()
databaseConnection()

const app: Application = express()

app.use(cors({
    origin: process.env.FRONTEND_URL, credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/employ', employRoute)
app.use('/company', companyRoute)


const PORT = process.env.PORT || 8001
app.listen(PORT, () => console.log(`server is going on ${PORT}🚀`))

