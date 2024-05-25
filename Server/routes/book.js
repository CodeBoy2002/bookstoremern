import express from 'express'
import { verifyAdmin } from '../controller/auth.js'
import { createBook, deleteBook, getSingleBook, updateBook } from '../controller/book.js'
import { getBooks } from '../controller/book.js'
export const bookRouter = express.Router()

bookRouter.post('/add', verifyAdmin, createBook)
bookRouter.get('/add', getBooks)
bookRouter.get('/book/:id', getSingleBook) 
bookRouter.put('/update/:id', updateBook)
bookRouter.delete('/delete/:id', deleteBook)