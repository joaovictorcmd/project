/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background": "#F2F2F2",
        "background-light": "#F5F5F5",
        "background-dark": "#111111",
        "text-primary": "#101010",
        "text-secondary": "#ffffff",
        "text-muted": "#888888",
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
