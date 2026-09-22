/**
 * Figma Design Tokens for Bus Arabia
 * Grounded directly from Figma File "CLDM00528 ( Bus Arabia )" via Figwright MCP.
 */

export const FIGMA_TOKENS = {
  colors: {
    // Primary Brand Magenta / Maroon
    primary: {
      default: '#b20163', // Paint style "fONT COLOR" (rgb 178, 1, 99)
      gradientStart: '#950250',
      gradientMiddle: '#c2006d',
      gradientEnd: '#fa1590',
    },
    // Secondary Deep Burgundy
    secondary: {
      deepBurgundy: '#550036',
      darkPlum: '#3e0026',
    },
    // Warm Gold / Sand Accents
    accent: {
      goldLight: '#ffe26d',
      goldMedium: '#fdeab2',
      goldDark: '#d9b747',
      goldBase: '#d8b93c',
    },
    // Semantic States
    state: {
      success: '#137a08', // Verified green
      warning: '#d97706',
      error: '#dc2626',
      info: '#2563eb',
    },
    // Backgrounds & Neutrals
    surface: {
      canvas: '#fcf9f8', // Soft warm white background
      card: '#ffffff',
      stroke: '#dbbfca', // Paint style "stokes color" (rgb 219, 191, 201)
      strokeMuted: 'rgba(0, 0, 0, 0.08)',
      textPrimary: '#1a1a1a',
      textSecondary: '#666666',
      textMuted: '#999999',
    },
  },
  typography: {
    heroHeadline: {
      fontFamily: 'Barlow Semi Condensed, sans-serif',
      fontWeight: '800', // ExtraBold
      fontStyle: 'italic',
      letterSpacing: '-0.02em',
    },
    sectionTitle: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '700', // Bold
    },
    body: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: '400',
    },
    arabic: {
      fontFamily: 'Cairo, sans-serif',
    },
  },
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  shadows: {
    card: '0 4px 20px rgba(85, 0, 54, 0.06)',
    cardHover: '0 8px 30px rgba(85, 0, 54, 0.12)',
    dropdown: '0 10px 40px rgba(0, 0, 0, 0.1)',
  },
} as const;

export default FIGMA_TOKENS;
