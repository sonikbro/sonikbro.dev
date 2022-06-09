module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      animation: {
        wave: 'animateWave 2.5s linear infinite',
      },
      keyframes: {
        animateWave: {
          '0%, 60%, 100%': { transform: 'rotate(0.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '10%, 30%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
        },
      },
    },
  },
  plugins: [],
};
