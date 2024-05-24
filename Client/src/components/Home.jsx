import React, { useEffect } from 'react'
import "../css/Home.css"
import axios from 'axios'

const Home = ({ setRoles }) => {
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios
      .get(`https://bookstore-manage.vercel.app/auth/verify`)
      .then(res => {
        if(res.data.login) {
          setRoles(res.data.role)
        } else {
          setRoles('')
        }
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1 className='hero-text'>Book Store</h1>
        <p className='hero-description'>
          Effortlessly Catalog, Manage, and Access Your Book Collection with Precision and Ease.
        </p>
      </div>
      <div className='hero-image'></div>
    </div>
  )
}

export default Home