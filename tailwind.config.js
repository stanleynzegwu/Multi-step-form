/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "Marine-blue": "hsl(213, 96%, 18%)",
        "Purplish-blue": "hsl(243, 100%, 62%)",
        "Pastel-blue": "hsl(228, 100%, 84%)",
        "Light-blue": "hsl(206, 94%, 87%)",
        "Strawberry-red": "hsl(354, 84%, 57%)",
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
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
