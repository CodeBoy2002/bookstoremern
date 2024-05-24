import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios
            .delete(`http://localhost:5000/books/delete/${id}`)
            .then(res => {
                if(res.data.deleted) {
                    navigate('/books')
                }
            })
            .catch(error => console.log(error))
    }, [])
}

export default DeleteBook