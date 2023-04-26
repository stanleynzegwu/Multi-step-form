/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        //tablet: {'min': '768px', 'max': '1023px'}
      },
      backgroundImage: {
        "image-mobile": "url('/src/assets/bg-sidebar-mobile.svg')",
        "image-desktop": "url('/src/assets/bg-sidebar-desktop.svg')",
      },
      backgroundSize: {
        'auto-100': 'auto 100%',
      },
    },
  },
  plugins: [],
};
