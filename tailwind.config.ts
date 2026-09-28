import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0A0A0A', // Primary background
          900: '#111111', // Secondary background
          850: '#161616', // Card background
          800: '#1F1F1F', // Lighter container
          700: '#2A2A2A', // Muted borders / dividers
        },
        gold: {
          DEFAULT: '#D4AF37', // Gold accent
          light: '#E5C158',
          dark: '#B39228',
          subtle: 'rgba(212, 175, 55, 0.15)',
        },
        surface: {
          card: '#161616',
          border: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Space Grotesk', 'system-ui', 'sans-serif'],
        cinzel: ['Cinzel', 'serif']
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em'
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 40px -5px rgba(212, 175, 55, 0.35)',
        'luxury-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)'
      }
    }
  }
}
