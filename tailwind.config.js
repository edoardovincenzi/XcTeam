/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['dark', 'cupcake'],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
