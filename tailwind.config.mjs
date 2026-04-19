/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          'Meiryo',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        category: {
          diy:    '#f97316',
          gadget: '#3b82f6',
          kurashi:'#10b981',
          gundam: '#8b5cf6',
          ai:     '#ec4899',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'font-family': '"Noto Sans JP", sans-serif',
            'line-height': '1.9',
            'max-width': '100%',
          },
        },
      },
    },
  },
  plugins: [],
};
