/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      Text: '#545454',
      Highlight : '	#AAFF00',
      Menu : '#B6FA8E'
    },
    fontFamily:{
      Grotesk : ["Space Grotesk", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
  ],
}

