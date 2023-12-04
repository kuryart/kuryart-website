/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: false,
    screens: {
      "2xs": "280px",
      xs: "320px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',     
    }
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      {
        "kuryart-dark": {
          primary: "#a5b4fc",
          secondary: "#818cf8",
          accent: "#6366f1",
          neutral: "#6366f1",
          // neutral: "#26292C",
          "base-100": "#1e1e32",
          info: "#7dd3fc",
          success: "#86efac",
          warning: "#fef08a",
          error: "#f87171",
        },
      },
    ],
  },
};
