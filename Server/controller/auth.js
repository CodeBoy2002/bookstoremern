import { Admin } from "../models/Admin.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const loginUser = async (req, res) => {
    try {
        const { username, password, role } = req.body
        if(role === 'admin') {
            const admin = await Admin.findOne({ username })
            if(!admin) {
                return res.json({ message: "Admin not registered!" })
            }
            const validPassword = await bcrypt.compare(password, admin.password)
            if(!validPassword) {
                return res.json({ message: 'Wrong password' })
            }
            const token = jwt.sign({ username: admin.username, role: 'admin' }, process.env.Admin_key)
            res.cookie('token', token, { httpOnly: true, secure: true })
            return res.json({ login: true, role: 'admin' })
        } else if(role === 'student') {
    
        } else { 
    
        }
    } catch (error) {
        return res.json({ message: error.message })
    }
}

export { loginUser }