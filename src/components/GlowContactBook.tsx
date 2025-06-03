import React, { useState, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowContact, { GlowContactProps } from './GlowContact';
import GlowInput from './GlowInput';
import GlowIconButton from './GlowIconButton';
import AddIcon from '@mui/icons-material/PersonAddAlt';

const BookHeader = styled('div')({
  fontWeight: 900,
  fontSize: 26,
  letterSpacing: '.031em',
  padding: '18px 18px 4px 18px',
  color: '#fff',
  textShadow: '0 0 16px #8b5cf6b6,0 2px 18px #38bdf8aa',
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  position: 'relative',
});
const ListWrap = styled(Box)({
  maxHeight: 500,
  overflowY: 'auto',
  padding: '0 4px',
  marginTop: 2,
  marginBottom: 6,
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  scrollbarWidth: 'thin',
});

export interface GlowContactBookGroup {
  label: React.ReactNode;
  contacts: GlowContactProps[];
}

export interface GlowContactBookProps {
  contacts: GlowContactProps[];
  groups?: GlowContactBookGroup[];
  showSearch?: boolean;
  placeholder?: string;
  header?: React.ReactNode;
  addContactHandler?: () => void;
  style?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
}

const GlowContactBook: React.FC<GlowContactBookProps> = ({
  contacts = [],
  groups,
  showSearch = true,
  placeholder = 'Search contacts…',
  header = 'Contacts',
  addContactHandler,
  style,
  cardStyle,
  listStyle,
}) => {
  const [query, setQuery] = useState('');

  // Compose the filtered contacts
  const filteredContacts = useMemo(() => {
    if (!query) return contacts;
    return contacts.filter((c) => {
      const name =
        typeof c.name === 'string'
          ? c.name
          : (c.name as any)?.props?.children?.toString?.() ?? '';
      return name.toLowerCase().includes(query.toLowerCase());
    });
  }, [contacts, query]);

  return (
    <GlowCard
      glass
      glow
      animated
      gradient="linear-gradient(120deg,#181b39 55%,#38bdf855 110%)"
      borderRadius={30}
      style={{ maxWidth: 410, minWidth: 300, width: '100%', ...style, ...cardStyle }}
    >
      <BookHeader>
        {header}
        {typeof addContactHandler === 'function' && (
          <GlowIconButton
            colorVariant="accent"
            glow
            animated
            aria-label="Add contact"
            shape="circle"
            onClick={addContactHandler}
            style={{ marginLeft: 'auto' }}
          >
            <AddIcon />
          </GlowIconButton>
        )}
      </BookHeader>
      {showSearch && (
        <Box sx={{ px: 2, py: 1 }}>
          <GlowInput
            label={placeholder}
            value={query}
            onChange={e => setQuery(e.target.value)}
            colorVariant="primary"
            leadingIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6.3" stroke="#38bdf8" strokeWidth="2"/><path d="M15.3 15.6l-2.6-2.6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/></svg>}
          />
        </Box>
      )}
      <ListWrap style={listStyle}>
        {groups && groups.length > 0
          ? groups.map((grp, idx) => (
              <div key={idx}>
                <div style={{
                  fontWeight: 600,
                  color: '#05ffa1',
                  fontSize: 15.5,
                  padding: '17px 17px 6px 17px',
                  textShadow: '0 0 10px #8b5cf6bb,0 2px 10px #38bdf888',
                }}>{grp.label}</div>
                {grp.contacts.length === 0 && (
                  <div style={{ color: '#fff9', fontSize: 15, paddingLeft: 17, marginBottom: 8 }}>No contacts</div>
                )}
                {grp.contacts.map((c, i) => (
                  <GlowContact key={i} {...c} />
                ))}
              </div>
            ))
          : filteredContacts.length === 0
            ? <div style={{ color: '#fff8', padding: '20px', textAlign: 'center', fontSize: 16 }}>No contacts found</div>
            : filteredContacts.map((c, i) => <GlowContact key={i} {...c} />)}
      </ListWrap>
    </GlowCard>
  );
};

export default GlowContactBook;
