/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "blog.html", "pesan.html", "galeri.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#070C29",
      },
      fontFamily: {
        body: ["Poppins"],
        head: ["Yeseva One"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
