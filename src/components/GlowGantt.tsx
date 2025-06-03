import React, { useState, useMemo } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowAvatar from './GlowAvatar';

const ganttGlowAnim = keyframes`
  0%,100% { box-shadow: 0 0 25px 6px #05ffa150, 0 0 50px 12px #8b5cf640; }
  50% { box-shadow: 0 0 35px 10px #38bdf870, 0 0 70px 20px #8b5cf650; }
`;

const GanttHeader = styled('div')({
  fontWeight: 900,
  fontSize: 24,
  letterSpacing: '.03em',
  color: '#fff',
  marginBottom: 16,
  textShadow: '0 0 18px #8b5cf677, 0 2px 20px #38bdf888',
  textAlign: 'center',
});

const GanttGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: 0,
  borderRadius: 16,
  overflow: 'hidden',
  border: '1px solid #38bdf825',
});

const TaskColumn = styled('div')({
  background: 'linear-gradient(135deg, #181b39 0%, #1e1f47 100%)',
  borderRight: '1px solid #38bdf830',
});

const ChartColumn = styled('div')({
  background: 'linear-gradient(135deg, #0f1629 0%, #181b39 100%)',
  position: 'relative',
  overflowX: 'auto',
  minHeight: 400,
});

const TaskRow = styled('div')<{ featured?: boolean }>(({ featured }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 16px',
  minHeight: 60,
  borderBottom: '1px solid #38bdf820',
  background: featured 
    ? 'linear-gradient(90deg, #05ffa115 0%, #38bdf825 100%)'
    : 'transparent',
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const TaskInfo = styled('div')({
  flex: 1,
});

const TaskTitle = styled('div')<{ featured?: boolean }>(({ featured }) => ({
  fontWeight: 600,
  fontSize: 14,
  color: '#fff',
  marginBottom: 4,
  textShadow: featured 
    ? '0 0 12px #05ffa177'
    : '0 0 8px #8b5cf666',
}));

const TaskMeta = styled('div')({
  fontSize: 12,
  color: '#38bdf8',
  opacity: 0.8,
});

const ChartArea = styled('div')({
  position: 'relative',
  height: '100%',
  minWidth: 800,
});

const TimelineHeader = styled('div')({
  display: 'flex',
  height: 40,
  borderBottom: '1px solid #38bdf830',
  background: 'linear-gradient(135deg, #1a1d42 0%, #252952 100%)',
});

const TimelineCell = styled('div')({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  fontWeight: 600,
  color: '#05ffa1',
  borderRight: '1px solid #38bdf820',
  textShadow: '0 0 8px #05ffa166',
  '&:last-child': {
    borderRight: 'none',
  },
});

const ChartRow = styled('div')({
  position: 'relative',
  height: 60,
  borderBottom: '1px solid #38bdf820',
  '&:last-child': {
    borderBottom: 'none',
  },
});

const TaskBar = styled('div')<{ 
  startPercent: number; 
  widthPercent: number; 
  status?: 'completed' | 'in-progress' | 'pending' | 'overdue';
  featured?: boolean;
}>(({ startPercent, widthPercent, status = 'pending', featured }) => {
  const statusColors = {
    completed: { bg: '#05ffa1', shadow: '#05ffa160' },
    'in-progress': { bg: '#38bdf8', shadow: '#38bdf860' },
    pending: { bg: '#8b5cf6', shadow: '#8b5cf660' },
    overdue: { bg: '#ef4444', shadow: '#ef444460' },
  };
  
  const color = statusColors[status];
  
  return {
    position: 'absolute',
    left: `${startPercent}%`,
    width: `${widthPercent}%`,
    height: 32,
    top: 14,
    background: `linear-gradient(135deg, ${color.bg} 0%, ${color.bg}dd 100%)`,
    borderRadius: 8,
    boxShadow: `0 0 ${featured ? 20 : 12}px ${color.shadow}, 0 2px 8px rgba(0,0,0,0.3)`,
    animation: featured ? `${ganttGlowAnim} 4s infinite alternate` : undefined,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: `0 0 ${featured ? 25 : 16}px ${color.shadow}, 0 4px 12px rgba(0,0,0,0.4)`,
    },
  };
});

const TaskBarText = styled('span')({
  fontSize: 11,
  fontWeight: 600,
  color: '#fff',
  textShadow: '0 1px 2px rgba(0,0,0,0.8)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const StatusBadge = styled('span')<{ status?: 'completed' | 'in-progress' | 'pending' | 'overdue' }>(({ status = 'pending' }) => {
  const colors = {
    completed: { bg: '#05ffa1', text: '#0a3d2e' },
    'in-progress': { bg: '#38bdf8', text: '#0c4a6e' },
    pending: { bg: '#8b5cf6', text: '#3730a3' },
    overdue: { bg: '#ef4444', text: '#450a0a' },
  };
  
  return {
    display: 'inline-block',
    background: colors[status].bg,
    color: colors[status].text,
    fontWeight: 700,
    borderRadius: 4,
    fontSize: 10,
    padding: '2px 6px',
    textTransform: 'uppercase',
    letterSpacing: '.02em',
    boxShadow: `0 0 6px ${colors[status].bg}60`,
    marginTop: 2,
  };
});

export interface GlowGanttTask {
  id: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  startDate: Date;
  endDate: Date;
  status?: 'completed' | 'in-progress' | 'pending' | 'overdue';
  assignee?: {
    name: string;
    avatar?: string;
  };
  featured?: boolean;
  progress?: number; // 0-100
}

export interface GlowGanttProps {
  tasks: GlowGanttTask[];
  startDate?: Date;
  endDate?: Date;
  header?: React.ReactNode;
  timelineUnit?: 'days' | 'weeks' | 'months';
  style?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  onTaskClick?: (task: GlowGanttTask) => void;
}

const GlowGantt: React.FC<GlowGanttProps> = ({
  tasks = [],
  startDate: propStartDate,
  endDate: propEndDate,
  header = 'Project Timeline',
  timelineUnit = 'weeks',
  style,
  cardStyle,
  onTaskClick,
}) => {
  // Calculate date range
  const { startDate, endDate, timelineLabels } = useMemo(() => {
    if (tasks.length === 0) {
      const start = propStartDate || new Date();
      const end = propEndDate || new Date(start.getTime() + 30 * 24 * 60 * 60 * 1000);
      return { startDate: start, endDate: end, timelineLabels: [] };
    }

    const allDates = tasks.flatMap(task => [task.startDate, task.endDate]);
    const minDate = propStartDate || new Date(Math.min(...allDates.map(d => d.getTime())));
    const maxDate = propEndDate || new Date(Math.max(...allDates.map(d => d.getTime())));
    
    // Generate timeline labels
    const labels: string[] = [];
    const totalDays = Math.ceil((maxDate.getTime() - minDate.getTime()) / (24 * 60 * 60 * 1000));
    const segments = Math.min(totalDays, 12); // Max 12 segments
    
    for (let i = 0; i <= segments; i++) {
      const date = new Date(minDate.getTime() + (i * (maxDate.getTime() - minDate.getTime())) / segments);
      if (timelineUnit === 'days') {
        labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      } else if (timelineUnit === 'weeks') {
        labels.push(`Week ${Math.ceil(i / 7) + 1}`);
      } else {
        labels.push(date.toLocaleDateString('en-US', { month: 'short' }));
      }
    }
    
    return { startDate: minDate, endDate: maxDate, timelineLabels: labels };
  }, [tasks, propStartDate, propEndDate, timelineUnit]);

  // Calculate task bar positions
  const getTaskPosition = (task: GlowGanttTask) => {
    const totalDuration = endDate.getTime() - startDate.getTime();
    const taskStart = Math.max(task.startDate.getTime(), startDate.getTime());
    const taskEnd = Math.min(task.endDate.getTime(), endDate.getTime());
    
    const startPercent = ((taskStart - startDate.getTime()) / totalDuration) * 100;
    const widthPercent = ((taskEnd - taskStart) / totalDuration) * 100;
    
    return { startPercent, widthPercent };
  };

  return (
    <GlowCard
      glass
      glow
      animated
      gradient="linear-gradient(120deg, #181b39 55%, #38bdf844 115%)"
      borderRadius={32}
      style={{
        maxWidth: 1200,
        width: '100%',
        margin: '0 auto',
        ...style,
        ...cardStyle,
      }}
    >
      {header && <GanttHeader>{header}</GanttHeader>}
      
      <GanttGrid>
        <TaskColumn>
          <TaskRow style={{ background: 'linear-gradient(135deg, #252952 0%, #1a1d42 100%)', fontWeight: 700, color: '#05ffa1' }}>
            <TaskInfo>
              <div style={{ fontSize: 14, textShadow: '0 0 8px #05ffa166' }}>Tasks</div>
            </TaskInfo>
          </TaskRow>
          {tasks.map((task, index) => (
            <TaskRow key={task.id} featured={task.featured}>
              <TaskInfo>
                <TaskTitle featured={task.featured}>{task.title}</TaskTitle>
                {task.subtitle && <TaskMeta>{task.subtitle}</TaskMeta>}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                  <StatusBadge status={task.status} />
                  {task.assignee && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {task.assignee.avatar && (
                        <GlowAvatar
                          src={task.assignee.avatar}
                          alt={task.assignee.name}
                          colorVariant="primary"
                          shape="circle"
                          style={{ width: 16, height: 16 }}
                        />
                      )}
                      <span style={{ fontSize: 10, color: '#38bdf8', opacity: 0.8 }}>
                        {task.assignee.name}
                      </span>
                    </Box>
                  )}
                </Box>
              </TaskInfo>
            </TaskRow>
          ))}
        </TaskColumn>
        
        <ChartColumn>
          <ChartArea>
            <TimelineHeader>
              {timelineLabels.map((label, index) => (
                <TimelineCell key={index}>{label}</TimelineCell>
              ))}
            </TimelineHeader>
            
            {tasks.map((task, index) => {
              const { startPercent, widthPercent } = getTaskPosition(task);
              return (
                <ChartRow key={task.id}>
                  <TaskBar
                    startPercent={startPercent}
                    widthPercent={widthPercent}
                    status={task.status}
                    featured={task.featured}
                    onClick={() => onTaskClick?.(task)}
                  >
                    <TaskBarText>{task.title}</TaskBarText>
                  </TaskBar>
                </ChartRow>
              );
            })}
          </ChartArea>
        </ChartColumn>
      </GanttGrid>
    </GlowCard>
  );
};

export default GlowGantt;