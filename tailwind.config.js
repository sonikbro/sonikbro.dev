module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      color: 'var(--color)',
      primaryColor: 'var(--primaryColor)',
      lightPrimaryColor: 'var(--lightPrimaryColor)',
      darkPrimaryColor: 'var(--darkPrimaryColor)',
      bgColor: 'var(--bgColor)',
      muteColor: 'var(--muteColor)',
    },
    screens: {
      smMax: { max: '768px' },
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '968px',
        xl: '1100px',
      },
    },
    extend: {},
  },
  plugins: [],
};
