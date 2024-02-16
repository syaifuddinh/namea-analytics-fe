import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'checkbox': 'rgba(223, 244, 246, 0.06)',
        'alert-6': 'rgba(255, 140, 103, 0.60)',
        'alert-10': '#FF8C67',
        'gray-1': 'rgba(205,251,255,0.10)',
        'gray-6': "rgba(205, 251, 255, 0.60)",
        'gray-10': '#CDFBFF',
        'base-bg2': 'radial-gradient(100% 120.05% at 50% 50%,rgba(205, 251, 255, 0) 33.78%,rgba(205, 251, 255, 0.04) 100%),rgba(205, 251, 255, 0)',
        'success-1': 'rgba(43, 205, 185, 0.10)',
        'alert-1': 'rgba(255, 140, 103, 0.10)',
        'base-bg3': 'rgba(205,251,255,0.06)',
        'base-bg4': 'rgba(205, 251, 255, 0.04)',
        'base-bg5': 'rgba(205, 251, 255, 0.02)',
      },
    },
  },
  plugins: [],
}
export default config
