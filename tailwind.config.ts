import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#FAFAF8',
        },
        accent: {
          DEFAULT: '#1D4ED8',
          dark: '#1E3A8A',
          light: '#DBEAFE',
          faint: '#EFF6FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
        site: '72rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
