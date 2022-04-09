module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F87272",

          secondary: "#75D1F0",

          accent: "#AA70F8",

          neutral: "#423F00",

          "base-100": "#FFEE00",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#FF7598",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
