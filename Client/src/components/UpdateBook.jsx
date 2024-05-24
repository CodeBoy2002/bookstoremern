import React, { useState, useEffect } from 'react'
import '../css/AddBook.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [yearPublish, setYearPublish] = useState("");
    const navigate = useNavigate()
    const { id } = useParams() 


    useEffect(() => {
        axios
            .get(`https://bookstore-manage.vercel.app/books/book/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setGenre(res.data.genre)
                setYearPublish(res.data.yearPublish)
            })
            .catch(error => console.log(error))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios
                .put(`https://bookstore-manage.vercel.app/books/update/${id}`, { title, author, genre, yearPublish })
                .then(res => {
                    if(res.data.updated) {
                        navigate('/books')
                    } else {
                        console.log(res);
                    }
                })
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="student-form-container">
        <form className="student-form" onSubmit={handleSubmit}>
          <h2>Update Book</h2>
          <div className="form-group">
            <label htmlFor="title">Title:</label> 
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="yearPublish">Year Publish:</label>
            <input
              type="yearPublish"
              id="yearPublish"
              name="yearPublish"
              value={yearPublish}
              onChange={(e) => setYearPublish(e.target.value)}
            />
          </div>
          <button type="submit">Update Book</button>
        </form>
      </div>
  )
}

export default UpdateBook