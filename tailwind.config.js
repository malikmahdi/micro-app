import { info } from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dasar: "#CECECE",
        awal: "5C1E0E",
        akhir: "975856",
        btn: "#5D5A18",
        table: "#828282",
        tableth: "#E5E5E5",
        cardinfo1: "#EE6082",
        cardmini1: "#5D100E",
        cardinfo2: "#FACD55",
        cardmini2: "#5D5517",
        cardinfo3: "#3AADEB",
        cardmini3: "#255D4E",
        mvcircle: "#A9A9A9",
        mvcard: "#E3E3E3",
      },
    },
  },
  plugins: [],
};
