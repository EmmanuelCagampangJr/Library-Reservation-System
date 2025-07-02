import React, { useState, useEffect } from 'react';
import styles from '../AppStyles';

function BookingManagement() {
  const [isVisible, setIsVisible] = useState(false);
  const [bookings, setBookings] = useState([
    {
      id: 1,
      studentId: '2021-001',
      studentName: 'John Doe',
      bookTitle: 'Introduction to Computer Science',
      bookId: 'CS-001',
      borrowDate: '2024-01-10',
      returnDate: '2024-01-24',
      status: 'borrowed'
    },
    {
      id: 2,
      studentId: '2021-002',
      studentName: 'Jane Smith',
      bookTitle: 'Advanced Mathematics',
      bookId: 'MATH-005',
      borrowDate: '2024-01-08',
      returnDate: '2024-01-22',
      status: 'borrowed'
    },
    {
      id: 3,
      studentId: '2021-003',
      studentName: 'Mike Johnson',
      bookTitle: 'Business Management',
      bookId: 'BUS-003',
      borrowDate: '2024-01-05',
      returnDate: '2024-01-19',
      status: 'returned'
    }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getStatusColor = (status) => {
    return status === 'borrowed' ? 'var(--accent-600)' : 'var(--success-600)';
  };

  const getStatusBg = (status) => {
    return status === 'borrowed' ? 'var(--accent-50)' : 'var(--success-50)';
  };

  const handleReturnBook = (id) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id 
          ? { ...booking, status: 'returned' }
          : booking
      )
    );
    alert('Book returned successfully!');
  };

  return (
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
            Booking Management
          </h1>
          <p style={{
            ...styles.subtitle,
            fontSize: 'var(--font-size-lg)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Track and manage book borrowings and returns
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{
          ...styles.grid,
          ...styles.gridCols4,
          marginBottom: 'var(--space-12)'
        }}>
          <div style={{
            ...styles.card,
            textAlign: 'center',
            padding: 'var(--space-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-2)'
            }}>
              📚
            </div>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--primary-600)',
              marginBottom: 'var(--space-1)'
            }}>
              {bookings.length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)'
            }}>
              Total Bookings
            </div>
          </div>

          <div style={{
            ...styles.card,
            textAlign: 'center',
            padding: 'var(--space-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-2)'
            }}>
              📖
            </div>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--accent-600)',
              marginBottom: 'var(--space-1)'
            }}>
              {bookings.filter(b => b.status === 'borrowed').length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)'
            }}>
              Currently Borrowed
            </div>
          </div>

          <div style={{
            ...styles.card,
            textAlign: 'center',
            padding: 'var(--space-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-2)'
            }}>
              ✅
            </div>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--success-600)',
              marginBottom: 'var(--space-1)'
            }}>
              {bookings.filter(b => b.status === 'returned').length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)'
            }}>
              Returned
            </div>
          </div>

          <div style={{
            ...styles.card,
            textAlign: 'center',
            padding: 'var(--space-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-2)'
            }}>
              👥
            </div>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--primary-600)',
              marginBottom: 'var(--space-1)'
            }}>
              {new Set(bookings.map(b => b.studentId)).size}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)'
            }}>
              Active Students
            </div>
          </div>
        </div>

        {/* Bookings List */}
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
              Book Borrowings
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
              <span>📚</span>
              {bookings.length} Bookings
            </div>
          </div>

          <div style={{
            ...styles.grid,
            gap: 'var(--space-4)'
          }}>
            {bookings.map((booking, index) => (
              <div key={booking.id} style={{
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
                      {booking.bookTitle}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--primary-600)',
                      fontWeight: 500,
                      fontFamily: 'monospace'
                    }}>
                      {booking.bookId}
                    </p>
                  </div>
                  <div style={{
                    ...styles.flex,
                    ...styles.itemsCenter,
                    ...styles.gap2
                  }}>
                    <div style={{
                      padding: 'var(--space-1) var(--space-3)',
                      background: getStatusBg(booking.status),
                      color: getStatusColor(booking.status),
                      borderRadius: 'var(--radius)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 600,
                      textTransform: 'capitalize'
                    }}>
                      {booking.status}
                    </div>
                    {booking.status === 'borrowed' && (
                      <button
                        onClick={() => handleReturnBook(booking.id)}
                        style={{
                          ...styles.button,
                          ...styles.buttonSuccess,
                          padding: 'var(--space-2) var(--space-4)',
                          fontSize: 'var(--font-size-sm)',
                          height: '32px'
                        }}
                      >
                        Return
                      </button>
                    )}
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
                      Student
                    </p>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-800)',
                      fontWeight: 500
                    }}>
                      {booking.studentName} ({booking.studentId})
                    </p>
                  </div>
                  <div>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-600)',
                      marginBottom: 'var(--space-1)'
                    }}>
                      Borrow Date
                    </p>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-800)',
                      fontWeight: 500
                    }}>
                      {booking.borrowDate}
                    </p>
                  </div>
                  <div>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-600)',
                      marginBottom: 'var(--space-1)'
                    }}>
                      Due Date
                    </p>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-800)',
                      fontWeight: 500
                    }}>
                      {booking.returnDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {bookings.length === 0 && (
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
                📚
              </div>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--space-2)'
              }}>
                No Bookings Yet
              </h3>
              <p>No books have been borrowed yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default BookingManagement;