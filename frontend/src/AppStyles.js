const AppStyles = {
  container: {
    background: 'linear-gradient(135deg, #800000 0%, #b22222 100%)',
    minHeight: '100vh',
    width: '100vw',
    padding: 0,
    margin: 0,
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
  nav: {
    background: '#fff',
    padding: '18px 30px',
    margin: '0 auto',
    maxWidth: '1100px',
    borderRadius: '0 0 16px 16px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '2.1rem',
    color: '#800000',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    justifyContent: 'center',
    fontSize: '18px'
  },
  navLink: {
    color: '#800000',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.2s',
    padding: '4px 10px',
    borderRadius: '4px'
  },
  navLinkHover: {
    background: '#f5eaea',
    color: '#b22222'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '50px',
    marginTop: '30px'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(128,0,0,0.13)',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  overlay: {
    width: '100%',
    color: '#800000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2.2rem',
    marginBottom: '8px',
    letterSpacing: '1px'
  },
  subText: {
    fontWeight: 'normal',
    fontSize: '1.15rem',
    marginBottom: '22px',
    color: '#444'
  },
  formContainer: {
    backgroundColor: '#faf7f7',
    padding: '28px 24px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '410px',
    boxShadow: '0 2px 12px rgba(128,0,0,0.07)',
    marginTop: '10px'
  },
  label: {
    display: 'block',
    marginBottom: '7px',
    fontWeight: 500,
    marginTop: '15px',
    color: '#800000',
    fontSize: '1rem'
  },
  input: {
    width: '95%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    marginBottom: '2px'
  },
  button: {
    marginTop: '24px',
    padding: '13px',
    width: '100%',
    backgroundColor: '#800000',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '17px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  buttonHover: {
    backgroundColor: '#b22222'
  },
  select: {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  backgroundColor: '#222',
  color: '#fff',
  marginBottom: '2px',
}

};

export default AppStyles;
