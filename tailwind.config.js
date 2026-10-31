/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        'surface-page': 'var(--surface-page)',
        fg: 'var(--fg)',
        hair: 'var(--hair)',
        'hair-2': 'var(--hair-2)',
        muted: 'var(--muted)',
        'muted-2': 'var(--muted-2)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        paper: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#EBE5D8',
          300: '#DED6C4',
          800: '#1F2228',
          900: '#14161A',
          950: '#0E1013',
        },
        ink: {
          DEFAULT: '#141518',
          secondary: '#484B52',
          muted: '#727782',
          faint: '#A4A9B3',
          dark: '#F2F3F5',
          darkSecondary: '#B1B6C1',
          darkMuted: '#7E8594',
        },
        terracotta: {
          50: '#FDF4F2',
          100: '#FBE8E4',
          500: '#BA3D1D',
          600: '#A13216',
          dark: '#E8613C',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        display: ['"Instrument Serif"', 'Newsreader', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        displaySans: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(20, 21, 24, 0.04), 0 4px 12px rgba(20, 21, 24, 0.03)',
        subtleDark: '0 2px 8px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
}

