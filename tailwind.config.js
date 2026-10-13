/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Deep Charcoal Neutral Palette
        surface: {
          950: '#07080c', // Grounded Footer / Deepest Base
          900: '#0a0b10', // Main Hero & Primary Page Background
          850: '#0e1017', // Distinct Alternating Section Background
          800: '#131622', // Elevated Card Surface
          750: '#181c2c', // Card Hover Surface
          700: '#22283d', // Structural 1px Borders
          600: '#323b59', // Active / Highlighted Borders
        },
        // Single Controlled Accent Color: Refined Electric Cobalt
        accent: {
          DEFAULT: '#3b82f6', // Clean Corporate Royal Blue
          hover: '#2563eb',
          light: '#60a5fa',
          dark: '#1d4ed8',
          subtle: 'rgba(59, 130, 246, 0.1)',
          border: 'rgba(59, 130, 246, 0.3)',
        },
        // Direct Mappings for compatibility
        cyber: {
          950: '#07080c',
          900: '#0a0b10',
          850: '#0e1017',
          800: '#131622',
          700: '#22283d',
        },
        neon: {
          blue: '#3b82f6',
          sky: '#60a5fa',
          cyan: '#38bdf8',
          electric: '#3b82f6',
          accent: '#3b82f6',
          glow: 'rgba(59, 130, 246, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        tech: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'card-hover': '0 14px 30px -4px rgba(0, 0, 0, 0.75), 0 4px 10px -2px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'elevated': '0 20px 40px -10px rgba(0, 0, 0, 0.85), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'btn-white': '0 2px 10px rgba(255, 255, 255, 0.2)',
        'neon-sm': '0 0 10px rgba(59, 130, 246, 0.2)',
        'neon': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'hud-panel': '0 10px 30px -5px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
