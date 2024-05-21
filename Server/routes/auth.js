import express from 'express'
import { loginUser } from '../controller/auth.js'
export const adminRouter = express.Router()

adminRouter.post('/login', loginUser)