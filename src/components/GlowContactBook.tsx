import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Fab,
  Box,
  IconButton,
  List,
  Slide,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {
  Contacts as ContactsIcon,
  Close as CloseIcon,
  QrCode as QrCodeIcon,
  PersonAdd as PersonAddIcon,
  Search as SearchIcon,
  PersonPin as PersonPinIcon,
} from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';
import GlowContact, { GlowContactProps } from './GlowContact';
export interface GlowContactBookProps {
  open: boolean;
  onClose: () => void;
}

const SlideTransition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const exampleContacts: GlowContactProps[] = [
  {
    id: '1',
    name: 'Alex Chen',
    email: 'alex.chen@growly.app',
    status: 'online',
    isVerified: true,
    avatar: '',
    lastSeen: new Date(),
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    email: 'maria.r@garden.com',
    status: 'away',
    isVerified: true,
    avatar: '',
    lastSeen: new Date(Date.now() - 3600000),
  },
  {
    id: '3',
    name: 'Tom Wilson',
    email: 'tom.wilson@plants.io',
    status: 'offline',
    isVerified: false,
    avatar: '',
    lastSeen: new Date(Date.now() - 86400000),
  },
];

const GlowContactBook: React.FC<GlowContactBookProps> = ({ open, onClose }) => {
  const [contacts, setContacts] = useState<GlowContactProps[]>(exampleContacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });

  const filteredContacts = useMemo(
    () =>
      contacts.filter(
        c =>
          (typeof c.name === 'string'
            ? c.name.toLowerCase()
            : '')
            .includes(searchQuery.toLowerCase()) ||
          (c.email || '').toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [contacts, searchQuery]
  );

  const handleDeleteContact = (contactId: string) => {
    setContacts(prev => prev.filter(c => c.id !== contactId));
  };

  const handleShareContact = () => {
    // stub
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      TransitionComponent={SlideTransition}
      PaperProps={{
        sx: {
          background: 'rgba(26,42,29,0.98)',
          backdropFilter: 'blur(25px)',
          border: '1px solid rgba(0,255,153,0.4)',
          borderRadius: 4,
          boxShadow: '0 25px 80px rgba(0,255,153,0.25)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '70vh',
          maxHeight: '90vh',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background:
              'linear-gradient(90deg,transparent,#00ff99,#36d1c4,#00e676,#00ff99,transparent)',
            animation: 'shimmer 4s ease-in-out infinite',
          },
          '@keyframes shimmer': {
            '0%': { opacity: 0.3 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.3 },
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0,255,153,0.2)',
          pt: 3,
          pb: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ContactsIcon
            sx={{
              color: '#00ff99',
              filter: 'drop-shadow(0 0 8px rgba(0,255,153,0.6))',
              fontSize: 28,
            }}
          />
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                background: 'linear-gradient(45deg,#00ff99,#36d1c4,#00e676)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 'bold',
                filter: 'drop-shadow(0 0 10px rgba(0,255,153,0.3))',
              }}
            >
              Kontakte
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {contacts.length} Gartenfreunde
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            sx={{
              background: 'linear-gradient(45deg,#00ff99,#36d1c4)',
              color: 'white',
              width: 40,
              height: 40,
            }}
          >
            <QrCodeIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={onClose} sx={{ color: '#00ff99' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <Box sx={{ p: 3, pb: 2 }}>
          <TextField
            fullWidth
            placeholder="Kontakte durchsuchen..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#00ff99' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                background: 'rgba(0,255,153,0.05)',
                '& fieldset': { borderColor: 'rgba(0,255,153,0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(0,255,153,0.5)' },
                '&.Mui-focused fieldset': {
                  borderColor: '#00ff99',
                  boxShadow: '0 0 15px rgba(0,255,153,0.3)',
                },
              },
            }}
          />
        </Box>
        <List sx={{ px: 2, pb: 3 }}>
          {filteredContacts.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <PersonPinIcon
                sx={{
                  fontSize: 64,
                  color: 'rgba(0,255,153,0.3)',
                  mb: 2,
                }}
              />
              <Typography sx={{ color: 'text.secondary' }}>
                {searchQuery ? 'Keine Kontakte gefunden' : 'Noch keine Kontakte vorhanden'}
              </Typography>
            </Box>
          ) : (
            filteredContacts.map((contact, idx) => (
              <GlowContact
                key={contact.id || idx}
                {...contact}
                onDelete={() => handleDeleteContact(contact.id || '')}
                onShare={handleShareContact}
              />
            ))
          )}
        </List>
        {!showAddForm && (
          <Fab
            color="primary"
            onClick={() => setShowAddForm(true)}
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              background: 'linear-gradient(45deg,#00ff99,#36d1c4)',
              boxShadow: '0 8px 32px rgba(0,255,153,0.4)',
              transition: 'all 0.3s',
              '&:hover': {
                background: 'linear-gradient(45deg,#00e676,#26c6da)',
                transform: 'scale(1.15)',
                boxShadow: '0 12px 40px rgba(0,255,153,0.6)',
              },
            }}
          >
            <PersonAddIcon />
          </Fab>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GlowContactBook;
