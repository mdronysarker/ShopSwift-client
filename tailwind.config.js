/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: ["hover"],
      colors: {
        textColor: {
          500: "#666",
        },

        menuColor: {
          500: "#444",
        },

        mainColor: {
          700: "#ffb502",
        },

        menubg: {
          700: "#2fb5d2",
        },
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};
