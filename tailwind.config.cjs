/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'logo': "url('/images/logo_bright.svg')"
      },
      fontFamily: {
        berkshire: ['Berkshire Swash', 'cursive'],
        lato: ['Lato'],
      },
      colors: {
        purple: '#7F60A1',
        darkBlue: '#1B2B40',
        pink: '#CB8FBE',
        amethyst: '#A262BF',
        darkGreen: '#112624',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        fancyRadius: '4px',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
