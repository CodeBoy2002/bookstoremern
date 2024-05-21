import express from 'express'
export const studentRouter = express.Router()
import { studentRegister } from '../controller/student.js'

studentRouter.post('/register', studentRegister)