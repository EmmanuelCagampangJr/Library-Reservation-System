import React, { useState, useEffect } from 'react';
import AppStyles from '../AppStyles';
import styles from '../AppStyles';

function ReservationManagement() {
  const [formData, setFormData] = useState({
    studentId: '',
    resourceType: '',
    resourceName: '',
    date: '',
    startTime: '',
    endTime: '',
    purpose: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reservations, setReservations] = useState([
    {
      id: 1,
      studentId: '2021-001',
      studentName: 'John Doe',
      resourceType: 'Study Room',
      resourceName: 'Room A-101',
      date: '2024-01-15',
      startTime: '09:00',
      endTime: '11:00',
      purpose: 'Group Study Session',
      status: 'confirmed'
    },
    {
      id: 2,
      studentId: '2021-002',
      studentName: 'Jane Smith',
      resourceType: 'Equipment',
      resourceName: 'Laptop #5',
      date: '2024-01-16',
      startTime: '14:00',
      endTime: '16:00',
      purpose: 'Research Project',
      status: 'pending'
    },
    {
      id: 3,
      studentId: '2021-003',
      studentName: 'Mike Johnson',
      resourceType: 'Study Room',
      resourceName: 'Room B-203',
      date: '2024-01-17',
      startTime: '10:00',
      endTime: '12:00',
      purpose: 'Presentation Practice',
      status: 'confirmed'
    }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resourceTypes = [
    { value: 'study-room', label: 'Study Room', icon: '🏠' },
    { value: 'equipment', label: 'Equipment', icon: '💻' },
    { value: 'book', label: 'Book', icon: '📚' },
    { value: 'workspace', label: 'Workspace', icon: '🪑' }
  ];

  const students = [
    { id: '2021-001', name: 'John Doe' },
    { id: '2021-002', name: 'Jane Smith' },
    { id: '2021-003', name: 'Mike Johnson' },
    { id: '2021-004', name: 'Sarah Wilson' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const student = students.find(s => s.id === formData.studentId);
      const newReservation = {
        id: reservations.length + 1,
        studentId: formData.studentId,
        studentName: student ? student.name : 'Unknown Student',
        resourceType: formData.resourceType,
        resourceName: formData.resourceName,
        date: formData.date,
        startTime: formData.startTime,
        endTime: formData.endTime,
        purpose: formData.purpose,
        status: 'pending'
      };
      
      setReservations([...reservations, newReservation]);
      
      // Reset form
      setFormData({
        studentId: '',
        resourceType: '',
        resourceName: '',
        date: '',
        startTime: '',
        endTime: '',
        purpose: ''
      });
      
      alert('Reservation created successfully!');
      setIsLoading(false);
    }, 1000);
  };

  const handleStatusChange = (id, newStatus) => {
    setReservations(prev => 
      prev.map(reservation => 
        reservation.id === id 
          ? { ...reservation, status: newStatus }
          : reservation
      )
    );
  };

  const handleDeleteReservation = (id) => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      setReservations(prev => prev.filter(reservation => reservation.id !== id));
      alert('Reservation deleted successfully!');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'var(--success-600)';
      case 'pending': return 'var(--accent-600)';
      case 'cancelled': return 'var(--primary-600)';
      default: return 'var(--gray-600)';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'confirmed': return 'var(--success-50)';
      case 'pending': return 'var(--accent-50)';
      case 'cancelled': return 'var(--primary-50)';
      default: return 'var(--gray-50)';
    }
  };

  return (
    <div style={AppStyles.container}>
      <main style={{
        ...styles.main,
        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%), url('/images/bookingbg.jpg')`,
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
              Reservation Management
            </h1>
            <p style={{
              ...styles.subtitle,
              fontSize: 'var(--font-size-lg)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Manage library resource reservations and bookings efficiently
            </p>
          </div>

          <div style={{
            ...styles.grid,
            ...styles.gridCols2,
            gap: 'var(--space-8)',
            alignItems: 'start'
          }}>
            {/* Create Reservation Form */}
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
                Create New Reservation
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="studentId">
                    Student
                  </label>
                  <select
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                    style={styles.select}
                    disabled={isLoading}
                  >
                    <option value="">Select Student</option>
                    {students.map(student => (
                      <option key={student.id} value={student.id}>
                        {student.id} - {student.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="resourceType">
                    Resource Type
                  </label>
                  <select
                    id="resourceType"
                    name="resourceType"
                    value={formData.resourceType}
                    onChange={handleInputChange}
                    required
                    style={styles.select}
                    disabled={isLoading}
                  >
                    <option value="">Select Resource Type</option>
                    {resourceTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.icon} {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="resourceName">
                    Resource Name
                  </label>
                  <input
                    id="resourceName"
                    name="resourceName"
                    type="text"
                    placeholder="e.g., Room A-101, Laptop #5"
                    value={formData.resourceName}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                    disabled={isLoading}
                  />
                </div>

                <div style={{
                  ...styles.grid,
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="date">
                      Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      disabled={isLoading}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="startTime">
                      Start Time
                    </label>
                    <input
                      id="startTime"
                      name="startTime"
                      type="time"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div style={{
                  ...styles.grid,
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="endTime">
                      End Time
                    </label>
                    <input
                      id="endTime"
                      name="endTime"
                      type="time"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      disabled={isLoading}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="purpose">
                      Purpose
                    </label>
                    <input
                      id="purpose"
                      name="purpose"
                      type="text"
                      placeholder="e.g., Study, Research"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      disabled={isLoading}
                    />
                  </div>
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
                      Creating Reservation...
                    </div>
                  ) : (
                    'Create Reservation'
                  )}
                </button>
              </form>
            </div>

            {/* Reservations List */}
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
                  Active Reservations
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
                  <span>📅</span>
                  {reservations.length} Reservations
                </div>
              </div>

              <div style={{
                ...styles.grid,
                gap: 'var(--space-4)'
              }}>
                {reservations.map((reservation, index) => (
                  <div key={reservation.id} style={{
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
                          {reservation.studentName}
                        </h3>
                        <p style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--primary-600)',
                          fontWeight: 500,
                          fontFamily: 'monospace'
                        }}>
                          {reservation.studentId}
                        </p>
                      </div>
                      <div style={{
                        ...styles.flex,
                        ...styles.itemsCenter,
                        ...styles.gap2
                      }}>
                        <select
                          value={reservation.status}
                          onChange={(e) => handleStatusChange(reservation.id, e.target.value)}
                          style={{
                            padding: 'var(--space-1) var(--space-2)',
                            fontSize: 'var(--font-size-xs)',
                            border: '1px solid var(--gray-200)',
                            borderRadius: 'var(--radius)',
                            background: getStatusBg(reservation.status),
                            color: getStatusColor(reservation.status),
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        <button
                          onClick={() => handleDeleteReservation(reservation.id)}
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
                          title="Delete Reservation"
                        >
                          🗑️
                        </button>
                      </div>
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
                          Resource
                        </p>
                        <p style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--gray-800)',
                          fontWeight: 500
                        }}>
                          {reservation.resourceName}
                        </p>
                      </div>
                      <div>
                        <p style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--gray-600)',
                          marginBottom: 'var(--space-1)'
                        }}>
                          Date & Time
                        </p>
                        <p style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--gray-800)',
                          fontWeight: 500
                        }}>
                          {reservation.date} {reservation.startTime}-{reservation.endTime}
                        </p>
                      </div>
                      <div>
                        <p style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--gray-600)',
                          marginBottom: 'var(--space-1)'
                        }}>
                          Purpose
                        </p>
                        <p style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--gray-800)',
                          fontWeight: 500
                        }}>
                          {reservation.purpose}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {reservations.length === 0 && (
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
                    📅
                  </div>
                  <h3 style={{
                    fontSize: 'var(--font-size-lg)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    No Reservations Yet
                  </h3>
                  <p>Create your first reservation using the form on the left.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* CSS for spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ReservationManagement;