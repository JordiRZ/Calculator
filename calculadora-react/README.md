npx create-react-app calculadora-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

@tailwind base;
@tailwind components;
@tailwind utilities;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

