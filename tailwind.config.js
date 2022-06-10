module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      color: '#222222',
      primaryColor: '#035094',
      lightPrimaryColor: '#D9E5F4',
      darkPrimaryColor: '#001E5F',
      bgColor: '#f2f2f2',
      muteColor: '#ccc',
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
