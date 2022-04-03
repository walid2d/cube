module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5F17EB",

          secondary: "#ef5f69",

          accent: "#1bc61b",

          neutral: "#1C2022",

          "base-100": "#263140",

          info: "#5084DC",

          success: "#16AC6D",

          warning: "#BD8D14",

          error: "#EE7163",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
