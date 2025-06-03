import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';
import DownloadIcon from '@mui/icons-material/Download';

export type GlowTableExportFormat = 'csv'|'json'|'xml'|'xls'|'pdf';

const TableWrap = styled(Box)({
  width: '100%',
  overflowX: 'auto',
  background: 'rgba(34,35,71,0.12)',
  borderRadius: 22,
  position: 'relative',
  boxShadow: '0 0 44px #38bdf844',
  padding: 0,
});

const GlowTableEl = styled('table')({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  fontFamily: 'Inter, sans-serif',
  fontSize: 17.5,
  background: 'none',
  color: '#fff',
  boxShadow: '0 0 18px #38bdf822',
  margin: 0,
});

const TheadTr = styled('tr')({});

const Th = styled('th')({
  background: 'linear-gradient(91deg,#6366f1 40%,#38bdf8 100%)',
  color: '#fff',
  fontWeight: 900,
  fontSize: 18.5,
  lineHeight: 1.7,
  border: 'none',
  padding: '15px 15px',
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  boxShadow: '0 4px 18px 0 #8b5cf644',
  letterSpacing: 0.008,
});

const Td = styled('td')({
  background: 'rgba(38,45,99,0.24)',
  border: 'none',
  padding: '11px 16px',
  fontSize: 17,
  fontWeight: 500,
  color: '#fff',
  borderBottom: '2px solid #38bdf833',
  letterSpacing: 0.01,
  textShadow: '0 2px 12px #6366f1cc',
});

const FabWrap = styled('div')({
  position: 'absolute',
  bottom: 22,
  right: 30,
  zIndex: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

// Export helpers (demo only)
function exportTable(data: any[], columns: string[], fmt: GlowTableExportFormat, name = 'glowtable') {
  let str = '';
  if(fmt==='json') str = JSON.stringify(data, null, 2);
  else if(fmt==='csv') {
    str = columns.join(',') + '\n' + data.map(row => columns.map(col => JSON.stringify(row[col]??'')).join(',')).join('\n');
  } else if(fmt==='xml') {
    str = `<rows>\n` + data.map(row => '  <row>' + columns.map(col => `<${col}>${(row[col]??'')}</${col}>`).join('') + '</row>').join('\n') + '\n</rows>';
  } else if(fmt==='xls') {
    str = '<table><thead><tr>' + columns.map(col => `<th>${col}</th>`).join('') + '</tr></thead><tbody>'
      + data.map(row => '<tr>' + columns.map(col => `<td>${row[col]??''}</td>`).join('') + '</tr>').join('') + '</tbody></table>';
  } else if(fmt==='pdf') {
    str = JSON.stringify(data, null, 2); // should use real pdf gen
  }
  const blob = new Blob([str], { type: (fmt==='pdf'?'application/pdf':'text/plain') });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${name}.${fmt}`;
  link.click();
}

export interface GlowTableProps {
  columns: string[];
  data: { [key: string]: any }[];
  gradient?: string;
  glass?: boolean;
  glow?: boolean;
  animated?: boolean;
  borderRadius?: number | string;
  exportFab?: boolean;
  exportFormats?: GlowTableExportFormat[];
  onExport?: (fmt: GlowTableExportFormat) => void;
  style?: React.CSSProperties;
  cardProps?: any;
}

const formatLabels = {
  csv: 'CSV',
  json: 'JSON',
  xml: 'XML',
  xls: 'XLS',
  pdf: 'PDF',
};

const GlowTable: React.FC<GlowTableProps> = ({
  columns,
  data,
  gradient,
  glass = true,
  glow = true,
  animated = true,
  borderRadius = 33,
  exportFab = true,
  exportFormats = ['csv','json','xml','xls','pdf'],
  onExport,
  style,
  cardProps = {},
}) => {
  return (
    <GlowCard
      gradient={gradient}
      glass={glass}
      glow={glow}
      animated={animated}
      borderRadius={borderRadius}
      style={{ maxWidth: 950, minWidth: 320, margin: '0 auto', position: 'relative', ...style }}
      {...cardProps}
    >
      <TableWrap>
        <GlowTableEl>
          <thead>
            <TheadTr>
              {columns.map(col => (
                <Th key={col}>{col}</Th>
              ))}
            </TheadTr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {columns.map(col => (
                  <Td key={col}>{row[col]}</Td>
                ))}
              </tr>
            ))}
          </tbody>
        </GlowTableEl>
        {exportFab && (
          <FabWrap>
            {exportFormats.map(fmt => (
              <GlowingButton
                key={fmt}
                colorVariant="secondary"
                size="small"
                glowIntensity={1.23}
                onClick={() => onExport?.(fmt) ?? exportTable(data, columns, fmt)}
                style={{ minWidth: 76, fontWeight: 800, fontSize: 16 }}
                title={`Export as ${formatLabels[fmt]}`}
              >
                <DownloadIcon style={{ fontSize: 19, marginRight: 6 }} />
                {formatLabels[fmt]}
              </GlowingButton>
            ))}
          </FabWrap>
        )}
      </TableWrap>
    </GlowCard>
  );
};

export default GlowTable;
