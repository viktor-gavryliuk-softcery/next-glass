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
        'lime': '#bdff00',
        'my-bg': '#121212',
        'violet': '#7800FF'
      },
      keyframes: {
        slideDown: {
          from: { height: '0', opacity: '0' },
          to: { height: '8rem', opacity: '1' },
        },
        slideUp: {
          from: { height: '8rem', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    }

  },
  plugins: [],
};
