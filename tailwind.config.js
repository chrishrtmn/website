module.exports = {
  experimental: 'all',
  future: {
    //purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./src/components/**/*.{js}', './src/pages/**/*.{js}'],
  },
  theme: {
    extend: {
      fontFamily: {
        //signs: ['Gallaudet, Arial, sans-serif'],
      },
      inset: {
        10: '10px',
      },
      opacity: {
        10: '.1',
      },
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      primary: '#E4FAFF',
      secondary: '#F9EDFE',
    }),
  },
  variants: {},
  plugins: [],
}
