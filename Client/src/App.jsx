import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Books from './components/Books'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddStudent from './components/AddStudent'
import { useState } from 'react'
import Logout from './components/Logout'
import AddBook from './components/AddBook'
import UpdateBook from './components/UpdateBook'
import DeleteBook from './components/DeleteBook'

const App = () => {
  const [roles, setRoles] = useState('')
  return (
    <BrowserRouter>
    <Navbar roles={roles}/>
    <Routes>
      <Route path='/' element={<Home setRoles={setRoles}/>}/>
      <Route path='/books' element={<Books roles={roles}/>}/>
      <Route path='/login' element={<Login setRoles={setRoles}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/addstudent' element={<AddStudent/>}/>
      <Route path='/logout' element={<Logout setRoles={setRoles}/>}/>
      <Route path='/addbook' element={<AddBook/>}/>
      <Route path='/update/:id' element={<UpdateBook/>}/>
      <Route path='/delete/:id' element={<DeleteBook/>}/>
    </Routes>
    </BrowserRouter>
  )
} 

export default App