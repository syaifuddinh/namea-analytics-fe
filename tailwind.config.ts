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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        checkbox: "var(--c-checkbox)",
        "alert-1": "var(--c-alert1)",
        "alert-6": "var(--c-alert6)",
        "alert-10": "var(--c-alert10)",
        "gray-0": "var(--c-gray0)",
        "gray-1": "var(--c-gray1)",
        "gray-4": "var(--c-gray4)",
        "gray-6": "var(--c-gray6)",
        "gray-10": "var(--c-gray10)",
        "base-bg2": "var(--c-base-bg2)",
        "success-1": "var(--c-success1)",
        "success-2": "var(--c-success2)",
        "success-10": "var(--c-success10)",
        "base-bg3": "var(--c-base-bg3)",
        "base-bg4": "var(--c-base-bg4)",
        "base-bg5": "var(--c-base-bg5)",
        "base-border-color": "var(--c-base-border-color)",
        rank: "var(--c-rank-color)",
        "bg-rank": "var(--c-rank-bg-color)",
        warning: "var(--c-warning-theme-color)",
        "dot-blue": "var(--c-dot-blue)",
        "danger-medium": "var(--c-danger-medium)"
      },
    },
  },
  plugins: [],
};
export default config;
