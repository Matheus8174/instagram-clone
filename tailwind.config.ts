import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.icons-background-core': {
          'background-image': 'url(/imgs/sprite-sheet-core.png)'
        },

        '.logo-background': {
          'background-image': 'url(/imgs/logo.png)'
        },

        '.icons-background': {
          'background-image': 'url(/imgs/sprite-sheet.png)'
        },

        '.logo': {
          'background-position': '0px -52px',
          width: '175px',
          height: '51px',
          'background-repeat': 'no-repeat',
          'background-size': 'auto'
        },

        '.error-circle': {
          'background-position': '-249px -333px',
          'background-repeat': 'no-repeat',
          height: '22px',
          width: '22px'
        },

        '.circle-arrow': {
          'background-position': '-273px -333px',
          'background-repeat': 'no-repeat',
          height: '22px',
          width: '21px'
        },

        '.cake': {
          'background-repeat': 'no-repeat',
          'background-position': '0 0',
          height: '96px',
          width: '144px'
        },

        '.accept': {
          'background-position': '-225px -333px',
          'background-repeat': 'no-repeat',
          height: '22px',
          width: '22px'
        },

        '.envelope': {
          'background-repeat': 'no-repeat',
          'background-position': '-440px 0',
          height: '72px',
          width: '92px'
        }
      });
    })
  ]
};
export default config;
