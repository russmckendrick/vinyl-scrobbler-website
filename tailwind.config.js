/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/vinyl-theme/layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        vinyl: {
          coral: '#FF6B4A',
          orange: '#FFB940',
          blue: '#4A90E2',
          navy: '#1A365D',
          black: '#111111',
          cream: '#F5F5F1'
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-2': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      fontWeight: {
        'extra-bold': '800',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 