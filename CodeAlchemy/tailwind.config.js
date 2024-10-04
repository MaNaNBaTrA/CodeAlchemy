/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      Text: '#545454',
      Highlight: '	#AAFF00',
      Menu: '#B6FA8E',
      Work: '#f3f3f3',
      White:'#FFFFFF',
      Black:'#000000',
      green: '#4BB543',  
      red: '#ef4444',
    },
    fontFamily: {
      Grotesk: ["Space Grotesk", 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'Service': ' 2px 3px 7px 0px rgba(0,0,0,0.46)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
  ],
}

