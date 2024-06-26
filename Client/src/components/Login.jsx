import React, { useState, useEffect } from "react";
import "../css/Login.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = ({setRoles}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling");
    axios
      .post(`https://bookstore-manage.vercel.app/auth/login`, { username, password, role })
      .then(res => {
        if(res.data.login && res.data.role === 'admin') {
          setRoles('admin')
          navigate('/dashboard')
        } else if(res.data.login && res.data.role === 'student') {
          setRoles('student')
          navigate('/')
        }
      })
      .catch(error => console.log(error))
  };

  return (
    <form className="login-page" onSubmit={handleSubmit}>
      <div className="login-container">
        <h2>Login</h2> <br />
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className="btn-login">Login</button>
      </div>
    </form>
  );
};

export default Login;
