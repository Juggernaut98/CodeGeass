module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
           colors: {
               web_blue: {
                   DEFAULT: "#1652F0",
               },
               web_green: {
                   DEFAULT: "#05B169",
               },
           },
       },
       fontFamily: {
         display: ["Graphik", "system-ui"],
         sans: ["Graphik", "system-ui"],
       },
     },
     variants: {
        extend: {},
     },
     plugins: [],
   };