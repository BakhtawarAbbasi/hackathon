import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages**/success/*.{tsx}'
  ],
  theme: {
  	extend: {
  		colors: {	
  			pink: "#3A7D44"
  		},
      
      screens: {
         ' xs': '480px',
         ' sm': '640px',
         ' md': '768px',
         ' lg': '1024px',
         ' xl': '1280px',
         ' 2xl': '1536px',
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
