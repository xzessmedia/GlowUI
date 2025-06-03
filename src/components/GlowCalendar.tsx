import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GlowCard from './GlowCard';

const pulseAnim = keyframes`
  0%,100% { filter: drop-shadow(0 0 10px #8b5cf622); }
  40% { filter: drop-shadow(0 0 25px #38bdf877); }
`;

const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px 28px 2px 28px',
  fontWeight: 900,
  fontSize: 25,
  color: '#fff',
  letterSpacing: '.01em',
  textShadow: '0 1px 7px #38bdf8ad',
});
const DaysRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: 5,
  margin: '4px 0 7px 0',
});
const DayCell = styled('button')<{
  $today: boolean;
  $selected: boolean;
  $disabled: boolean;
  $event: boolean;
  $color: string;
}>(({ $today, $selected, $disabled, $event, $color }) => ({
  aspectRatio: '1/1',
  minWidth: 34,
  borderRadius: 12,
  border: 'none',
  fontSize: 18,
  fontWeight: 700,
  color: $disabled ? '#94a3b8' : '#fff',
  background:
    $selected
      ? `linear-gradient(89deg,${$color},#38bdf8 95%)`
      : $today
      ? `linear-gradient(93deg,#6366f1 54%,#38bdf8 120%)`
      : 'rgba(26,38,45,0.3)',
  boxShadow:
    $selected
      ? `0 0 22px 8px ${$color}99, 0 0 54px 11px #38bdf888`
      : $today
      ? '0 0 16px 5px #6366f144'
      : $event
      ? `0 0 16px 3px #facc1572`
      : '0 2px 12px #0002',
  transition: 'background .17s,box-shadow .18s,filter .12s',
  opacity: $disabled ? 0.6 : 0.97,
  cursor: $disabled ? 'default' : 'pointer',
  outline: $selected ? '3px solid #fff4' : 'none',
  position: 'relative',
  ':hover': $disabled
    ? undefined
    : {
        filter: 'brightness(1.13)',
        boxShadow: `0 0 28px 9px ${$color}cc, 0 0 60px 22px #8b5cf688`,
      },
  animation: $selected
    ? `${pulseAnim} 2s infinite alternate`
    : undefined,
}));

const EventDot = styled('span')<{
  $color: string;
}>(({ $color }) => ({
  display: 'inline-block',
  width: 9,
  height: 9,
  borderRadius: '50%',
  position: 'absolute',
  left: '50%',
  bottom: 7,
  transform: 'translateX(-50%)',
  background: `linear-gradient(93deg,${$color}99, #facc1555 75%)`,
  boxShadow: `0 0 4px 2px ${$color}88`,
}));

// Weekday names
const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

function addMonths(date: Date, n: number) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + n);
  return d;
}

function formatMonthYear(date: Date) {
  return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

function toISODate(d: Date) {
  return d.toISOString().slice(0, 10);
}

const palette = ['#8b5cf6', '#38bdf8', '#f472b6', '#facc15', '#00ff99', '#05ffa1'];

export interface GlowCalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: (date: Date) => boolean;
  events?: { [dateISO: string]: { color?: string; label?: string }[] };
  palette?: string[];
  glow?: boolean;
  animated?: boolean;
  gradient?: string;
  style?: React.CSSProperties;
  cardProps?: any;
}

const GlowCalendar: React.FC<GlowCalendarProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabledDates,
  events = {},
  palette: userPalette,
  glow = true,
  animated = true,
  gradient,
  style,
  cardProps,
}) => {
  const [viewDate, setViewDate] = React.useState(
    value ? new Date(value) : new Date()
  );
  React.useEffect(() => {
    if (value) setViewDate(new Date(value));
  }, [value]);

  const start = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  let weekDay = start.getDay();
  if (weekDay === 0) weekDay = 7; // So Monday is always 1
  const days: Date[] = [];
  for (let i = 1 - weekDay; i <= 35 - weekDay; ++i) {
    days.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), i + 1));
  }

  const today = new Date();
  const colors = userPalette || palette;

  return (
    <GlowCard
      gradient={gradient}
      glow={glow}
      animated={animated}
      borderRadius={31}
      style={Object.assign({minWidth:350, maxWidth:402, margin:'0 auto', position:'relative'}, style)}
      {...cardProps}
    >
      <Header>
        <IconButton
          size="small"
          aria-label="Vormonat"
          onClick={() => setViewDate(addMonths(viewDate, -1))}
          sx={{ color: colors[1], mr: 2 }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <span style={{flex:1, textAlign:'center'}}>{formatMonthYear(viewDate)}</span>
        <IconButton
          size="small"
          aria-label="Nächster Monat"
          onClick={() => setViewDate(addMonths(viewDate, 1))}
          sx={{ color: colors[2], ml: 2 }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Header>
      <DaysRow style={{marginTop:4}}>
        {WEEKDAYS.map((d,i)=>(
          <div key={d} style={{ fontWeight: 800, color: colors[i % colors.length], textShadow: `0 1px 9px ${colors[i % colors.length]}88`, fontSize:15.7, textAlign:'center', letterSpacing:'.03em' }}>{d}</div>
        ))}
      </DaysRow>
      <DaysRow style={{marginBottom:10}}>
        {days.map((d, idx) => {
          const isCurrentMonth = d.getMonth() === viewDate.getMonth();
          const isToday = isSameDay(d, today);
          const isSelected = value ? isSameDay(d, value) : false;
          const isDisabled =
            (!isCurrentMonth) ||
            (minDate && d < minDate) ||
            (maxDate && d > maxDate) ||
            !!(disabledDates && disabledDates(d));
          const evtArr = events[toISODate(d)] || [];
          const mainColor = isSelected ? colors[0] : isToday ? colors[1] : colors[idx % colors.length];
          return (
            <DayCell
              key={idx}
              $today={isToday}
              $selected={isSelected}
              $disabled={isDisabled}
              $event={!!evtArr.length}
              $color={mainColor}
              tabIndex={isDisabled? -1 : 0}
              aria-disabled={isDisabled}
              aria-current={isToday}
              aria-selected={isSelected}
              onClick={() => {
                if (!isDisabled && onChange) onChange(new Date(d));
              }}
            >
              <span>{d.getDate()}</span>
              {evtArr.map((e,i)=>(<EventDot key={i} $color={e.color || colors[3+i%colors.length]} />))}
            </DayCell>
          );
        })}
      </DaysRow>
    </GlowCard>
  );
};

export default GlowCalendar;
