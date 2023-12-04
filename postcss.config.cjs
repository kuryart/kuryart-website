module.exports = {
  plugins: {
    "postcss-import": {
      from: "src/css/main.css",
    },
    tailwindcss: {},
    // "@fullhuman/postcss-purgecss": {
    //   content: ["src/**/*.tsx"],
    //   keyframes: true,
    //   variables: true,
    //   rejected: true,
    //   rejectedCss: true,
    //   safelist: [
    //     /(^|\s)sm:\S+/,
    //     /(^|\s)md:\S+/,
    //     /(^|\s)lg:\S+/,
    //     /(^|\s)xl:\S+/,
    //     /(^|\s)2xl:\S+/,
    //     /(^|\s)hover:\S+/,
    //     /(^|\s)flex\S+/,
    //     /(^|\s)grid\S+/,
    //   ],
    // },
    autoprefixer: {},
    cssnano: {
      preset: "default",
    },
  },
};
