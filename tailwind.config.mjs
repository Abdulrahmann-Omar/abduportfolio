/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#0a0b0d',
        surface: '#111216',
        raised: '#16181d',
        accent: {
          DEFAULT: '#8b93ff',
          dim: '#6d76e6',
          faint: 'rgba(139, 147, 255, 0.08)',
        },
        ink: {
          DEFAULT: '#f2f3f5',
          soft: '#a3a8b3',
          mute: '#71767f',
        },
      },
      borderColor: {
        line: 'rgba(255, 255, 255, 0.08)',
        'line-strong': 'rgba(255, 255, 255, 0.16)',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '68rem',
      },
    },
  },
  plugins: [],
}
