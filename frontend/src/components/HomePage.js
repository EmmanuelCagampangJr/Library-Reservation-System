import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../AppStyles';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { path: "/students", label: "Student Management", icon: "👥" },
    { path: "/reservations", label: "Reservation Management", icon: "📅" },
    { path: "/bookings", label: "Booking Management", icon: "📚" },
    { path: "/equipment", label: "Equipment Management", icon: "🔧" }
  ];

  const features = [
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Track usage patterns and optimize resource allocation with detailed analytics."
    },
    {
      icon: "⚡",
      title: "Real-time Updates",
      description: "Get instant notifications and updates on reservations and bookings."
    },
    {
      icon: "🔒",
      title: "Secure Access",
      description: "Role-based access control ensures data security and privacy."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access the system from any device with our responsive design."
    }
  ];

  const stats = [
    { number: "500+", label: "Students" },
    { number: "1000+", label: "Books" },
    { number: "50+", label: "Equipment" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <main style={styles.main}>
      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease-out'
      }}>
        {/* Hero Section */}
        <section style={{
          ...styles.heroCard,
          marginBottom: 'var(--space-16)',
          background: `linear-gradient(135deg, rgba(37, 99, 235, 0.4) 0%, rgba(30, 64, 175, 0.4) 100%), url('/images/homebg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            ...styles.gradientText,
            fontSize: 'var(--font-size-5xl)',
            fontWeight: 800,
            marginBottom: 'var(--space-6)',
            lineHeight: 1.1,
            textShadow: '0 2px 8px rgba(0,0,0,0.4)'
          }}>
            Welcome to the Future of Library Management
          </div>
          <p style={{
            ...styles.subtitle,
            fontSize: 'var(--font-size-xl)',
            maxWidth: '600px',
            margin: '0 auto var(--space-8)',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}>
            Streamline your library operations with our comprehensive management system. 
            From student registration to equipment tracking, we've got you covered.
          </p>
          <div style={{ ...styles.flex, ...styles.gap4, ...styles.justifyCenter }}>
            <Link to="/students" style={{
              ...styles.button,
              ...styles.buttonPrimary,
              ...styles.buttonLarge
            }}>
              Get Started
            </Link>
            <Link to="/reservations" style={{
              ...styles.button,
              ...styles.buttonSecondary,
              ...styles.buttonLarge
            }}>
              View Reservations
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          ...styles.grid,
          ...styles.gridCols4,
          marginBottom: 'var(--space-16)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out 0.2s'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              ...styles.card,
              textAlign: 'center',
              padding: 'var(--space-8)',
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              opacity: isVisible ? 1 : 0,
              transition: `all 0.6s ease-out ${0.3 + index * 0.1}s`
            }}>
              <div style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 800,
                color: 'var(--primary-600)',
                marginBottom: 'var(--space-2)'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: 'var(--font-size-lg)',
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Features Section */}
        <section style={{
          marginBottom: 'var(--space-16)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out 0.4s'
        }}>
          <div style={{
            ...styles.textCenter,
            marginBottom: 'var(--space-12)'
          }}>
            <h2 style={{
              ...styles.heading,
              fontSize: 'var(--font-size-3xl)'
            }}>
              Why Choose Our System?
            </h2>
            <p style={{
              ...styles.subtitle,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Built with modern technology and user experience in mind
            </p>
          </div>
          
          <div style={{
            ...styles.grid,
            ...styles.gridCols2
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                ...styles.card,
                padding: 'var(--space-8)',
                transform: `translateY(${isVisible ? 0 : 20}px)`,
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${0.5 + index * 0.1}s`
              }}>
                <div style={{
                  fontSize: 'var(--font-size-4xl)',
                  marginBottom: 'var(--space-4)'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  ...styles.title,
                  marginBottom: 'var(--space-3)'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  ...styles.bodyText,
                  color: 'var(--gray-600)'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions Section */}
        <section style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <div style={{
            ...styles.textCenter,
            marginBottom: 'var(--space-8)'
          }}>
            <h2 style={{
              ...styles.heading,
              fontSize: 'var(--font-size-2xl)'
            }}>
              Quick Actions
            </h2>
          </div>
          
          <div style={{
            ...styles.grid,
            ...styles.gridCols4,
            gap: 'var(--space-4)'
          }}>
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.card,
                  ...styles.textCenter,
                  padding: 'var(--space-6)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transform: `translateY(${isVisible ? 0 : 20}px)`,
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${0.7 + index * 0.1}s`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 'var(--shadow-xl)'
                  }
                }}
              >
                <div style={{
                  fontSize: 'var(--font-size-3xl)',
                  marginBottom: 'var(--space-3)'
                }}>
                  {item.icon}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 600,
                  color: 'var(--gray-800)'
                }}>
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage;