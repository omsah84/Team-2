import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        borderMove: {
          "0%": {
            borderTopColor: "rgba(255, 255, 255, 0.6)",
            borderRightColor: "rgba(255, 255, 255, 0.6)",
            borderBottomColor: "rgba(255, 255, 255, 0.6)",
            borderLeftColor: "rgba(255, 255, 255, 0.6)",
          },
          "25%": {
            borderTopColor: "rgba(255, 0, 0, 0.6)", // Red
            borderRightColor: "rgba(0, 255, 0, 0.6)", // Green
            borderBottomColor: "rgba(0, 0, 255, 0.6)", // Blue
            borderLeftColor: "rgba(255, 255, 0, 0.6)", // Yellow
          },
          "50%": {
            borderTopColor: "rgba(0, 255, 0, 0.6)", // Green
            borderRightColor: "rgba(0, 0, 255, 0.6)", // Blue
            borderBottomColor: "rgba(255, 255, 0, 0.6)", // Yellow
            borderLeftColor: "rgba(255, 0, 0, 0.6)", // Red
          },
          "75%": {
            borderTopColor: "rgba(0, 0, 255, 0.6)", // Blue
            borderRightColor: "rgba(255, 255, 0, 0.6)", // Yellow
            borderBottomColor: "rgba(255, 0, 0, 0.6)", // Red
            borderLeftColor: "rgba(0, 255, 0, 0.6)", // Green
          },
          "100%": {
            borderTopColor: "rgba(255, 255, 255, 0.6)", // White
            borderRightColor: "rgba(255, 255, 255, 0.6)", // White
            borderBottomColor: "rgba(255, 255, 255, 0.6)", // White
            borderLeftColor: "rgba(255, 255, 255, 0.6)", // White
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        borderEffect: "borderMove 3s infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    daisyui,
    addVariablesForColors,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
