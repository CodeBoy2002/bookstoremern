import express from 'express'
export const studentRouter = express.Router()
import { studentRegister } from '../controller/student.js'
import { verifyAdmin } from '../controller/auth.js'

studentRouter.post('/register', verifyAdmin, studentRegister)