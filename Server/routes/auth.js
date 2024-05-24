import express from 'express'
import { loginUser, logoutUser, verifyUser, verifyUsers } from '../controller/auth.js'
export const adminRouter = express.Router()

adminRouter.post('/login', loginUser)
adminRouter.get('/logout', logoutUser)
adminRouter.get('/verify', verifyUser, verifyUsers)