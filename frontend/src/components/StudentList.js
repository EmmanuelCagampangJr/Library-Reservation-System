import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function StudentList() {
  const [students, setStudents] = useState([]);
 
  useEffect(() => {
    fetchStudents();
  }, []);
 
  const fetchStudents = async () => {
    const response = await axios.get('/students/getAllStudents');
    setStudents(response.data);
  };
 
  const deleteStudent = async (id) => {
    await axios.delete(`/students/deleteStudent/${id}`);
    fetchStudents();
  };
 
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    studentList: {
      listStyle: 'none',
      padding: 0,
    },
    studentItem: {
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '5px',
    },
    actionButtons: {
      marginTop: '10px',
    },
    button: {
      marginRight: '10px',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
    promoteButton: {
      backgroundColor: '#28a745',
      color: '#fff',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: '#fff',
    },
    footer: {
      backgroundColor: '#2e2e2e',
      color: '#ffffff',
      padding: '20px 0',
      marginTop: '40px',
    },
    footerSection: {
      padding: '10px 20px',
      flex: '1',
      textAlign: 'left',
    },
    footerTitle: {
      fontSize: '1.2rem',
      marginBottom: '10px',
      color: '#ffcc00',
    },
    footerBottom: {
      marginTop: '20px',
      textAlign: 'center',
      borderTop: '1px solid #444',
      paddingTop: '10px',
      fontSize: '0.8rem',
      color: '#cccccc',
    },
  };
 
  return (
<div style={styles.container}>
<h2>Student List</h2>
<ul style={styles.studentList}>
        {students.map((student) => (
<li key={student.studentId} style={styles.studentItem}>
<p>
<strong>Name:</strong> {student.name}
</p>
<p>
<strong>Program:</strong> {student.program}
</p>
<p>
<strong>Year:</strong> {student.year}
</p>
<div style={styles.actionButtons}>
<button style={{ ...styles.button, ...styles.promoteButton }}>Promote</button>
<button
                style={{ ...styles.button, ...styles.deleteButton }}
                onClick={() => deleteStudent(student.studentId)}
>
                Delete
</button>
</div>
</li>
        ))}
</ul>
<footer style={styles.footer}>
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
<div style={styles.footerSection}>
<h3 style={styles.footerTitle}>TeknoLib</h3>
<p>Contact us</p>
<p>Email: TeknoLib@gmail.com</p>
<p>Phone: +1-2345-6789</p>
<p>Address: Cebu Institute of Technology University</p>
</div>
<div style={styles.footerSection}>
<h3 style={styles.footerTitle}>Products</h3>
<p>Booking</p>
<p>Fermentum turpis</p>
<p>Mi consequat</p>
<p>Convallis porttitor</p>
</div>
<div style={styles.footerSection}>
<h3 style={styles.footerTitle}>About Us</h3>
<p>Bebiro, Ryan</p>
<p>Cagampang, Emmanuel</p>
<p>Jumawan, Clyde</p>
</div>
</div>
<div style={styles.footerBottom}>
<p>© 2020 TeknoLib. All rights reserved.</p>
</div>
</footer>
</div>
  );
}
 
export default StudentList;