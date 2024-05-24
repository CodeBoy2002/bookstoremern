import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../css/AddBook.css'

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [yearPublish, setYearPublish] = useState("");
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Handling");
      axios
          .post(`https://bookstore-manage.vercel.app/books/add`, { title, author, genre, yearPublish })
          .then(res => {
            if(res.data.added) {
              navigate('/books')
            } else {
                console.log(res);
            }
          })
          .catch(error => console.log(error))
    };
  
    return (
      <div className="student-form-container">
        <form className="student-form" onSubmit={handleSubmit}>
          <h2>Add Book</h2>
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
          <button type="submit">Add Book</button>
        </form>
      </div>
    );
}

export default AddBook