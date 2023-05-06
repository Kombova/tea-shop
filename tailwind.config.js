/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors :{
        'hunter-green' : '#314932',
        'main-green': '#7DCD85',
        'tea-green': '#C2E1C2',
        'reseda': '#778472',
      },
    },
  },
  plugins: [],
}
