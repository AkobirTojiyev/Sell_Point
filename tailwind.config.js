/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: { themes: ['light', 'dark'] }
}