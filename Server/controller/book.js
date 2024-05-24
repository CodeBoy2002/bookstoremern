import { Book } from "../models/Book.js";

const createBook = async (req, res) => {
    try {
        const { title, author, genre, yearPublish } = req.body
        const newBook = new Book({
            title,
            author,
            genre,
            yearPublish
        })
        await newBook.save()
        return res.json({ added: true })
    } catch (error) {
        return res.json({ message: "Error in adding book" })
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        return res.json(books)
    } catch (error) {
        return res.json(error)
    }
}

const getSingleBook = async(req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findById({ _id: id })
        return res.json(book)
    } catch (error) {
        return res.json(error)
    }
}

const updateBook = async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findByIdAndUpdate({ _id: id }, req.body)
        return res.json({ updated: true, book })
    } catch (error) {
        return res.json(error)
    }
}

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findByIdAndDelete({ _id: id })
        return res.json({ deleted: true, book })
    } catch (error) {
        return res.json(error)
    }
}

export { createBook, getBooks, getSingleBook, updateBook, deleteBook }