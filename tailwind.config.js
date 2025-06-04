/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#4A90A4', // Trustworthy teal - blue-600
        'primary-50': '#F0F9FF', // Very light teal - blue-50
        'primary-100': '#E0F2FE', // Light teal - blue-100
        'primary-200': '#BAE6FD', // Lighter teal - blue-200
        'primary-300': '#7DD3FC', // Light medium teal - blue-300
        'primary-400': '#38BDF8', // Medium teal - blue-400
        'primary-500': '#4A90A4', // Base primary teal - blue-500
        'primary-600': '#3B7A8C', // Darker teal - blue-600
        'primary-700': '#2C5F6F', // Dark teal - blue-700
        'primary-800': '#1E4551', // Very dark teal - blue-800
        'primary-900': '#0F2A34', // Deepest teal - blue-900

        // Secondary Colors
        'secondary': '#7B9E87', // Grounding sage green - green-600
        'secondary-50': '#F0FDF4', // Very light sage - green-50
        'secondary-100': '#DCFCE7', // Light sage - green-100
        'secondary-200': '#BBF7D0', // Lighter sage - green-200
        'secondary-300': '#86EFAC', // Light medium sage - green-300
        'secondary-400': '#4ADE80', // Medium sage - green-400
        'secondary-500': '#7B9E87', // Base secondary sage - green-500
        'secondary-600': '#6B8E73', // Darker sage - green-600
        'secondary-700': '#4F6B56', // Dark sage - green-700
        'secondary-800': '#374B3C', // Very dark sage - green-800
        'secondary-900': '#1F2D23', // Deepest sage - green-900

        // Accent Colors
        'accent': '#E8B86D', // Warm gold - yellow-400
        'accent-50': '#FEFCE8', // Very light gold - yellow-50
        'accent-100': '#FEF3C7', // Light gold - yellow-100
        'accent-200': '#FDE68A', // Lighter gold - yellow-200
        'accent-300': '#FCD34D', // Light medium gold - yellow-300
        'accent-400': '#E8B86D', // Base accent gold - yellow-400
        'accent-500': '#D4A054', // Medium gold - yellow-500
        'accent-600': '#B8883B', // Darker gold - yellow-600
        'accent-700': '#9C7022', // Dark gold - yellow-700
        'accent-800': '#805809', // Very dark gold - yellow-800
        'accent-900': '#644000', // Deepest gold - yellow-900

        // Background Colors
        'background': '#FAFBFC', // Soft off-white - gray-50
        'surface': '#F5F7F9', // Subtle gray-blue - gray-100
        'surface-hover': '#E2E8F0', // Surface hover state - gray-200
        'surface-active': '#CBD5E0', // Surface active state - gray-300

        // Text Colors
        'text-primary': '#2D3748', // Deep charcoal - gray-800
        'text-secondary': '#718096', // Medium gray - gray-500
        'text-tertiary': '#A0AEC0', // Light gray - gray-400
        'text-inverse': '#FFFFFF', // White text - white

        // Status Colors
        'success': '#68A085', // Muted green - green-600
        'success-light': '#C6F6D5', // Light success - green-200
        'success-dark': '#2F855A', // Dark success - green-700

        'warning': '#D69E2E', // Gentle amber - yellow-600
        'warning-light': '#FAF089', // Light warning - yellow-200
        'warning-dark': '#B7791F', // Dark warning - yellow-700

        'error': '#C53030', // Restrained red - red-600
        'error-light': '#FED7D7', // Light error - red-200
        'error-dark': '#9B2C2C', // Dark error - red-700

        // Border Colors
        'border': 'rgba(113, 128, 150, 0.2)', // Subtle border - gray-500 with opacity
        'border-light': 'rgba(113, 128, 150, 0.1)', // Very subtle border - gray-500 with low opacity
        'border-medium': 'rgba(113, 128, 150, 0.3)', // Medium border - gray-500 with medium opacity
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'], // Contemporary sans-serif for headings
        'body': ['Source Sans 3', 'sans-serif'], // Highly legible for body text
        'caption': ['Inter', 'sans-serif'], // Consistent with headings for captions
        'mono': ['JetBrains Mono', 'monospace'], // Monospace for data display
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.5rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
        'organic': '0.5rem', // 8px for organic edge softening
        'organic-lg': '1rem', // 16px for larger organic edges
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(45, 55, 72, 0.08)', // Soft elevation level 1
        'soft-md': '0 4px 12px rgba(45, 55, 72, 0.12)', // Soft elevation level 2
        'soft-lg': '0 8px 16px rgba(45, 55, 72, 0.16)', // Soft elevation level 3
        'none': '0 0 #0000',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
        'fade-in': 'fade-in 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slide-in 400ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'gentle-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
      },
      zIndex: {
        '1000': '1000', // Primary navigation
        '1100': '1100', // Overlays (cart, auth)
        '1200': '1200', // Mobile menu drawer
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}