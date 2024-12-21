import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#115e56",
        secondary: "#6B7280", // Gray
        error: "#DC2626", // Red
        disabled: "#CCFBEF",
        "gray-550": "#667085",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      backgroundImage: {
        "custom-gradient": `
          linear-gradient(0deg, #3FDCCDCF, #09544D),
          linear-gradient(222.7deg, rgba(255, 255, 255, 0.81) 2.39%, #FFFFFF 99.83%),
          linear-gradient(222.7deg, rgba(63, 220, 205, 0.81) 2.39%, #09544D 99.83%)
        `,
      },
    },
  },
  plugins: [],
} satisfies Config;
