module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#10201A', pine: '#0B5D3B', mint: '#DDF2E6', sun: '#F4B63A', mist: '#F5F8F6' },
      fontFamily: { display: ['var(--font-display)', 'sans-serif'], body: ['var(--font-body)', 'sans-serif'] },
    },
  },
  plugins: [],
};
