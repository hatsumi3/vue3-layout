/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {},
  plugins: [require('tailwindcss-pseudo-elements')],
  variants: {
    position: ['after'],
    transform: ['after'],
    translate: ['after'],
    inset: ['after'],
    backgroundImage: ['after'],
    gradientColorStops: ['after'],
  },
};
