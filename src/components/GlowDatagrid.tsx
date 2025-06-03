import React, { useState, ReactNode } from 'react';
import { styled, keyframes } from '@mui/material/styles';

const outerGlow = keyframes`
  0%,100% { box-shadow: 0 0 30px 10px #8b5cf655, 0 0 90px 32px #38bdf880; }
  50% { box-shadow: 0 0 90px 1px #05ffa192, 0 0 160px 42px #9333ea90; }
`;

// Container with neon/glass/gradient border
const GlowTableWrapper = styled('div')<{
  animated?: boolean;
  gradient?: string;
  borderRadius?: number | string;
  borderColor?: string;
  borderWidth?: number;
}>(
  ({
    animated = true,
    gradient = 'linear-gradient(115deg, #6366f1 50%, #38bdf8 100%)',
    borderRadius = 26,
    borderColor = '#8b5cf6',
    borderWidth = 4,
  }) => ({
    padding: 0,
    background: gradient,
    borderRadius,
    boxShadow: `0 0 32px 9px ${borderColor}77`,
    border: `${borderWidth}px solid ${borderColor}`,
    animation: animated ? `${outerGlow} 5.8s alternate infinite` : undefined,
    overflow: 'hidden',
    transition: 'box-shadow 0.24s, border-color 0.18s',
  })
);

// Ultra-fancy table styles!
const StyledTable = styled('table')({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  color: '#fff',
  fontFamily: "inherit",
  background: 'rgba(10,20,44,0.48)',
});
const StyledThead = styled('thead')({
  background: 'linear-gradient(90deg,#38bdf8 0,#9333ea 80%)',
});
const Th = styled('th')<{
  align?: 'left' | 'center' | 'right';
  colGlow?: string;
}>(({ align = 'left', colGlow = "#38bdf8" }) => ({
  padding: '18px 18px 10px 18px',
  textAlign: align,
  fontWeight: 900,
  fontSize: 16.5,
  letterSpacing: '0.02em',
  textShadow: `0 0 8px ${colGlow}`,
  borderBottom: `2px solid ${colGlow}55`,
  position: 'relative',
  background: 'transparent',
  zIndex: 2,
  whiteSpace: 'nowrap',
  userSelect: 'none',
}));
const Td = styled('td')<{
  align?: 'left' | 'center' | 'right';
}>(({ align = 'left' }) => ({
  padding: '15px 18px',
  textAlign: align,
  fontSize: 16,
  fontWeight: 500,
  background: 'rgba(44,24,72,0.19)',
  borderBottom: '1.2px solid #8b5cf622',
  transition: 'background 0.13s',
  whiteSpace: 'nowrap',
}));

const Tr = styled('tr')<{
  hoverGlow?: boolean;
}>(({ hoverGlow = true }) => ({
  transition: 'background 0.14s, box-shadow 0.18s, border-radius 0.2s',
  '&:hover': hoverGlow
    ? {
        background: 'linear-gradient(90deg,#9333ea22 30%,#38bdf845 100%)',
        boxShadow: '0 0 16px 3px #8b5cf655',
        zIndex: 3,
      }
    : {},
}));

// Types
export interface GlowDatagridColumn<RowType = any> {
  key: string;
  align?: 'left' | 'center' | 'right';
  header: ReactNode | ((col: GlowDatagridColumn<RowType>) => ReactNode);
  render?: (row: RowType, col: GlowDatagridColumn<RowType>, rowIndex: number) => ReactNode;
  getValue?: (row: RowType) => any; // Used for cell display if no render
  sortable?: boolean;
  sortFn?: (a: RowType, b: RowType) => number;
  colGlow?: string;
  width?: number | string;
  style?: React.CSSProperties;
}

export interface GlowDatagridProps<RowType = any> {
  columns: GlowDatagridColumn<RowType>[];
  data: RowType[];
  keyField?: string;
  gradient?: string;
  borderRadius?: number | string;
  borderColor?: string;
  borderWidth?: number;
  animated?: boolean;
  hoverGlow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  header?: ReactNode;
  footer?: ReactNode;
  emptyMessage?: ReactNode;
}

// Helper to sort data
function sortData<RowType>(
  data: RowType[], 
  col: GlowDatagridColumn<RowType>, 
  direction: 'asc' | 'desc'
) {
  if (!col.sortFn && !col.getValue) return data;
  const getValue = col.getValue || ((row: RowType) => (row as any)[col.key]);
  const cmp = col.sortFn || ((a: RowType, b: RowType) => {
    const vA = getValue(a); const vB = getValue(b);
    return vA > vB ? 1 : vA < vB ? -1 : 0;
  });
  const sorted = [...data].sort(cmp);
  if (direction === 'desc') sorted.reverse();
  return sorted;
}

const GlowDatagrid = <RowType extends {} = any>({
  columns,
  data,
  keyField,
  gradient,
  borderRadius,
  borderColor,
  borderWidth,
  animated = true,
  hoverGlow = true,
  className,
  style,
  header,
  footer,
  emptyMessage = <span style={{ color: '#fff9', fontWeight: 500 }}>No data</span>,
}: GlowDatagridProps<RowType>) => {
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  let rows = data;

  // Sorting logic
  const sortColumn = columns.find(col => col.key === sortCol && (col.sortable || col.sortFn));
  if (sortColumn) rows = sortData(rows, sortColumn, sortDir);

  return (
    <GlowTableWrapper
      animated={animated}
      gradient={gradient}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
      className={className}
      style={style}
    >
      {header && <div style={{ padding: "18px 18px 0 18px", fontWeight: 800, fontSize: 21 }}>{header}</div>}
      <StyledTable>
        <StyledThead>
          <tr>
            {columns.map((col, idx) => (
              <Th
                key={col.key}
                align={col.align}
                colGlow={col.colGlow}
                style={{
                  width: col.width,
                  ...col.style,
                  cursor: col.sortable ? 'pointer' : undefined
                }}
                onClick={() => {
                  if (col.sortable) {
                    if (sortCol === col.key) setSortDir(dir => (dir === 'asc' ? 'desc' : 'asc'));
                    else {
                      setSortCol(col.key);
                      setSortDir('asc');
                    }
                  }
                }}
              >
                {typeof col.header === 'function' ? col.header(col) : col.header}
                {col.sortable && (
                  <span style={{
                    marginLeft: 7,
                    fontSize: 15,
                    opacity: 0.68,
                    userSelect: 'none',
                  }}>
                    {sortCol === col.key ? (sortDir === 'asc' ? '▲' : '▼') : '⬍'}
                  </span>
                )}
              </Th>
            ))}
          </tr>
        </StyledThead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <Td align="center" colSpan={columns.length}>
                {emptyMessage}
              </Td>
            </tr>
          ) : rows.map((row, i) => (
            <Tr key={keyField ? (row as any)[keyField] : i} hoverGlow={hoverGlow}>
              {columns.map((col, j) => (
                <Td key={col.key}
                  align={col.align}
                  style={col.style}
                >
                  {col.render
                    ? col.render(row, col, i)
                    : col.getValue
                    ? col.getValue(row)
                    : (row as any)[col.key]}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </StyledTable>
      {footer && <div style={{ padding: "12px 18px 16px 18px" }}>{footer}</div>}
    </GlowTableWrapper>
  );
};

export default GlowDatagrid;