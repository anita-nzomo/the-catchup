import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1B4332',
        teal: '#1D9E75',
        parchment: '#F5E6C8',
        cream: '#FAFAF8',
        ink: '#1A1A1A',
      },
      fontFamily: {
        headings: ['var(--font-headings)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}

export default config

