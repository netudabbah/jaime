/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f2',
          100: '#ffecd9',
          200: '#ffd5b3',
          300: '#ffba87',
          400: '#f79a59',
          500: '#d9793a',
          600: '#b85f26',
          700: '#8f471d',
          800: '#6f391c',
          900: '#5a301b',
        },
        ink: {
          900: '#101114',
          800: '#1b1d23',
          700: '#2f3440',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16,17,20,0.08)',
        card: '0 14px 36px rgba(16,17,20,0.10)',
        glow: '0 12px 28px rgba(217,121,58,0.22)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(110deg, rgba(16,17,20,0.88) 0%, rgba(16,17,20,0.72) 40%, rgba(16,17,20,0.38) 70%, rgba(16,17,20,0.18) 100%)',
        'copper-fade':
          'radial-gradient(circle at 10% 10%, rgba(217,121,58,0.16), transparent 45%), radial-gradient(circle at 80% 20%, rgba(184,95,38,0.10), transparent 40%)',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-in': 'floatIn 600ms ease-out both',
      },
    },
  },
  plugins: [],
};
