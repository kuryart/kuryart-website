module.exports = {
  plugins: {
    "postcss-import": {
      from: "src/css/main.css",
    },
    "tailwindcss": {},
    "autoprefixer": {},
    "@fullhuman/postcss-purgecss": {
      content: ["src/**/*.tsx"],
    },
    "cssnano": {
      preset: "default",
    },
  },
};
