import React, { useState, useEffect } from 'react';
import styles from '../AppStyles';

function StudentManagement() {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', studentId: '2021-001', email: 'john.doe@cit.edu', department: 'Computer Science', yearLevel: '3rd Year' },
    { id: 2, name: 'Jane Smith', studentId: '2021-002', email: 'jane.smith@cit.edu', department: 'Engineering', yearLevel: '2nd Year' },
    { id: 3, name: 'Mike Johnson', studentId: '2021-003', email: 'mike.johnson@cit.edu', department: 'Business', yearLevel: '4th Year' }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const departments = [
    'Computer Science',
    'Engineering',
    'Business Administration',
    'Arts and Sciences',
    'Education',
    'Nursing',
    'Agriculture',
    'Architecture'
  ];

  const yearLevels = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    '5th Year'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newStudent = {
        id: students.length + 1,
        name: studentName,
        studentId: studentId,
        email: email,
        department: department,
        yearLevel: yearLevel
      };
      
      setStudents([...students, newStudent]);
      
      // Reset form
      setStudentName('');
      setStudentId('');
      setEmail('');
      setDepartment('');
      setYearLevel('');
      
      alert(`Student ${studentName} added successfully!`);
      setIsLoading(false);
    }, 1000);
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== id));
      alert('Student deleted successfully!');
    }
  };

  return (
    <main style={{
      ...styles.main,
      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%), url('/images/Studentbg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease-out'
      }}>
        {/* Header */}
        <div style={{
          ...styles.textCenter,
          marginBottom: 'var(--space-12)'
        }}>
          <h1 style={{
            ...styles.heading,
            fontSize: 'var(--font-size-4xl)',
            marginBottom: 'var(--space-4)'
          }}>
            Student Management
          </h1>
          <p style={{
            ...styles.subtitle,
            fontSize: 'var(--font-size-lg)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Manage student information, registrations, and access to library resources
          </p>
        </div>

        <div style={{
          ...styles.grid,
          ...styles.gridCols2,
          gap: 'var(--space-8)',
          alignItems: 'start'
        }}>
          {/* Add Student Form */}
          <div style={{
            ...styles.card,
            position: 'sticky',
            top: 'var(--space-8)'
          }}>
            <h2 style={{
              ...styles.title,
              marginBottom: 'var(--space-6)',
              color: 'var(--primary-700)'
            }}>
              Add New Student
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="studentName">
                  Full Name
                </label>
                <input
                  id="studentName"
                  type="text"
                  placeholder="Enter student's full name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                  style={styles.input}
                  disabled={isLoading}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="studentId">
                  Student ID
                </label>
                <input
                  id="studentId"
                  type="text"
                  placeholder="e.g., 2021-001"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                  style={styles.input}
                  disabled={isLoading}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="student@cit.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                  disabled={isLoading}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="department">
                  Department
                </label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                  style={styles.select}
                  disabled={isLoading}
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="yearLevel">
                  Year Level
                </label>
                <select
                  id="yearLevel"
                  value={yearLevel}
                  onChange={(e) => setYearLevel(e.target.value)}
                  required
                  style={styles.select}
                  disabled={isLoading}
                >
                  <option value="">Select Year Level</option>
                  {yearLevels.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  ...styles.button,
                  ...styles.buttonPrimary,
                  width: '100%',
                  height: '48px',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 600,
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
              >
                {isLoading ? (
                  <div style={{ ...styles.flex, ...styles.itemsCenter, ...styles.gap2 }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid transparent',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Adding Student...
                  </div>
                ) : (
                  'Add Student'
                )}
              </button>
            </form>
          </div>

          {/* Students List */}
          <div>
            <div style={{
              ...styles.flex,
              ...styles.justifyBetween,
              ...styles.itemsCenter,
              marginBottom: 'var(--space-6)'
            }}>
              <h2 style={{
                ...styles.title,
                color: 'var(--primary-700)'
              }}>
                Registered Students
              </h2>
              <div style={{
                ...styles.flex,
                ...styles.itemsCenter,
                ...styles.gap2,
                padding: 'var(--space-2) var(--space-4)',
                background: 'var(--primary-50)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--primary-700)',
                fontWeight: 600
              }}>
                <span>👥</span>
                {students.length} Students
              </div>
            </div>

            <div style={{
              ...styles.grid,
              gap: 'var(--space-4)'
            }}>
              {students.map((student, index) => (
                <div key={student.id} style={{
                  ...styles.card,
                  padding: 'var(--space-6)',
                  transform: `translateY(${isVisible ? 0 : 20}px)`,
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${0.2 + index * 0.1}s`
                }}>
                  <div style={{
                    ...styles.flex,
                    ...styles.justifyBetween,
                    ...styles.itemsCenter,
                    marginBottom: 'var(--space-4)'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 600,
                        color: 'var(--gray-900)',
                        marginBottom: 'var(--space-1)'
                      }}>
                        {student.name}
                      </h3>
                      <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--primary-600)',
                        fontWeight: 500,
                        fontFamily: 'monospace'
                      }}>
                        {student.studentId}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      style={{
                        background: 'var(--primary-100)',
                        color: 'var(--primary-700)',
                        border: 'none',
                        borderRadius: 'var(--radius)',
                        padding: 'var(--space-2)',
                        cursor: 'pointer',
                        fontSize: 'var(--font-size-lg)',
                        transition: 'var(--transition-normal)',
                        '&:hover': {
                          background: 'var(--primary-200)'
                        }
                      }}
                      title="Delete Student"
                    >
                      🗑️
                    </button>
                  </div>
                  
                  <div style={{
                    ...styles.grid,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--space-3)'
                  }}>
                    <div>
                      <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--gray-600)',
                        marginBottom: 'var(--space-1)'
                      }}>
                        Email
                      </p>
                      <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--gray-800)',
                        fontWeight: 500
                      }}>
                        {student.email}
                      </p>
                    </div>
                    <div>
                      <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--gray-600)',
                        marginBottom: 'var(--space-1)'
                      }}>
                        Department
                      </p>
                      <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--gray-800)',
                        fontWeight: 500
                      }}>
                        {student.department}
                      </p>
                    </div>
                    <div>
                      <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--gray-600)',
                        marginBottom: 'var(--space-1)'
                      }}>
                        Year Level
                      </p>
                      <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--gray-800)',
                        fontWeight: 500
                      }}>
                        {student.yearLevel}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {students.length === 0 && (
              <div style={{
                ...styles.card,
                ...styles.textCenter,
                padding: 'var(--space-12)',
                color: 'var(--gray-500)'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-4xl)',
                  marginBottom: 'var(--space-4)'
                }}>
                  👥
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-lg)',
                  marginBottom: 'var(--space-2)'
                }}>
                  No Students Yet
                </h3>
                <p>Add your first student using the form on the left.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CSS for spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}

export default StudentManagement;