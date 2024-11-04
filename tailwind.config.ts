import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'dodger-blue': {
          '50': '#f0f7fe',
          '100': '#deedfb',
          '200': '#c4e2f9',
          '300': '#9ccef4',
          '400': '#6db3ed',
          '500': '#4794e6',
          '600': '#357adb',
          '700': '#2d65c8',
          '800': '#2a53a3',
          '900': '#274781',
          '950': '#1c2d4f'
        }
      }
    }
  },
  plugins: []
}
export default config
