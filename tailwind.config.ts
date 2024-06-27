import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ],
        'sm-pink':'1px 1px 2px rgb(255 0 240 / 90%)',
        'sm-blue':'1px 1px 2px rgb(0 191 255 / 90%)',
      }
    },
  },
  plugins: [nextui({
    prefix: "nextui",
    addCommonColors: false,
    defaultTheme: "dark",
    defaultExtendTheme: "dark",
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C",
          primary: {
            foreground: "#ffffff",
            DEFAULT: "#0f82f5",
          },
          secondary:{
            foreground: "#ffffff",
            DEFAULT : "#6a00b1"
          }
        },
      },
      dark: {
        colors: {
          background: "#181f25",
          foreground: "#ECEDEE",
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
          secondary:{
            foreground: "#ffffff",
            DEFAULT : "#6a00b1",
          }
        },
      },
    },
  }),],
}
export default config
