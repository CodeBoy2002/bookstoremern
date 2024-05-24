import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookCard from './BookCard'
import '../css/BookCard.css'

const Books = ({ roles }) => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/add`)
      .then(res => {
        setBooks(res.data)
        console.log(res.data);
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div className='book-list'>
      {
        books.map(book => {
          return <BookCard key={book._id} book={book} role={roles} />
        })
      }
    </div>
  )
}

export default Books