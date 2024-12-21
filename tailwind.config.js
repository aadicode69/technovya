/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'move-beam': 'moveBeam 6s linear infinite',
      },
      keyframes: {
        moveBeam: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      colors: {
        blue: {
          500: '#3b82f6', // Replace with a classy blue
        },
        gray: {
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};
