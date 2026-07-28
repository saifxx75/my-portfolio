/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#0891B2',
        dark: {
          100: '#F1F5F9',
          200: '#A8B4C5',
          300: '#607089',
          400: '#172033',
          500: '#101827',
          600: '#080D16',
        },
        light: {
          100: '#0B1220',
          200: '#334155',
          300: '#64748B',
          400: '#E2E8F0',
          500: '#F1F4F8',
          600: '#F7F8FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'circuit-flow': 'circuit-flow 4s linear infinite',
        'data-stream': 'data-stream 3s linear infinite',
        'tech-float': 'tech-float 6s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 30px rgba(139, 92, 246, 0.4)' },
        },
        'circuit-flow': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'data-stream': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        'tech-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
}
