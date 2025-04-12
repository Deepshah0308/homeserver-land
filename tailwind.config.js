/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'], // Modern font
      },
      colors: {
        primary: {
          DEFAULT: '#0A0E19', // Dark futuristic background
          lighter: '#121828',
        },
        secondary: {
          DEFAULT: '#64FFDA', // Neon accent color
          darker: '#42BE9A',
        },
        glass: 'rgba(255, 255, 255, 0.05)', // Glassy background color
        text: {
          DEFAULT: '#ECF0F1', // Light text color
          secondary: '#A9B2B8', // Secondary text color
        },
      },
      backdropBlur: {
        glassy: '10px', // Blur for glassmorphism
      },
      boxShadow: {
        'glass': '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)', // Subtle shadow for glass effect
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.gradient-underline': {
          backgroundImage: `linear-gradient(0deg, ${theme('colors.secondary.DEFAULT')} 0%, ${theme('colors.secondary.DEFAULT')} 100%)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          backgroundSize: '0% 0.15rem',
          transitionProperty: 'background-size',
          transitionDuration: '0.3s',
          '&:hover': {
            backgroundSize: '100% 0.15rem',
          },
        },
        '.glassmorphic': {
          backgroundColor: theme('colors.glass'),
          backdropFilter: 'blur(10px)',
          boxShadow: theme('boxShadow.glass'),
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
