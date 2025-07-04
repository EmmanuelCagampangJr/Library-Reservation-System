import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../AppStyles';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    
    // Simulate API call
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === username && user.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        setMessage('Login successful! Welcome back!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setMessage('Invalid credentials. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(30, 64, 175, 0.8) 100%), url('/images/background.jpg')`,
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
      
      {/* Login Card */}
      <div style={{
        ...styles.formContainer,
        maxWidth: '450px',
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
            background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 100%)',
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
            Welcome Back
          </h1>
          <p style={{
            ...styles.subtitle,
            color: 'var(--gray-600)'
          }}>
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                ...styles.input,
                paddingLeft: 'var(--space-4)',
                paddingRight: 'var(--space-4)',
                height: '48px'
              }}
              disabled={isLoading}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  ...styles.input,
                  paddingLeft: 'var(--space-4)',
                  paddingRight: '48px',
                  height: '48px'
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
              marginTop: 'var(--space-6)',
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
                Signing In...
              </div>
            ) : (
              'Sign In'
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

        {/* Sign Up Link */}
        <div style={{
          ...styles.textCenter,
          marginTop: 'var(--space-6)'
        }}>
          <p style={{
            color: 'var(--gray-600)',
            fontSize: 'var(--font-size-base)',
            margin: 0
          }}>
            Don't have an account?{' '}
            <Link 
              to="/signup" 
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
              Sign up here
            </Link>
          </p>
        </div>

        {/* Demo Credentials */}
        <div style={{
          ...styles.textCenter,
          marginTop: 'var(--space-6)',
          padding: 'var(--space-4)',
          background: 'var(--gray-50)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--gray-200)'
        }}>
          <p style={{
            color: 'var(--gray-600)',
            fontSize: 'var(--font-size-sm)',
            margin: '0 0 var(--space-2) 0',
            fontWeight: 500
          }}>
            Demo Credentials:
          </p>
          <p style={{
            color: 'var(--gray-500)',
            fontSize: 'var(--font-size-xs)',
            margin: 0,
            fontFamily: 'monospace'
          }}>
            Username: demo | Password: demo123
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

export default Login;