import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { adminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import './db.js'

const app = express()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())

app.use('/auth', adminRouter)
app.use('/student', studentRouter)

dotenv.config()

app.listen(process.env.PORT, () => console.log("Server is running"))


