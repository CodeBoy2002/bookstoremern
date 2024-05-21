import React, { useState } from "react";
import "../css/AddStudent.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [roll, setRoll] = useState("");
  const [grade, setGrade] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling");
    axios
        .post(`http://localhost:5000/student/register`, { username, password, roll, grade })
        .then(res => console.log(res))
        .catch(error => console.log(error))
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="form-group">
          <label htmlFor="roll">Roll No:</label>
          <input
            type="text"
            id="roll"
            name="roll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AddStudent;