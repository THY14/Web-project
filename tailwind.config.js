/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Adding a custom breakpoint for iPhone XR (width: 414px)
        'iphone-tmda': '390px',
      },
      fontFamily: {
        // Add 'Poppins' font
        sans: ['Poppins', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}

