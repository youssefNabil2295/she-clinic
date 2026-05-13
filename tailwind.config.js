/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
      fontFamily: {
        sans: ['Inter', 'Cairo', 'sans-serif'],
        display: ['Cairo', 'sans-serif'],
      },
      colors: {
        'navy': '#1A1A2E',
        'gold': '#D4AF37',
        'clinic-gold': '#D4AF37',
        'clinic-gold-dark': '#B8962E',
        'clinic-gold-light': '#F0D38A',
        'clinic-bg': '#FFF9F0',
        'clinic-dark': '#1A1A2E',
        'clinic-gray': '#4A4A4A',
        'clinic-soft': '#F5EFE6',
      },
    },
  },
  plugins: [],
}