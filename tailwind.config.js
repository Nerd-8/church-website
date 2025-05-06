/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'church-gold': '#F0C87F',
        'church-blue': {
          light: '#3B82F6',
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
        },
        'church-purple': {
          light: '#8B5CF6',
          DEFAULT: '#581C87',
          dark: '#3B0764',
        },
        'success': '#22C55E',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'worship': "url('https://images.pexels.com/photos/1487954/pexels-photo-1487954.jpeg')",
        'prayer': "url('https://images.pexels.com/photos/17753626/pexels-photo-17753626/free-photo-of-woman-in-a-church.jpeg')",
        'bible': "url('https://images.pexels.com/photos/268381/pexels-photo-268381.jpeg')",
        'cross': "url('https://images.pexels.com/photos/2536651/pexels-photo-2536651.jpeg')",
      },
      height: {
        'screen-90': '90vh',
      }
    },
  },
  plugins: [],
};