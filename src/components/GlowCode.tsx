import React, { useRef, useState } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';

// If using PrismJS in your project, import the CSS once globally elsewhere
// import 'prismjs/themes/prism-tomorrow.css';
// import Prism from 'prismjs';
// import 'prismjs/components/prism-javascript';

const codeGlowAnim = keyframes`
  0%,100% { box-shadow: 0 0 44px 8px #8b5cf655, 0 0 120px 44px #38bdf833; }
  45% { box-shadow: 0 0 120px 44px #05ffa1bb, 0 0 180px 74px #8b5cf644; }
`;

const CodeWrap = styled(GlowCard)<{ animated?: boolean }>(
  ({ animated }) => ({
    position: 'relative',
    background: 'radial-gradient(ellipse at 25% 0%, #181b39 50%, #38bdf822 100%)',
    fontSize: 15.6,
    fontFamily:
      'JetBrains Mono, Fira Mono, Menlo, Monaco, Consolas, Liberation Mono, monospace',
    borderRadius: 21,
    boxShadow:
      '0 0 60px 18px #8b5cf633, 0 0 120px 54px #38bdf844',
    padding: 0,
    overflow: 'auto',
    margin: '1.5em 0',
    lineHeight: 1.7,
    animation: animated
      ? `${codeGlowAnim} 6.5s cubic-bezier(.53,.32,.81,1.2) infinite alternate`
      : undefined,
    color: '#f1f5f9',
    // Responsive
    maxWidth: '100%',
    fontWeight: 500,
    wordBreak: 'break-word',
  })
);

// See https://prismjs.com/#supported-languages for more
export interface GlowCodeProps {
  code: string;
  language?: string;
  title?: React.ReactNode;
  showCopy?: boolean;
  borderRadius?: number | string;
  colorVariant?: 'primary' | 'secondary' | 'accent';
  animated?: boolean;
  fontSize?: number | string;
  maxHeight?: number | string;
  lineNumbers?: boolean;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const highlight = (code: string, lang: string) => {
  // PrismJS or fallback: simple htmlify (no highlighting)
  // In production, you'd want Prism.highlight here
  // This is a fallback for environments without Prism
  return `<span>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`;
};

const GlowCode: React.FC<GlowCodeProps> = ({
  code,
  language = 'js',
  title,
  showCopy = true,
  borderRadius = 21,
  colorVariant = 'accent',
  animated = true,
  fontSize = 15.6,
  maxHeight = 400,
  lineNumbers = false,
  style,
  contentStyle,
}) => {
  const codeRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  // For advanced use, swap for PrismJS if you have it in your build
  const html = highlight(code, language);

  const lines = code.split('\n');
  const linesCount = lines.length;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1350);
  };

  return (
    <CodeWrap
      style={{ borderRadius, ...style }}
      animated={animated}
      gradient={
        colorVariant === 'primary'
          ? 'linear-gradient(111deg,#6366f1df 22%,#38bdf866 143%)'
          : colorVariant === 'secondary'
          ? 'linear-gradient(115deg,#f472b6bb 8%,#8b5cf6 122%)'
          : 'linear-gradient(108deg,#181b3999 0%,#05ffa1 140%)'
      }
      contentStyle={{ ...contentStyle, padding: 0 }}
    >
      {title && (
        <Box
          sx={{
            px: 2.8,
            py: 1.2,
            background:
              colorVariant === 'primary'
                ? '#6366f1'
                : colorVariant === 'secondary'
                ? '#f472b6'
                : '#05ffa1',
            fontWeight: 800,
            fontSize: 15,
            color: colorVariant === 'accent' ? '#20123a' : '#fff',
            letterSpacing: '.03em',
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
          }}
        >
          {title}
        </Box>
      )}
      <Box sx={{ position: 'relative', width: '100%' }}>
        {showCopy && (
          <button
            aria-label={copied ? 'Copied!' : 'Copy code'}
            onClick={handleCopy}
            style={{
              position: 'absolute',
              top: 9,
              right: 12,
              zIndex: 2,
              fontWeight: 700,
              fontSize: 12.8,
              padding: '3.7px 10px',
              borderRadius: 12,
              color: copied ? '#20123a' : '#fff',
              background: copied
                ? 'linear-gradient(96deg,#05ffa1 50%,#38bdf8 120%)'
                : 'linear-gradient(110deg,#6366f166 40%,#181b3944 130%)',
              border: 'none',
              boxShadow: '0 0 12px #8b5cf655',
              cursor: 'pointer',
              transition: 'background .15s, color .11s',
            }}
          >
            {copied ? 'Copied ✔' : 'Copy'}
          </button>
        )}
        <pre
          ref={codeRef}
          style={{
            margin: 0,
            fontFamily: 'inherit',
            background: 'none',
            border: 'none',
            borderRadius: borderRadius,
            padding: '22px 21px 23px 21px',
            fontSize,
            maxHeight,
            overflow: 'auto',
            minWidth: 0,
            boxShadow: 'none',
            display: 'flex',
            gap: 0,
          }}
        >
          {lineNumbers && (
            <code
              style={{
                textAlign: 'right',
                userSelect: 'none',
                color: '#38bdf877',
                paddingRight: '1.6em',
                fontStyle: 'normal',
                fontFamily: 'inherit',
              }}
            >
              {Array.from({ length: linesCount }, (_, i) => (
                <div key={i} style={{ lineHeight: 1.7 }}>{i + 1}</div>
              ))}
            </code>
          )}
          <code
            style={{ minWidth: 0, width: '100%', display: 'block', fontFamily: 'inherit' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </pre>
      </Box>
    </CodeWrap>
  );
};

export default GlowCode;
