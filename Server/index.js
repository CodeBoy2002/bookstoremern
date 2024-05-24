import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { adminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { bookRouter } from './routes/book.js'

import { Book } from './models/Book.js'
import { Student } from './models/Student.js'
import { Admin } from './models/Admin.js'

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
app.use('/books', bookRouter)

app.get('/', (req, res) => {
    res.json({ message: "Hello world" })
})

app.get('/dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Book.countDocuments()
        return res.json({ ok: true, student, admin, book })
    } catch (error) {
        return res.json(error)
    }
})

dotenv.config()

app.listen(process.env.PORT, () => console.log("Server is running"))