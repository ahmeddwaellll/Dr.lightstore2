/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#A78BFA',
        dark: '#110C1B',
        card: 'rgba(42,28,67,0.55)',
        gold: '#FFC700'
      },
      boxShadow: {
        glow: '0 0 20px rgba(124,58,237,0.35)'
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(124,58,237,0.35)' },
          '100%': { boxShadow: '0 0 30px rgba(124,58,237,0.6)' },
        }
      }
    },
  },
  plugins: [],
}