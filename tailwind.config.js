/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 修改为高级的柔和粉紫
        primary: '#c87cc9',
      }
    },
  },
  plugins: [],
}
