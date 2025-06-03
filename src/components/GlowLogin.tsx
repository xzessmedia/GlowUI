import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import GlowInput from './GlowInput';
import GlowingButton from './GlowingButton';
// You must provide these two functions in your workspace:
// import { signIn, signUp } from './auth';

export interface GlowLoginProps {
  onLogin?: (info: { email: string; password: string }) => void;
  onRegister?: (info: { email: string; password: string }) => void;
  signIn?: (email: string, password: string) => Promise<any>;
  signUp?: (email: string, password: string) => Promise<any>;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  style?: React.CSSProperties;
  paperStyle?: React.CSSProperties;
}

const FancyPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: '100%',
  background: 'rgba(26, 42, 29, 0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 255, 153, 0.4)',
  borderRadius: 24,
  boxShadow:
    '0 20px 60px rgba(0, 255, 153, 0.22), 0 0 40px rgba(0, 255, 153, 0.13)',
  position: 'relative',
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background:
      'linear-gradient(90deg, transparent, #00ff99, #36d1c4, #00ff99, transparent)',
    animation: 'shimmer 3s ease-in-out infinite',
    opacity: 0.7,
    zIndex: 1,
  },
  '@keyframes shimmer': {
    '0%': { opacity: 0.3 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.3 },
  },
}));

const GlowTitle = styled(Typography)({
  textAlign: 'center',
  marginBottom: 24,
  background: 'linear-gradient(45deg, #00ff99, #36d1c4, #00e676)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 'bold',
  textShadow: '0 0 30px rgba(0, 255, 153, 0.3)',
  animation: 'glow 2s ease-in-out infinite alternate',
  fontSize: 30,
  '@keyframes glow': {
    from: { filter: 'drop-shadow(0 0 6px rgba(0,255,153,0.6))' },
    to: { filter: 'drop-shadow(0 0 16px rgba(0,255,153,0.99))' },
  },
});

const GlowLogin: React.FC<GlowLoginProps> = ({
  onLogin,
  onRegister,
  signIn,
  signUp,
  title = 'Glow Login',
  subtitle,
  style,
  paperStyle,
}) => {
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const doSignIn = signIn;
  const doSignUp = signUp;

  const handleAuth = async () => {
    if (!email || !password) return;
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      let result;
      if (tab === 0) {
        result = doSignIn ? await doSignIn(email, password) : await (onLogin?.({ email, password }));
      } else {
        result = doSignUp ? await doSignUp(email, password) : await (onRegister?.({ email, password }));
        if (doSignUp && !result?.error) {
          setSuccess('Account erstellt! Du kannst dich jetzt anmelden.');
          setTab(0);
        }
      }
      if (result?.error) {
        if (result.error.message?.includes('Invalid login credentials')) {
          setError('Ungültige Anmeldedaten. Bitte prüfe E-Mail und Passwort.');
        } else if (result.error.message?.includes('Email not confirmed')) {
          setError('Bitte bestätige deine E-Mail-Adresse über den Link in deiner E-Mail.');
        } else if (result.error.message?.includes('User already registered')) {
          setError('Diese E-Mail-Adresse ist bereits registriert. Versuche dich anzumelden.');
        } else {
          setError(result.error.message);
        }
      }
    } catch (err: any) {
      setError('Verbindungsfehler. Bitte versuche es später erneut.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAuth();
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f1b12 0%, #1a2a1d 100%)',
      p: 2,
      ...style,
    }}>
      <FancyPaper elevation={24} sx={{ ...paperStyle }}>
        <GlowTitle variant="h4">{title}</GlowTitle>
        {subtitle && <Typography sx={{ color: '#24ffbd', textAlign: 'center', mb: 2, fontWeight: 500 }}>{subtitle}</Typography>}
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          centered
          sx={{
            mb: 1,
            '& .MuiTab-root': {
              color: 'text.secondary',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.27s',
              '&:hover': {
                color: 'primary.light',
                transform: 'scale(1.03)',
              },
            },
            '& .Mui-selected': {
              color: '#00ff99',
              textShadow: '0 0 10px #00ff9955',
            },
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(90deg, #00ff99, #36d1c4)',
              height: 3,
              borderRadius: 2,
              boxShadow: '0 0 12px #00ff9966',
            },
          }}
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <Box mt={3} display="flex" flexDirection="column" gap={2}>
          <GlowInput
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={loading}
            colorVariant="accent"
            required
            autoComplete="email"
          />
          <GlowInput
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={loading}
            colorVariant="accent"
            required
            autoComplete="current-password"
          />
          <Collapse in={!!success}>
            {success && (
              <Alert severity="success" variant="filled" sx={{ bgcolor: 'success.main', color: 'white', borderRadius: 2, fontWeight: 600 }}>{success}</Alert>
            )}
          </Collapse>
          <Collapse in={!!error}>
            {error && (
              <Alert severity="error" variant="filled" sx={{ bgcolor: 'error.main', color: 'white', borderRadius: 2, fontWeight: 600 }}>{error}</Alert>
            )}
          </Collapse>
          <GlowingButton
            variant="contained"
            onClick={handleAuth}
            disabled={loading || !email || !password}
            size="large"
            colorVariant="primary"
            glowIntensity={1.2}
            style={{
              fontWeight: 'bold',
              fontSize: '1.08rem',
              letterSpacing: '.08em',
              padding: '12px 0',
              borderRadius: 8,
            }}
          >
            {loading ? 'Lädt…' : tab === 0 ? 'Anmelden' : 'Registrieren'}
          </GlowingButton>
        </Box>
      </FancyPaper>
    </Box>
  );
};

export default GlowLogin;
