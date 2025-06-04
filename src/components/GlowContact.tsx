import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Box, Chip, Badge, Typography } from '@mui/material';
import { Share as ShareIcon, Delete as DeleteIcon, Verified as VerifiedIcon } from '@mui/icons-material';
export interface GlowContactProps {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  avatar?: string;
  status?: 'online' | 'away' | 'offline';
  isVerified?: boolean;
  lastSeen?: Date;
  onShare?: () => void;
  onDelete?: () => void;
}

const getStatusColor = (status: GlowContactProps['status']) => {
  switch (status) {
    case 'online': return '#00ff99';
    case 'away': return '#ffc107';
    case 'offline': return '#757575';
    default: return '#757575';
  }
};

const getStatusText = (contact: GlowContactProps) => {
  switch (contact.status) {
    case 'online': return 'Online';
    case 'away': return 'Abwesend';
    case 'offline':
      if (contact.lastSeen) {
        const diffMs = Date.now() - contact.lastSeen.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffHours / 24);
        if (diffDays > 0) return `Vor ${diffDays} Tag${diffDays > 1 ? 'en' : ''}`;
        if (diffHours > 0) return `Vor ${diffHours} Stunde${diffHours > 1 ? 'n' : ''}`;
        return 'Gerade offline';
      }
      return 'Offline';
    default: return 'Unbekannt';
  }
};

const GlowContact = ({
  name,
  email,
  phone,
  avatar,
  status = 'offline',
  isVerified,
  lastSeen,
  onShare,
  onDelete
}: GlowContactProps) => (
  <ListItem
    sx={{
      borderRadius: 2,
      mb: 1,
      transition: 'all 0.3s',
      '&:hover': {
        background: 'rgba(0,255,153,0.08)',
        transform: 'translateX(8px)',
        boxShadow: '0 4px 20px rgba(0,255,153,0.15)'
      }
    }}
  >
    <ListItemAvatar>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: getStatusColor(status), border: '2px solid #1A2A1D', boxShadow: `0 0 8px ${getStatusColor(status)}` }} />
        }
      >
        <Avatar
          src={avatar}
          sx={{
            background: 'linear-gradient(45deg,#00ff99,#36d1c4)',
            border: '2px solid rgba(0,255,153,0.3)',
            boxShadow: '0 0 15px rgba(0,255,153,0.2)',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}
        >
          {name.charAt(0).toUpperCase()}
        </Avatar>
      </Badge>
    </ListItemAvatar>
    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ color: 'white', fontWeight: 500 }}>{name}</Typography>
          {isVerified && (
            <Chip icon={<VerifiedIcon sx={{ fontSize: 14, color: 'white' }} />} label="Verifiziert" size="small" sx={{ height: 20, background: 'linear-gradient(45deg,#00ff99,#36d1c4)', color: 'white', fontWeight: 'bold', fontSize: '0.7rem', minWidth: 20, pl: 0.2, pr: 1 }} />
          )}
        </Box>
      }
      secondary={
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {email && <Typography variant="body2" sx={{ color: 'text.secondary' }}>{email}</Typography>}
          <Typography variant="caption" sx={{ color: getStatusColor(status), fontWeight: 500, filter: `drop-shadow(0 0 5px ${getStatusColor(status)})`, }}>{getStatusText({ name, email, status, lastSeen })}</Typography>
        </Box>
      }
    />
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      <IconButton size="small" sx={{ color: '#00ff99', transition: 'all 0.3s', '&:hover': { background: 'rgba(0,255,153,0.1)', transform: 'scale(1.2)', filter: 'drop-shadow(0 0 8px rgba(0,255,153,0.5))' } }} onClick={onShare}>
        <ShareIcon fontSize="small" />
      </IconButton>
      <IconButton size="small" sx={{ color: '#f44336', transition: 'all 0.3s', '&:hover': { background: 'rgba(244,67,54,0.1)', transform: 'scale(1.2)', filter: 'drop-shadow(0 0 8px rgba(244,67,54,0.5))' } }} onClick={onDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  </ListItem>
);

export default GlowContact;
