/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '320': '320px',
        '600': '600px',
        '1250': '1250px'

      },
      height:{
        '350': '350px',
        '650': '650px',
        '750': '750px',
        '850': '850px'
      },
     
      margin:{
        '260': '260px' 
      },
     colors:{
      'colorfooter':'#2D2D2D',
      'colorcontact': '#EAE9E4',
      'color2contact': '#efebe1'

     },

      fontFamily: {
        dancing: 'Dancing Script',
        DM: 'DM Sans'
      },
    },
  },
  plugins: [],
}