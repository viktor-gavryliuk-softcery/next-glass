/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-lime': '#bdff00',
        'my-bg': '#121212'
      },
      fontFamily: {
        black: ['var(--font-grotesk)'],
        sans: ['var(--font-montserrat)'],
      }
    }

  },
  plugins: [],
};
