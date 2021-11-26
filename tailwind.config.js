module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#f7f5f0',
        'accent-2': '#EAEAEA',
        'accent-3': '#f4f1eb',
        'accent-4': '#452a25',
        'accent-7': '#333',
        'brand-1': '#cec4bc',
        'brand-2': '#645c55',
        success: '#452a25',
        cyan: '#452a25'
      },
      spacing: {
        28: '7rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      },
      typography: {
        lg: {
          css: {
            img: {
              marginTop: '0',
              marginBottom: '0'
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {
      filter: ['hover', 'focus']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
