/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0faf4',
          100: '#e0f5ea',
          200: '#c1ebd4',
          300: '#8fd9b0',
          400: '#55c086',
          500: '#2ea866',
          600: '#1a7f5a',
          700: '#136046',
          800: '#0f4a36',
          900: '#0b3828',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Arial', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
  safelist: [
    'badge-CRITICAL','badge-HIGH','badge-MODERATE','badge-LOW',
    'badge-EMERGENCY','badge-MEDIUM','badge-UNKNOWN','badge-HIGH-triage',
  ],
}
