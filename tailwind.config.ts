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
        "tooltip-background": "linear-gradient(0deg, #092B2D, #092B2D)",
        "primary-gradient1": "linear-gradient(270deg, #07B7AC 0%, #087981 100%)",
        "primary-gradient2": "linear-gradient(270deg, rgba(7, 183, 172, 0.5) 0%, rgba(8, 121, 129, 0.5) 100%)",
        "primary-gradient3": "linear-gradient(270deg, rgba(7, 183, 172, 0.3) 0%, rgba(8, 121, 129, 0.3) 100%)"
      },
      colors: {
        checkbox: "var(--c-checkbox)",
        "alert-1": "var(--c-alert1)",
        "alert-2": "var(--c-alert2)",
        "alert-6": "var(--c-alert6)",
        "alert-10": "var(--c-alert10)",
        "gray-0": "var(--c-gray0)",
        "gray-1": "var(--c-gray1)",
        "gray-4": "var(--c-gray4)",
        "gray-6": "var(--c-gray6)",
        "gray-7": "var(--c-gray7)",
        "gray-9": "var(--c-gray9)",
        "gray-10": "var(--c-gray10)",
        "base-bg2": "var(--c-base-bg2)",
        "success-1": "var(--c-success1)",
        "success-2": "var(--c-success2)",
        "success-3": "rgba(43, 205, 185, 1)",
        "success-10": "var(--c-success10)",
        "base-bg3": "var(--c-base-bg3)",
        "base-bg4": "var(--c-base-bg4)",
        "base-bg5": "var(--c-base-bg5)",
        "base-border-color": "var(--c-base-border-color)",
        rank: "var(--c-rank-color)",
        "bg-rank": "var(--c-rank-bg-color)",
        warning: "var(--c-warning-theme-color)",
        "dot-blue": "var(--c-dot-blue)",
        "dot-blue1": "var(--c-dot-blue1)",
        "dot-blue2": "var(--c-dot-blue2)",
        "primary-button": "linear-gradient(180deg, #07B7AC -75%, #087981 100%)",
        "danger-medium": "var(--c-danger-medium)",
        "bg-button": "var(--c-bg-button-color)",
        "border-gradient": "var(--c-border-button-color)",
        "bar-color": "var(--c-bar-color)",
        "dot-blue-border": "var(--c-dot-blue-border)",
        "white-theme": "var(--c-white-theme-color)",
        "shadow1": "rgba(0, 22, 25, 0.6)"
      },
    },
  },
  plugins: [],
};
export default config;
