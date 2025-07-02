const AppStyles = {
  // Layout & Container Styles
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%)',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: 'var(--gray-900)',
  },

  // Navigation Styles
  nav: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--gray-200)',
    padding: 'var(--space-4) var(--space-6)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    borderRadius: '0 0 var(--radius-xl) var(--radius-xl)',
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    fontSize: 'var(--font-size-xl)',
    fontWeight: 700,
    color: 'var(--primary-700)',
    textDecoration: 'none',
    transition: 'var(--transition-normal)',
    '&:hover': {
      color: 'var(--primary-800)',
      transform: 'translateY(-1px)',
    },
  },

  navLinks: {
    display: 'flex',
    gap: 'var(--space-6)',
    alignItems: 'center',
  },

  navLink: {
    color: 'var(--gray-700)',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: 'var(--font-size-sm)',
    padding: 'var(--space-2) var(--space-4)',
    borderRadius: 'var(--radius-lg)',
    transition: 'var(--transition-normal)',
    position: 'relative',
    '&:hover': {
      color: 'var(--primary-700)',
      backgroundColor: 'var(--primary-50)',
      transform: 'translateY(-1px)',
    },
  },

  navLinkActive: {
    color: 'var(--primary-700)',
    backgroundColor: 'var(--primary-100)',
    fontWeight: 600,
  },

  // Main Content Area
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'var(--space-8) var(--space-6)',
    minHeight: 'calc(100vh - 80px)',
  },

  // Card & Container Styles
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: 'var(--radius-2xl)',
    boxShadow: 'var(--shadow-xl)',
    border: '1px solid var(--gray-200)',
    padding: 'var(--space-8)',
    transition: 'var(--transition-normal)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },
  },

  heroCard: {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
    backdropFilter: 'blur(20px)',
    borderRadius: 'var(--radius-2xl)',
    boxShadow: 'var(--shadow-xl)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: 'var(--space-12)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
      transform: 'translateX(-100%)',
      transition: 'transform 0.6s',
    },
    '&:hover::before': {
      transform: 'translateX(100%)',
    },
  },

  // Typography Styles
  heading: {
    fontSize: 'var(--font-size-4xl)',
    fontWeight: 800,
    color: 'var(--gray-900)',
    marginBottom: 'var(--space-4)',
    lineHeight: 1.2,
    letterSpacing: '-0.025em',
  },

  subheading: {
    fontSize: 'var(--font-size-xl)',
    fontWeight: 600,
    color: 'var(--gray-700)',
    marginBottom: 'var(--space-6)',
    lineHeight: 1.4,
  },

  title: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 700,
    color: 'var(--gray-900)',
    marginBottom: 'var(--space-4)',
  },

  subtitle: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: 500,
    color: 'var(--gray-600)',
    marginBottom: 'var(--space-6)',
  },

  bodyText: {
    fontSize: 'var(--font-size-base)',
    color: 'var(--gray-700)',
    lineHeight: 1.6,
  },

  // Form Styles
  formContainer: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: 'var(--radius-2xl)',
    boxShadow: 'var(--shadow-xl)',
    border: '1px solid var(--gray-200)',
    padding: 'var(--space-8)',
    maxWidth: '500px',
    margin: '0 auto',
    width: '100%',
  },

  formGroup: {
    marginBottom: 'var(--space-6)',
  },

  label: {
    display: 'block',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    color: 'var(--gray-700)',
    marginBottom: 'var(--space-2)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  input: {
    width: '100%',
    padding: 'var(--space-3) var(--space-4)',
    fontSize: 'var(--font-size-base)',
    border: '2px solid var(--gray-200)',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--gray-50)',
    transition: 'var(--transition-normal)',
    '&:focus': {
      outline: 'none',
      borderColor: 'var(--primary-500)',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px var(--primary-100)',
    },
    '&:hover': {
      borderColor: 'var(--gray-300)',
    },
  },

  select: {
    width: '100%',
    padding: 'var(--space-3) var(--space-4)',
    fontSize: 'var(--font-size-base)',
    border: '2px solid var(--gray-200)',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--gray-50)',
    cursor: 'pointer',
    transition: 'var(--transition-normal)',
    '&:focus': {
      outline: 'none',
      borderColor: 'var(--primary-500)',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px var(--primary-100)',
    },
  },

  textarea: {
    width: '100%',
    padding: 'var(--space-3) var(--space-4)',
    fontSize: 'var(--font-size-base)',
    border: '2px solid var(--gray-200)',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--gray-50)',
    minHeight: '120px',
    resize: 'vertical',
    transition: 'var(--transition-normal)',
    '&:focus': {
      outline: 'none',
      borderColor: 'var(--primary-500)',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px var(--primary-100)',
    },
  },

  // Button Styles
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    padding: 'var(--space-3) var(--space-6)',
    fontSize: 'var(--font-size-base)',
    fontWeight: 600,
    borderRadius: 'var(--radius-lg)',
    border: 'none',
    cursor: 'pointer',
    transition: 'var(--transition-normal)',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },

  buttonPrimary: {
    backgroundColor: 'var(--primary-600)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'var(--primary-700)',
      transform: 'translateY(-1px)',
      boxShadow: 'var(--shadow-lg)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },

  buttonSecondary: {
    backgroundColor: 'var(--gray-100)',
    color: 'var(--gray-700)',
    border: '2px solid var(--gray-200)',
    '&:hover': {
      backgroundColor: 'var(--gray-200)',
      borderColor: 'var(--gray-300)',
      transform: 'translateY(-1px)',
    },
  },

  buttonAccent: {
    backgroundColor: 'var(--accent-500)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'var(--accent-600)',
      transform: 'translateY(-1px)',
      boxShadow: 'var(--shadow-lg)',
    },
  },

  buttonSuccess: {
    backgroundColor: 'var(--success-600)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'var(--success-700)',
      transform: 'translateY(-1px)',
      boxShadow: 'var(--shadow-lg)',
    },
  },

  buttonLarge: {
    padding: 'var(--space-4) var(--space-8)',
    fontSize: 'var(--font-size-lg)',
  },

  buttonSmall: {
    padding: 'var(--space-2) var(--space-4)',
    fontSize: 'var(--font-size-sm)',
  },

  // Grid & Layout Styles
  grid: {
    display: 'grid',
    gap: 'var(--space-6)',
  },

  gridCols2: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },

  gridCols3: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },

  gridCols4: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },

  flex: {
    display: 'flex',
  },

  flexCol: {
    flexDirection: 'column',
  },

  flexRow: {
    flexDirection: 'row',
  },

  itemsCenter: {
    alignItems: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  justifyBetween: {
    justifyContent: 'space-between',
  },

  gap2: {
    gap: 'var(--space-2)',
  },

  gap4: {
    gap: 'var(--space-4)',
  },

  gap6: {
    gap: 'var(--space-6)',
  },

  // Spacing Utilities
  p2: { padding: 'var(--space-2)' },
  p4: { padding: 'var(--space-4)' },
  p6: { padding: 'var(--space-6)' },
  p8: { padding: 'var(--space-8)' },

  px4: { paddingLeft: 'var(--space-4)', paddingRight: 'var(--space-4)' },
  px6: { paddingLeft: 'var(--space-6)', paddingRight: 'var(--space-6)' },
  px8: { paddingLeft: 'var(--space-8)', paddingRight: 'var(--space-8)' },

  py2: { paddingTop: 'var(--space-2)', paddingBottom: 'var(--space-2)' },
  py4: { paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-4)' },
  py6: { paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' },

  m0: { margin: 0 },
  m4: { margin: 'var(--space-4)' },
  m6: { margin: 'var(--space-6)' },
  m8: { margin: 'var(--space-8)' },

  mxAuto: { marginLeft: 'auto', marginRight: 'auto' },
  my4: { marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' },
  my6: { marginTop: 'var(--space-6)', marginBottom: 'var(--space-6)' },
  my8: { marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' },

  // Text Utilities
  textCenter: { textAlign: 'center' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },

  textXs: { fontSize: 'var(--font-size-xs)' },
  textSm: { fontSize: 'var(--font-size-sm)' },
  textBase: { fontSize: 'var(--font-size-base)' },
  textLg: { fontSize: 'var(--font-size-lg)' },
  textXl: { fontSize: 'var(--font-size-xl)' },
  text2xl: { fontSize: 'var(--font-size-2xl)' },
  text3xl: { fontSize: 'var(--font-size-3xl)' },
  text4xl: { fontSize: 'var(--font-size-4xl)' },

  fontNormal: { fontWeight: 400 },
  fontMedium: { fontWeight: 500 },
  fontSemibold: { fontWeight: 600 },
  fontBold: { fontWeight: 700 },
  fontExtrabold: { fontWeight: 800 },

  // Color Utilities
  textPrimary: { color: 'var(--primary-600)' },
  textGray: { color: 'var(--gray-600)' },
  textGrayDark: { color: 'var(--gray-800)' },
  textSuccess: { color: 'var(--success-600)' },
  textAccent: { color: 'var(--accent-600)' },

  bgWhite: { backgroundColor: 'white' },
  bgGray50: { backgroundColor: 'var(--gray-50)' },
  bgGray100: { backgroundColor: 'var(--gray-100)' },
  bgPrimary50: { backgroundColor: 'var(--primary-50)' },
  bgPrimary100: { backgroundColor: 'var(--primary-100)' },

  // Border Utilities
  border: { border: '1px solid var(--gray-200)' },
  borderGray200: { borderColor: 'var(--gray-200)' },
  borderGray300: { borderColor: 'var(--gray-300)' },
  borderPrimary500: { borderColor: 'var(--primary-500)' },

  rounded: { borderRadius: 'var(--radius)' },
  roundedLg: { borderRadius: 'var(--radius-lg)' },
  roundedXl: { borderRadius: 'var(--radius-xl)' },
  rounded2xl: { borderRadius: 'var(--radius-2xl)' },

  // Shadow Utilities
  shadow: { boxShadow: 'var(--shadow)' },
  shadowMd: { boxShadow: 'var(--shadow-md)' },
  shadowLg: { boxShadow: 'var(--shadow-lg)' },
  shadowXl: { boxShadow: 'var(--shadow-xl)' },

  // Animation Utilities
  transition: { transition: 'var(--transition-normal)' },
  transitionFast: { transition: 'var(--transition-fast)' },
  transitionSlow: { transition: 'var(--transition-slow)' },

  // Responsive Utilities
  responsive: {
    '@media (max-width: 768px)': {
      nav: {
        flexDirection: 'column',
        gap: 'var(--space-4)',
        padding: 'var(--space-4)',
      },
      navLinks: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 'var(--space-3)',
      },
      main: {
        padding: 'var(--space-4)',
      },
      card: {
        padding: 'var(--space-6)',
      },
      heroCard: {
        padding: 'var(--space-8)',
      },
    },
  },

  // Special Effects
  glassEffect: {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },

  gradientText: {
    background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--accent-600) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  // Loading States
  loading: {
    opacity: 0.6,
    pointerEvents: 'none',
  },

  skeleton: {
    backgroundColor: 'var(--gray-200)',
    borderRadius: 'var(--radius)',
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
};

export default AppStyles;