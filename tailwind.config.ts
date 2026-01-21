// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{ts,tsx,js,jsx}",
//     "./src/**/*.{ts,tsx,js,jsx}",
//     "./components/**/*.{ts,tsx,js,jsx}",
//     "./pages/**/*.{ts,tsx,js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#5D5D6F",
//         accent: "#1E1E24",
//       },
//     },
//   },
//   plugins: [],
// };

import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0F172A",
        surface: "#111827",
        line: "#1F2937",
        ink: "#D6DEE8",
        muted: "#9CA3AF",
        onBrand: "#0B1220",
        brand: {
          teal: "#2DD4BF",
          sky: "#38BDF8",
        },
        footer: "#0B1220",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
