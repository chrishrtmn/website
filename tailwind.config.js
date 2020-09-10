module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter, Arial, sans-serif'],
        signs: ['Gallaudet, Arial, sans-serif'],
      },
      fontSize: {
        massive: '10rem',
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
