module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lorgablue: "#003c4d",
      },
      typography: {
        DEFAULT: {
          css: {
            'ol[type="A" s]': false,
            'ol[type="a" s]': false,
            'ol[type="I" s]': false,
            'ol[type="i" s]': false,
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd", "even"],
    },
    typography: [],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
