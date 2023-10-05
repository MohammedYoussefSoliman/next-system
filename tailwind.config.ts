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
      transitionProperty: {
        height: "height",
        width: "width",
        spacing: "margin, padding",
      },
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%",
        "5": "5 5 0%",
        "6": "6 6 0%",
        "7": "7 7 0%",
        "8": "8 8 0%",
      },
    },
  },
  plugins: [],
};
export default config;
