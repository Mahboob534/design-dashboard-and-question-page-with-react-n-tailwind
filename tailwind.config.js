/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      "yekan-bakh": ["Yekan Bakh", "sans-serif"],
    },
    backgroundSize: {
      "100%": "100% 100%",
      16: "4rem",
    },
    
    extend: {
      margin: {
        "10px": "10px",
      },
      spacing: {
        13: "52px",
        "10px": "10px",
        "50px":"50px",
        "200px": "200px",
        "277px": "277px",
        "534px": "534px",
        "728px": "728px",
        "693px":"693px",
        "374px":"374px",
        "1234px":"1234px",
        "1021px":"1021px",
        "107px":"107px",
        
      },
      letterSpacing: {
        "wide-letter": "2em",
      },
      backdropBrightness: {
        25: ".25",
        175: "1.75",
      },
      colors: {
        "light-gray": "#68647A",
        "dark-white": "#D9D9D9",
        "light-white": "#fafafaE6",
        "red-badget": "#B10A3C",
        "red-icon": "#F61F2C",
        "gray-progress": "#D2CDD1",
        "white-progress": "#E8E8E8",
        "gray-button": "#68647A",
        "yallow-light": "#F4BE37",
        "yellow-dark": "#FF9F40",
        'dark-green':'#1D7B82',
      },
      backgroundImage: {
        background: "url('./assets/images/background.jpg')",
        backgroundSea: "url('./assets/images/background2.jpg')",
      },
      
      fontSize: {
        '4.5xl': '40px',
      },
    },
  },
  plugins: [],
};
