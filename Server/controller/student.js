import express from 'express'
import mongoose from 'mongoose'
import { Student } from '../models/Student.js'
import bcrypt from 'bcrypt'

export const studentRegister = async (req, res) => {
    try {
        const { username, password, roll, grade } = req.body
        const student = await Student.findOne({ username })
        if(student) {
            return res.json({ message: "Student is registered" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newStudent = new Student({
            username,
            password: hashedPassword,
            roll: roll,
            grade
        })
        await newStudent.save()
        return res.json({ registered: true })
    } catch (error) {
        return res.json({ message: "Error in registering student" })
    }
}