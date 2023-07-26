/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        gray: {
          "900": "#14141B",
          "800": "#1D1D25",
          "500": "#7d7f87",
          "400": "#8b8d97",
        },
        green: {
          "400": "#15C196",
        },
      },
      boxShadow: {
        "tech-bubble": "1px 10px 10px rgba(0,0,0,0.25)",
        "main-button": "4px 4px 0 0 #15C196",
        "trail": "0px 0px 50px 0px #15C196"
      },
      translate: {
        "main-button": "-5px",
      },
      transitionTimingFunction:{
        "main-button": "cubic-bezier(0.645,0.045,0.355,1)"
      },
      shadows: {
        green400: "#15C196",
      },
    },
  },
  plugins: [],
};
