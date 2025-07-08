/** @type {import('tailwindcss').Config} */

export default {
  // Não precisa mais de "content"
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ecce7a',
        secondary: '#d3b561',
        tertiary: '#c0a450',
        quaternary: '#070707',
        quintenary: '#f3f3f3bb',
        sextenary: '#4a2512'
      },
      fontFamily: {
        cinzel: ['Cinzel, serif'],
        afacad: ['Afacad Flux, sans-serif'],
      },
      animation: {
        'spin': 'spinbar .7s linear infinite',
        'float': 'floating 1s infinite alternate',
        'hoverfloat': 'hfloat .5s infinite alternate',
        'words': 'words 20s steps(10) infinite',
        'wordstwo': 'wordstwo 20s steps(10) infinite',
        'bar': 'bar .5s infinite',
        'background': 'back 10s ease-in-out infinite alternate'
      },
      keyframes: {
        spinbar: {
          '0%': {transform:'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        floating: {
          '0%': {transform:'translateY(5%)'},
          '100%': {transform:'translateY(-5%)'},
        },
        hfloat: {
          '0%': {transform:'translateY(3%)'},
          '100%': {transform:'translateY(-3%)'},
        },
        words: {
          '10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': { width: '0' },
          '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': {width: '11ch'},
        },
        wordstwo: {
          '10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': { width: '0' },
          '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': {width: '8ch'},
        },
        bar: {
          '0%': {borderRight: '#000'},
        },
        textShadow: {
          sm: '1px 3px 3px #000'
        },
        back: {
          '50%': {backgroundPosition: 'top'},
          '100%': {backgroundPosition: 'bottom'},
        }
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.sections': {
          width: '100%',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      })
    }
  ],
}