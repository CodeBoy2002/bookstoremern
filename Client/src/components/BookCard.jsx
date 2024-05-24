import React from 'react'
import '../css/BookCard.css'
import { Link } from 'react-router-dom'  

const BookCard = ({ book, role }) => {
    const { title, author, genre, yearPublish } = book
  return (
    <div className='book-card'>
        <div className='book-details'>
            <p className='book-title'>{title}</p>
            <p className='book-author'>{author}</p>
            <p className='book-genre'>{genre}</p>
            <p className='book-year-publish'>{yearPublish}</p>
        </div>
        {role === "admin" && 
        <div className='book-actions'>
            <button className='edit-button'><Link className='edit-link' to={`/update/${book._id}`}>edit</Link></button>
            <button className='delete-button'><Link className='delete-link' to={`/delete/${book._id}`}>delete</Link></button>
        </div>
        }
    </div>
  )
}

export default BookCard