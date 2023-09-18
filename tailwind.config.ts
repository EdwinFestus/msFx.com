import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
    extend: {
      backgroundImage: {
        'hero-img': 'url("/images/HeroImg.png")',
      },
      backgroundColor: {
        'light-md': '#F7F0F0',
        'lightblue-md': '#51E5FF',
        'lightgray-md': '#8F857D',
        'darkgray-md': '#5C5552',
        'base-md': '#02182B',
        'red-md': '#EF6351',
        'xtra': '#7C6354'
      },
      colors: {
        'light-md': '#F7F0F0',
        'lightblue-md': '#51E5FF',
        'lightgray-md': '#8F857D',
        'darkgray-md': '#5C5552',
        'base-md': '#02182B',
        'red-md': '#EF6351',
        'xtra': '#7C6354',
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
    fontFamily: {
      heading: ['Poppins', 'san-serif'],
      text: ['Montserrat', 'sans-serif'],
      palanquin: ['Palanquin', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}
export default config
