/** @type {import('tailwindcss').Config} */
import textShadowPlugin from 'tailwindcss-textshadow';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '200': '190px',
        '150': '150px',
      },
      width: {
        '320': '320px',
        '350': '350px',
        '595': '595px',
        '600': '600px',
        '800': '800px',
        '1250': '1250px',
        '950': '1050px'

      },
      height: {
        '350': '350px',
        '650': '650px',
        '750': '750px',
        '850': '850px'
      },

    

      margin: {
        '260': '260px'
      },
      colors: {
        'colorfooter': '#2D2D2D',
        'colorcontact': '#EAE9E4',
        'color2contact': '#efebe1'

      },

      fontFamily: {
        dancing: 'Dancing Script',
        DM: 'DM Sans'
      },
      textShadow: {
        'custom': '5px -5px 1px rgba(1, 1, 1, 1)',
      }
    },
  },
  plugins: [
    textShadowPlugin
  ],
}