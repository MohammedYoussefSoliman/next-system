import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "background: linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
        "dark-gradient-primary":
          "background: linear-gradient(90deg, #b22536 0%, #ca711a 100%)",
      },
      colors: {
        primary: "#D20653",
        secondary: "#FF951D",
        offWhite: "#F6F4F5",
        failure: { 100: "#FED9D9", 200: "#FC4242" },
        attention: { 100: "#FFF6DC", 200: "#FFD14E" },
        success: { 100: "#DDF4E6", 200: "#54A832" },
      },
      spacing: {
        21: "5.25rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      // screens: {
      //   xs: "300px",
      //   sm: "400px",
      //   md: "768px",
      //   lg: "992px",
      //   xl: "1281px",
      //   xxl: "1360px",
      //   hd: "1900px",
      // },
    },
  },
  plugins: [],
};
export default config;
