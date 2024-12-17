import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app: Application = express()

app.use(cors())

app.listen(process.env.PORT, () => console.log(`server is going on ${process.env.PORT}🚀`))

