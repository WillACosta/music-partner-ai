import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1024px',
      },
    },
    extend: {
      colors: {
        primary: '#111111',
        muted: '#5B5B5B',
        surface: '#161616',
        'surface-variant': '#29292E',
        stroke: '#29292E',
        'stroke-variant': '#6A6A6A',
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        'app-gradient-2': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
