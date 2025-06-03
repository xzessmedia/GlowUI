import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

// Import some MUI Material icons!
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BuildIcon from '@mui/icons-material/Build';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExtensionIcon from '@mui/icons-material/Extension';
import FlagIcon from '@mui/icons-material/Flag';
import MoodIcon from '@mui/icons-material/Mood';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import PaletteIcon from '@mui/icons-material/Palette';
import PetsIcon from '@mui/icons-material/Pets';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchIcon from '@mui/icons-material/Search';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const iconTable = [
  { name: "Home", icon: HomeIcon },
  { name: "Favorite", icon: FavoriteIcon },
  { name: "Star", icon: StarIcon },
  { name: "Bolt", icon: BoltIcon },
  { name: "CheckCircle", icon: CheckCircleIcon },
  { name: "Car", icon: DirectionsCarIcon },
  { name: "Email", icon: EmailIcon },
  { name: "Face", icon: FaceIcon },
  { name: "Time", icon: AccessTimeIcon },
  { name: "Build", icon: BuildIcon },
  { name: "Trophy", icon: EmojiEventsIcon },
  { name: "Extension", icon: ExtensionIcon },
  { name: "Flag", icon: FlagIcon },
  { name: "Mood", icon: MoodIcon },
  { name: "Night", icon: NightsStayIcon },
  { name: "Palette", icon: PaletteIcon },
  { name: "Pets", icon: PetsIcon },
  { name: "Rocket", icon: RocketLaunchIcon },
  { name: "Search", icon: SearchIcon },
  { name: "Esports", icon: SportsEsportsIcon },
  { name: "Sunny", icon: WbSunnyIcon },
  { name: "Cloud", icon: CloudIcon },
  { name: "Flash", icon: FlashOnIcon },
  { name: "Music", icon: MusicNoteIcon },
  { name: "External", icon: OpenInNewIcon },
];

const gradientPalette = [
  'linear-gradient(135deg,#ff89e9 20%,#7f5fff 100%)',
  'linear-gradient(135deg,#e8ff6b 0%,#95ffa8 100%)',
  'linear-gradient(135deg,#6be3ff 0%,#5f8bff 100%)',
  'linear-gradient(135deg,#fff07f 0%,#ff8a00 100%)',
  'linear-gradient(135deg,#7effcb 0%,#00bfae 100%)',
  'linear-gradient(135deg,#ef765d 0%,#f960c4 100%)',
  'linear-gradient(135deg,#c471f5 0%,#fa71cd 100%)',
  'linear-gradient(135deg,#ffc371 0%,#ff5f6d 100%)'
];

const fancyShadow = (color: string) => `
  0 0 14px 2px ${color},
  0 0 24px 0px ${color}bb,
  0 2px 32px 0px #0004
`;

const FancyIconBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'gradientIdx',
})<{ gradientIdx: number }>(
  ({ gradientIdx }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: gradientPalette[gradientIdx % gradientPalette.length],
    borderRadius: 22,
    padding: '30px 18px 16px 18px',
    margin: '12px 0',
    position: 'relative',
    boxShadow: fancyShadow('#fff'),
    transition: 'transform 0.19s, box-shadow 0.28s, background 0.3s',
    cursor: 'pointer',
    outline: 'none',
    border: '2.5px solid #fff2',
    willChange: 'box-shadow, transform',
    '&:hover, &:focus': {
      boxShadow: fancyShadow('#fff9'), // brighter
      transform: 'scale(1.14) rotate(-3deg)',
      zIndex: 3,
      background: gradientPalette[(gradientIdx + 2) % gradientPalette.length]
    }
  })
);

const AnimatedGlowCircle = styled('span')<{ gradientIdx: number }>(({ gradientIdx }) => ({
  position: 'absolute',
  top: '-22%',
  left: '-20%',
  width: '70px',
  height: '70px',
  background: gradientPalette[(gradientIdx + 1) % gradientPalette.length],
  filter: 'blur(22px) brightness(1.7) opacity(0.7)',
  zIndex: 1,
  borderRadius: '56%',
  animation: 'pulseGlow 2.1s infinite alternate cubic-bezier(.77,.29,.4,1.18)',
  pointerEvents: 'none',
  '@keyframes pulseGlow': {
    '0%': { opacity: 0.62, transform: 'scale(0.9)' },
    '100%': { opacity: 0.94, transform: 'scale(1.18) rotate(5deg)' }
  }
}));

const IconName = styled('div')({
  marginTop: 12,
  color: '#fff',
  fontWeight: 700,
  fontSize: 15,
  letterSpacing: 0.5,
  textShadow: '0 1px 6px #333, 0 0 9px #fff8',
  textAlign: 'center'
});

const GlowIconsGrid = styled(Grid)({
  width: '100%',
  margin: '0 auto',
  maxWidth: 990,
  padding: 24,
  alignItems: 'stretch',
  background: 'transparent'
});

const GlowIcons: React.FC = () => (
  <div style={{
    background: 'radial-gradient(ellipse at 20% 60%, #10192a 30%, #161c29 78%, #1b1431 100%)',
    borderRadius: 32,
    padding: '32px 8px 24px 8px',
    boxShadow: '0 0 80px #8b5cf6aa, 0 0 60px #2ecce3b2',
    margin: '42px auto',
    maxWidth: 1080,
  }}>
    <h2 style={{
      textAlign: 'center',
      color: '#fff',
      fontWeight: 900,
      fontSize: 36,
      letterSpacing: 2,
      marginBottom: 32,
      textShadow: '0 0 24px #7f5fff, 0 2px 20px #fff4'
    }}>
      🚀 Glow Icons: Ultra Fancy Icon Table
    </h2>
    <GlowIconsGrid container spacing={2}>
      {iconTable.map(({ name, icon: IconComp }, idx) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={name}>
          <Tooltip title={name} arrow enterDelay={200} leaveDelay={150}>
            <FancyIconBox
              tabIndex={0}
              gradientIdx={idx}
              aria-label={name + ' Icon'}
            >
              <AnimatedGlowCircle gradientIdx={idx} />
              <span style={{
                fontSize: 46,
                color: '#fff',
                textShadow: `
                  0 0 16px #fff,
                  0 0 22px #fff7,
                  0 2px 16px #2229
                `,
                zIndex: 2,
                filter: 'drop-shadow(0 0 11px #fff8)'
              }}>
                <IconComp fontSize="inherit" />
              </span>
              <IconName>{name}</IconName>
            </FancyIconBox>
          </Tooltip>
        </Grid>
      ))}
    </GlowIconsGrid>
  </div>
);

export default GlowIcons;