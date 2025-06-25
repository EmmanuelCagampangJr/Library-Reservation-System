import React, { useState } from 'react';
import axios from 'axios';
import './Student.css';

function CreateStudent() {
  const [studentData, setStudentData] = useState({
    name: '',
    program: '',
    year: '',
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/students/createStudent', studentData)
      .then(() => {
        setMessage('Student created successfully!');
        setStudentData({ name: '', program: '', year: '' });
      })
      .catch(() => {
        setMessage('Error creating student');
      });
  };

  return (
    <div
      style={{
        backgroundImage: "url('/Studentbg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="container">
        <h2>Create Student</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={studentData.name}
            onChange={(e) =>
              setStudentData({ ...studentData, name: e.target.value })
            }
            required
          />

          <label>Program:</label>
          <input
            type="text"
            placeholder="Enter Program"
            value={studentData.program}
            onChange={(e) =>
              setStudentData({ ...studentData, program: e.target.value })
            }
            required
          />

          <label>Year:</label>
          <input
            type="number"
            placeholder="Enter Year"
            value={studentData.year}
            onChange={(e) =>
              setStudentData({ ...studentData, year: e.target.value })
            }
            required
          />

          <button type="submit">Create Student</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default CreateStudent;
