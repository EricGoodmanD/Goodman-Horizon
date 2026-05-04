import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#123A8A',
        brandCobalt: '#2F6BFF',
        brandSky: '#74C8FF',
        brandAccent: '#B23BFF',
        brandGray: '#EEF5FF'
      },
      boxShadow: {
        soft: '0 10px 35px rgba(10, 45, 98, 0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 15% 20%, rgba(47, 107, 255, 0.2), transparent 40%), radial-gradient(circle at 85% 80%, rgba(178, 59, 255, 0.14), transparent 45%)'
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
