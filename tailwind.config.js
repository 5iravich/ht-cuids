/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/preline/dist/*.js",
      ],
    darkMode: "class",
    theme: {
      container: {
        center: true,
        padding: "15px",
      },
      screens: {
        sm:"640px",
        md:"768px",
        lg:"960px",
        xl:"1200px",
      },
      extend: {
        fontFamily: {
          Prompt: ["Prompt", "sans-serif"],
        },
        colors: {
          'light-main-stbg': '#DCF2F1',
          'light-main-ndbg': '#11729b',
          
          'light-main-stfont': '#3da9ba',
          'light-main-stfonthover': '#0891b2',
          'light-main-ndfont': '#22d3ee',
          'light-main-ndfonthover': '#0891b2',
          'light-main-rdfont': '',
          'light-second-stfont': '#020617',
          'light-second-ndfont': '#1e293b',
          'light-second-rdfont': '#64748b',

          'dark-main-stbg': '#080911',
          'dark-main-ndbg': '#081f2a',
          
          'dark-main-stfont': '#3D54BA',
          'dark-main-stfonthover': '#0C2233',
          'dark-main-ndfont': '',
          'dark-main-ndfonthover': '',
          'dark-main-rdfont': '',
          'dark-second-stfont': '',
          'dark-second-ndfont': '',
          'dark-second-rdfont': '',
        }
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('preline/plugin'),
        require('daisyui'),
        require('tailwindcss-animated'),
        require('tailwind-scrollbar')({ nocompatible: true }),
      ],
    
  }