import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#b20163', // Figma signature brand magenta
          'primary-hover': '#960153',
          dark: '#550036',    // Deep burgundy header/card accent
          green: '#137a08',   // Success and savings badge
          gold: '#d8b93c',    // Warm gold accent
          text: '#1c1b1b',
          muted: '#554149',
          border: '#e8dede',
          bg: '#fcf9f8',
          card: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
