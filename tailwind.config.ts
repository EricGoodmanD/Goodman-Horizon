import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#0A2D62',
        brandGreen: '#0C8A61',
        brandGold: '#C9A44B',
        brandGray: '#F5F4F2'
      },
      boxShadow: {
        soft: '0 10px 35px rgba(10, 45, 98, 0.12)'
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        floatUp: 'floatUp 0.7s ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
