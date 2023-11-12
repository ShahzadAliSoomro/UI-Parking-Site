import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        primary: '#003087',
        secondary: '#EF2C2E',
        // secondary2: '#f7f7f7',
    },
},
  plugins: [],
}
export default config
