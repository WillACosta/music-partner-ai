import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        muted: '#797373',
        surface: '#F4F4F5',
        stroke: '#ACACAC',
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        'app-gradient-2': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
      },
    },
  },
  plugins: [],
}

export default config
