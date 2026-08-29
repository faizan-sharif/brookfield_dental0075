import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f9fc',
          100: '#cceef6',
          200: '#99deee',
          300: '#66cde6',
          400: '#33bdde',
          500: '#00c9db', // Primary Bright Cyan from reference image
          600: '#00b4d8',
          700: '#0096b8',
          800: '#007798',
          900: '#005878',
        },
        navy: {
          800: '#142d4c',
          900: '#0a2540', // Deep Navy from reference image
          950: '#06172a',
        },
        ice: {
          50: '#f8fcfe',
          100: '#f4f9fc',
          200: '#eef6f9',
        },
      },
      backgroundImage: {
        'cyan-gradient': 'linear-gradient(135deg, #00c9db 0%, #00b4d8 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0a2540 0%, #142d4c 100%)',
        'glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.65) 100%)',
      },
      boxShadow: {
        cyan: '0 10px 30px 0 rgba(0, 201, 219, 0.25)',
        'cyan-glow': '0 0 25px rgba(0, 201, 219, 0.4)',
        card: '0 10px 30px 0 rgba(10, 37, 64, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
