import React, { useState } from 'react';
import './App.css';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [program, setProgram] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const student = { name, program, year };

        // Replace with your API URL
        const response = await fetch('http://localhost:8080/students/registerStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });

        if (response.ok) {
            // Handle success, e.g., clear form or show success message
            setName('');
            setProgram('');
            setYear('');
            alert('Student added successfully!');
        } else {
            // Handle error
            alert('Failed to add student.');
        }
    };

    return (
        <div className="form">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Program"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;
/* This component allows users to add a new student by filling out a form.
   It handles form submission, sends the data to the server, and provides feedback on success or failure. */ 