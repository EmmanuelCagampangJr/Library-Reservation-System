import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../AppStyles';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const userData = {
        username: formData.username,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: formData.role
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setMessage('Account created successfully! Please login with your credentials.');
      setTimeout(() => {
        navigate('/login');
      }, 1200);
      setIsLoading(false);
    }, 1500);
  };

  const roles = [
    { value: 'student', label: 'Student', icon: '👨‍🎓' },
    { value: 'librarian', label: 'Librarian', icon: '📚' },
    { value: 'admin', label: 'Administrator', icon: '⚙️' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(30, 64, 175, 0.8) 100%), url('/images/Wildcats.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
      }} />
      
      {/* Signup Card */}
      <div style={{
        ...styles.formContainer,
        maxWidth: '500px',
        width: '100%',
        position: 'relative',
        zIndex: 10,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: 'all 0.6s ease-out'
      }}>
        {/* Header */}
        <div style={{
          ...styles.textCenter,
          marginBottom: 'var(--space-8)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, var(--accent-500) 0%, var(--accent-700) 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--space-4)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <img 
              src="/book.png" 
              alt="Logo" 
              style={{ 
                height: '40px',
                filter: 'brightness(0) invert(1)'
              }} 
            />
          </div>
          <h1 style={{
            ...styles.heading,
            fontSize: 'var(--font-size-3xl)',
            marginBottom: 'var(--space-2)',
            color: 'var(--gray-900)'
          }}>
            Create Account
          </h1>
          <p style={{
            ...styles.subtitle,
            color: 'var(--gray-600)'
          }}>
            Join our library management system today
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} style={{ width: '100%' }}>
          {/* Name Fields */}
          <div style={{
            ...styles.grid,
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-6)'
          }}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                style={{
                  ...styles.input,
                  height: '48px',
                  borderColor: errors.firstName ? 'var(--primary-500)' : undefined
                }}
                disabled={isLoading}
              />
              {errors.firstName && (
                <p style={{
                  color: 'var(--primary-600)',
                  fontSize: 'var(--font-size-sm)',
                  marginTop: 'var(--space-1)',
                  marginBottom: 0
                }}>
                  {errors.firstName}
                </p>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                style={{
                  ...styles.input,
                  height: '48px',
                  borderColor: errors.lastName ? 'var(--primary-500)' : undefined
                }}
                disabled={isLoading}
              />
              {errors.lastName && (
                <p style={{
                  color: 'var(--primary-600)',
                  fontSize: 'var(--font-size-sm)',
                  marginTop: 'var(--space-1)',
                  marginBottom: 0
                }}>
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                ...styles.input,
                height: '48px',
                borderColor: errors.email ? 'var(--primary-500)' : undefined
              }}
              disabled={isLoading}
            />
            {errors.email && (
              <p style={{
                color: 'var(--primary-600)',
                fontSize: 'var(--font-size-sm)',
                marginTop: 'var(--space-1)',
                marginBottom: 0
              }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Username */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="johndoe"
              value={formData.username}
              onChange={handleInputChange}
              required
              style={{
                ...styles.input,
                height: '48px',
                borderColor: errors.username ? 'var(--primary-500)' : undefined
              }}
              disabled={isLoading}
            />
            {errors.username && (
              <p style={{
                color: 'var(--primary-600)',
                fontSize: 'var(--font-size-sm)',
                marginTop: 'var(--space-1)',
                marginBottom: 0
              }}>
                {errors.username}
              </p>
            )}
          </div>

          {/* Role Selection */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="role">
              Role
            </label>
            <div style={{
              ...styles.grid,
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 'var(--space-2)'
            }}>
              {roles.map(role => (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role: role.value }))}
                  style={{
                    ...styles.button,
                    ...styles.buttonSecondary,
                    height: '48px',
                    fontSize: 'var(--font-size-sm)',
                    backgroundColor: formData.role === role.value ? 'var(--primary-100)' : 'var(--gray-50)',
                    borderColor: formData.role === role.value ? 'var(--primary-500)' : 'var(--gray-200)',
                    color: formData.role === role.value ? 'var(--primary-700)' : 'var(--gray-700)',
                    fontWeight: formData.role === role.value ? 600 : 500
                  }}
                  disabled={isLoading}
                >
                  <span style={{ marginRight: 'var(--space-1)' }}>{role.icon}</span>
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Password Fields */}
          <div style={{
            ...styles.grid,
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-6)'
          }}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  style={{
                    ...styles.input,
                    paddingRight: '48px',
                    height: '48px',
                    borderColor: errors.password ? 'var(--primary-500)' : undefined
                  }}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: 'var(--space-3)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 'var(--space-1)',
                    color: 'var(--gray-500)',
                    fontSize: 'var(--font-size-lg)'
                  }}
                  disabled={isLoading}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && (
                <p style={{
                  color: 'var(--primary-600)',
                  fontSize: 'var(--font-size-sm)',
                  marginTop: 'var(--space-1)',
                  marginBottom: 0
                }}>
                  {errors.password}
                </p>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  style={{
                    ...styles.input,
                    paddingRight: '48px',
                    height: '48px',
                    borderColor: errors.confirmPassword ? 'var(--primary-500)' : undefined
                  }}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute',
                    right: 'var(--space-3)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 'var(--space-1)',
                    color: 'var(--gray-500)',
                    fontSize: 'var(--font-size-lg)'
                  }}
                  disabled={isLoading}
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && (
                <p style={{
                  color: 'var(--primary-600)',
                  fontSize: 'var(--font-size-sm)',
                  marginTop: 'var(--space-1)',
                  marginBottom: 0
                }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...styles.button,
              ...styles.buttonAccent,
              width: '100%',
              height: '48px',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)',
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
                Creating Account...
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <div style={{
            marginTop: '16px',
            color: message.includes('success') ? 'green' : 'red',
            textAlign: 'center',
            fontWeight: 500
          }}>
            {message}
          </div>
        )}

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          margin: 'var(--space-6) 0',
          color: 'var(--gray-400)'
        }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--gray-200)' }} />
          <span style={{ padding: '0 var(--space-4)', fontSize: 'var(--font-size-sm)' }}>
            or
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--gray-200)' }} />
        </div>

        {/* Login Link */}
        <div style={{
          ...styles.textCenter,
          marginTop: 'var(--space-6)'
        }}>
          <p style={{
            color: 'var(--gray-600)',
            fontSize: 'var(--font-size-base)',
            margin: 0
          }}>
            Already have an account?{' '}
            <Link 
              to="/login" 
              style={{
                color: 'var(--primary-600)',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'var(--transition-normal)',
                '&:hover': {
                  color: 'var(--primary-700)',
                  textDecoration: 'underline'
                }
              }}
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      {/* CSS for spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: translateY(-50%) rotate(0deg); }
          100% { transform: translateY(-50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Signup;