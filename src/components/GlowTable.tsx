import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';
import GlowTypography from './GlowTypography';
import { Fab, Popover, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export type GlowTableExportFormat = 'csv' | 'json' | 'xml' | 'xls' | 'pdf';

const TableWrap = styled(Box)({
  width: '100%',
  overflowX: 'auto',
  borderRadius: 18,
  background: 'linear-gradient(98deg,rgba(32,34,61,0.97) 60%,#181b39 166%)',
  boxShadow: '0 10px 40px #20203144',
  padding: 0,
});

const GlowTableEl = styled('table')({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  fontFamily: 'inherit',
  fontSize: 18,
  color: '#f8fafc',
  margin: 0,
  background: 'none',
});

const TheadTr = styled('tr')({});

const Th = styled('th')({
  background: 'rgba(42,48,88,0.92)',
  color: '#e0e7ef',
  fontWeight: 800,
  fontSize: 17.5,
  border: 'none',
  padding: '12px 20px 13px 20px',
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  letterSpacing: 0.02,
  position: 'relative',
  userSelect: 'none',
  cursor: 'pointer',
});

const Td = styled('td')({
  background: 'rgba(32,39,61,0.82)',
  border: 'none',
  padding: '12px 20px',
  fontSize: 17,
  fontWeight: 500,
  color: '#f4f7fa',
  borderBottom: '1.5px solid #38455c',
  textAlign: 'left',
  letterSpacing: 0.01,
});

const FabWrap = styled('div')({
  position: 'absolute',
  bottom: 20,
  right: 26,
  zIndex: 21,
});

const FabButtonStyled = styled(Fab)({
  background: 'linear-gradient(97deg, #6366f1 50%, #38bdf8 120%)',
  color: '#fff',
  boxShadow: '0 4px 24px #6366f144',
  fontWeight: 900,
  fontSize: 21,
  '&:hover': { background: 'linear-gradient(93deg, #38bdf8 40%, #6366f1 100%)' }
});

export interface GlowTableProps {
  columns: string[];
  data: { [key: string]: any }[];
  headerLabels?: { [col: string]: React.ReactNode };
  columnStyles?: { [col: string]: React.CSSProperties };
  align?: { [col: string]: 'left' | 'center' | 'right' };
  striped?: boolean;
  hoverHighlight?: boolean;
  sortable?: boolean;
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (field: string, direction: 'asc' | 'desc') => void;
  style?: React.CSSProperties;
  cardProps?: any;
  exportFab?: boolean;
  exportFormats?: GlowTableExportFormat[];
  onExport?: (fmt: GlowTableExportFormat) => void;
  glass?: boolean;
  glow?: boolean;
  gradient?: string;
  animated?: boolean;
}

const formatLabels = {
  csv: 'CSV',
  json: 'JSON',
  xml: 'XML',
  xls: 'XLS',
  pdf: 'PDF',
};

const FabExportMenu = ({
  exportFormats,
  onExport
}: {
  exportFormats: GlowTableExportFormat[],
  onExport: (fmt: GlowTableExportFormat) => void
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleFabClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };
  return (
    <>
      <FabButtonStyled
        size="medium"
        aria-label="Export"
        onClick={handleFabClick}
      >
        {open ? <CloseIcon /> : <DownloadIcon />}
      </FabButtonStyled>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        PaperProps={{ sx: { p: 1.5, borderRadius: 3, bgcolor: '#232841', boxShadow: '0 6px 32px #6366f188' } }}
      >
        {exportFormats.map(fmt => (
          <GlowingButton
            key={fmt}
            colorVariant="secondary"
            size="small"
            glowIntensity={1.15}
            onClick={() => { onExport(fmt); setAnchorEl(null); }}
            style={{ minWidth: 84, fontWeight: 700, fontSize: 15, margin: 3 }}
          >
            <DownloadIcon style={{ fontSize: 17, marginRight: 7 }} />
            {formatLabels[fmt]}
          </GlowingButton>
        ))}
      </Popover>
    </>
  );
};

const GlowTable: React.FC<GlowTableProps> = ({
  columns,
  data,
  headerLabels,
  columnStyles,
  align,
  striped = false,
  hoverHighlight = true,
  sortable = true,
  sortKey,
  sortDirection,
  onSort,
  style,
  cardProps = {},
  exportFab = true,
  exportFormats = ['csv', 'json', 'xml', 'xls', 'pdf'],
  onExport,
  glass,
  glow,
  gradient,
  animated,
}) => {
  const [internalSortKey, setInternalSortKey] = useState<string | undefined>(sortKey);
  const [internalSortDir, setInternalSortDir] = useState<'asc' | 'desc'>(sortDirection || 'asc');

  const sortedData = React.useMemo(() => {
    if (!sortable || !internalSortKey) return data;
    const clone = data.slice();
    clone.sort((a, b) => {
      const vA = a[internalSortKey];
      const vB = b[internalSortKey];
      if (vA === vB) return 0;
      if (vA == null) return 1;
      if (vB == null) return -1;
      if (typeof vA === 'number' && typeof vB === 'number')
        return (vA - vB) * (internalSortDir === 'asc' ? 1 : -1);
      return ('' + vA).localeCompare('' + vB, undefined, { sensitivity: 'base' }) * (internalSortDir === 'asc' ? 1 : -1);
    });
    return clone;
  }, [data, internalSortKey, internalSortDir, sortable]);

  const handleSort = (col: string) => {
    if (!sortable) return;
    let newDir: 'asc' | 'desc' = 'asc';
    if (internalSortKey === col) {
      newDir = internalSortDir === 'asc' ? 'desc' : 'asc';
    }
    setInternalSortKey(col);
    setInternalSortDir(newDir);
    onSort && onSort(col, newDir);
  };

  return (
    <GlowCard
      glass={glass}
      glow={glow === undefined ? false : glow}
      animated={animated}
      borderRadius={18}
      gradient={gradient}
      style={{
        maxWidth: 850,
        minWidth: 340,
        margin: '0 auto',
        position: 'relative',
        boxShadow: '0 18px 80px #23284144,0 7px 22px #36398c30',
        padding: 0,
        ...style 
      }}
      {...cardProps}
    >
      <TableWrap>
        <GlowTableEl style={{ minWidth: columns.length * 150 }}>
          <thead>
            <TheadTr>
              {columns.map((col, ci) => {
                const label = headerLabels?.[col] ?? (
                  <GlowTypography
                    glow={false}
                    clipText
                    fontWeight={700}
                    fontSize={17}
                    gradient="linear-gradient(90deg,#89a3ff,#e5edfa)"
                    sx={{
                      textShadow: '0 1.5px 6px #cbd3ef60',
                      letterSpacing: 0.016,
                      opacity: 0.97,
                    }}
                  >
                    {col}
                  </GlowTypography>
                );
                return (
                  <Th
                    key={col}
                    style={{
                      ...(columnStyles?.[col] || {}),
                      textAlign: (align?.[col] || 'left'),
                      cursor: sortable ? 'pointer' : 'default'
                    }}
                    onClick={() => handleSort(col)}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      {label}
                      {sortable && internalSortKey === col && (
                        internalSortDir === 'asc'
                          ? <ArrowUpwardIcon sx={{ fontSize: 18, color: '#aaffc1', ml: .5 }} />
                          : <ArrowDownwardIcon sx={{ fontSize: 18, color: '#aaffc1', ml: .5 }} />
                      )}
                    </span>
                  </Th>
                );
              })}
            </TheadTr>
          </thead>
          <tbody>
            {sortedData.map((row, i) => (
              <tr
                key={i}
                style={{
                  background: striped && i % 2 === 1
                    ? 'rgba(232,241,255,0.06)'
                    : 'rgba(140,150,255,0.01)',
                  transition: 'background 0.19s',
                  cursor: hoverHighlight ? 'pointer' : undefined,
                }}
                onMouseOver={
                  hoverHighlight
                  ? (e) => (e.currentTarget.style.background = 'rgba(140,150,255,0.09)')
                  : undefined
                }
                onMouseOut={
                  hoverHighlight
                  ? (e) => (e.currentTarget.style.background = striped && i % 2 === 1
                      ? 'rgba(232,241,255,0.06)'
                      : 'rgba(140,150,255,0.01)')
                  : undefined
                }
              >
                {columns.map((col, ci) => (
                  <Td
                    key={col}
                    style={{
                      ...((columnStyles && columnStyles[col]) || {}),
                      textAlign: (align?.[col] || 'left'),
                    }}
                  >
                    <GlowTypography
                      variant="body2"
                      glow={false}
                      clipText
                      fontWeight={500}
                      gradient="linear-gradient(90deg,#ecf1fc 10%,#a7bff7 90%)"
                      sx={{
                        fontSize: 16.5,
                        textShadow: '0 0 1px #9faee980',
                        opacity: 0.96,
                      }}
                    >
                      {row[col]}
                    </GlowTypography>
                  </Td>
                ))}
              </tr>
            ))}
          </tbody>
        </GlowTableEl>
        {exportFab && (
          <FabWrap>
            <FabExportMenu
              exportFormats={['csv','json','xml','xls']}
              onExport={(fmt) => onExport?.(fmt)}
            />
          </FabWrap>
        )}
      </TableWrap>
    </GlowCard>
  );
};

export default GlowTable;