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
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 15% 20%, rgba(12, 138, 97, 0.18), transparent 40%), radial-gradient(circle at 85% 80%, rgba(10, 45, 98, 0.16), transparent 45%)'
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        floatUp: 'floatUp 0.7s ease-out both',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
