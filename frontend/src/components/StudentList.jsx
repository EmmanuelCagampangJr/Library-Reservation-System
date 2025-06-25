import { useEffect, useState } from 'react';
import { getAllStudents, createStudent, updateStudent, deleteStudent } from './services/studentService';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', program: '', year: '' });
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getAllStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddStudent = async () => {
    if (newStudent.name && newStudent.program && newStudent.year) {
      const addedStudent = await createStudent(newStudent);
      setStudents((prev) => [...prev, addedStudent]);
      setNewStudent({ name: '', program: '', year: '' });
    } else {
      alert("Please fill out all fields before adding a student.");
    }
  };

  const handleEditClick = (student) => {
    setNewStudent({ name: student.name, program: student.program, year: student.year });
    setEditingStudent(student.id);
  };

  const handleUpdateStudent = async () => {
    if (editingStudent !== null) {
      const updatedStudent = await updateStudent(editingStudent, newStudent);
      setStudents((prev) =>
        prev.map((student) => (student.id === editingStudent ? updatedStudent : student))
      );
      setNewStudent({ name: '', program: '', year: '' });
      setEditingStudent(null);
    }
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student List</h1>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <p><strong>{student.name}</strong></p>
            <p>{student.program} - {student.year}</p>
            <button onClick={() => handleEditClick(student)}>Edit</button>
            <button className="delete" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="form">
        <h2>{editingStudent ? 'Update Student' : 'Add New Student'}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="program"
          placeholder="Program"
          value={newStudent.program}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={newStudent.year}
          onChange={handleChange}
        />
        {editingStudent ? (
          <button onClick={handleUpdateStudent}>Update Student</button>
        ) : (
          <button onClick={handleAddStudent}>Add Student</button>
        )}
      </div>
    </div>
  );
};

export default StudentList;
