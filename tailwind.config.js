/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 6s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'meteor': 'meteor 5s linear infinite',
        'blackhole': 'blackhole 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(156, 39, 176, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(156, 39, 176, 0.6)' },
        },
        twinkle: {
          '0%, 100%': { 
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        meteor: {
          '0%': { 
            transform: 'translateX(100%) translateY(-100%)',
            opacity: '1',
          },
          '70%': { opacity: '1' },
          '100%': { 
            transform: 'translateX(-250%) translateY(250%)',
            opacity: '0',
          },
        },
        blackhole: {
          '0%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1',
          },
          '100%': { 
            transform: 'scale(0) rotate(360deg)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
} 