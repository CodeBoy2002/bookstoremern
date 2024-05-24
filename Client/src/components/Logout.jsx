import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setRoles }) => {
    const navigate = useNavigate()
    useEffect(() => {
        axios
            .get(`https://bookstore-manage.vercel.app/auth/logout`)
            .then(res => {
                if(res.data.logout) {
                    setRoles('')
                    navigate('/')
                }
            })
            .catch(error => console.log(error))
    }, [])
  return (
    <div>Logout</div>
  )
}

export default Logout