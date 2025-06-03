import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';
import DownloadIcon from '@mui/icons-material/Download';

export type GlowDocumentFormat = 'pdf' | 'docx' | 'md' | 'txt';

const FabWrap = styled('div')({
  position: 'absolute',
  bottom: 22,
  right: 30,
  zIndex: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const DocContent = styled('div')({
  padding: '38px 46px 38px 46px',
  fontSize: 19,
  lineHeight: 1.74,
  color: '#fff',
  background: 'rgba(35, 45, 97, 0.30)',
  borderRadius: 17,
  boxShadow:
    '0 0 68px 0 #6366f180, 0 0 120px 32px #38bdf855, 0 0 0 1.5px #fff1',
  transition: 'box-shadow 0.2s',
  position: 'relative',
  overflow: 'auto',
});

const Heading = styled('h1')({
  fontWeight: 900,
  fontSize: 2.15 * 19,
  margin: '0 0 18px 0',
  background: 'linear-gradient(91deg,#8b5cf6 30%,#38bdf8 70%,#f472b6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: 0.01,
  textShadow:
    '0 5px 22px #38bdf866, 0 2px 14px #8b5cf644',
});

const SubHeading = styled('h2')({
  fontWeight: 700,
  fontSize: 1.35 * 19,
  margin: '24px 0 8px 0',
  color: '#38bdf8',
  letterSpacing: 0.01,
  textShadow: '0 2px 8px #8b5cf6cc',
});

// Format/Export helpers (demo implementations)
function exportDoc(data: string, format: GlowDocumentFormat, name: string = 'glowdoc') {
  let blob: Blob;
  switch (format) {
    case 'txt':
      blob = new Blob([data], { type: 'text/plain' });
      break;
    case 'md':
      blob = new Blob([data], { type: 'text/markdown' });
      break;
    case 'docx':
      blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      break;
    case 'pdf':
      // For demo: just let user download as .pdf even if it's plain text.
      blob = new Blob([data], { type: 'application/pdf' });
      break;
    default:
      blob = new Blob([data], { type: 'application/octet-stream' });
      break;
  }
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${name}.${format}`;
  link.click();
}

export interface GlowDocumentProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  gradient?: string;
  glass?: boolean;
  glow?: boolean;
  animated?: boolean;
  borderRadius?: number | string;
  exportFab?: boolean;
  exportFormats?: GlowDocumentFormat[];
  exportData?: string; // optional, for text/markdown export
  onExport?: (fmt: GlowDocumentFormat) => void;
  style?: React.CSSProperties;
  cardProps?: any;
  fabPosition?: React.CSSProperties;
}

const formatLabels = {
  pdf: 'PDF',
  docx: 'Word',
  md: 'MD',
  txt: 'TXT',
};

const GlowDocument: React.FC<GlowDocumentProps> = ({
  children,
  title,
  subtitle,
  gradient,
  glass = true,
  glow = true,
  animated = true,
  borderRadius = 38,
  exportFab = true,
  exportFormats = ['pdf', 'docx', 'md', 'txt'],
  exportData,
  onExport,
  style,
  cardProps = {},
  fabPosition,
}) => {
  const plainText =
    typeof children === 'string'
      ? children
      : exportData || (() => {
          try {
            // Fallback: serialize content nodes
            return (children as any)?.props?.children?.toString?.() || 'Glow Document';
          } catch {
            return 'Glow Document';
          }
        })();

  return (
    <GlowCard
      gradient={gradient}
      glass={glass}
      glow={glow}
      animated={animated}
      borderRadius={borderRadius}
      style={{ minHeight: 220, minWidth: 340, maxWidth: 900, margin: '0 auto', position: 'relative', ...style }}
      {...cardProps}
    >
      {title && <Heading>{title}</Heading>}
      {subtitle && <SubHeading>{subtitle}</SubHeading>}
      <DocContent>{children}</DocContent>
      {exportFab && (
        <FabWrap style={fabPosition}>
          {exportFormats.map(fmt => (
            <GlowingButton
              key={fmt}
              colorVariant="secondary"
              size="small"
              glowIntensity={1.25}
              onClick={() =>
                onExport?.(fmt) ?? exportDoc(plainText, fmt)
              }
              style={{ minWidth: 75, fontWeight: 800, fontSize: 16 }}
              title={`Download as ${formatLabels[fmt]}`}
            >
              <DownloadIcon style={{ fontSize: 18, marginRight: 6 }} />
              {formatLabels[fmt]}
            </GlowingButton>
          ))}
        </FabWrap>
      )}
    </GlowCard>
  );
};

export default GlowDocument;
