/**
 * Tailwind CSS Browser Configuration: Custom theme settings for the website.
 * Load immediately after https://cdn.tailwindcss.com so `tailwind` exists.
 */
tailwind.config = {

  theme: {
    extend: {
      // Custom font families for consistent typography
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"], // Body text font
        display: ["Fraunces", "Georgia", "serif"], // Heading font
      },
      // Custom color palette with moss green theme
      colors: {
        moss: {
          50: "#f3faf5",   // Lightest moss green
          100: "#dff5e8",
          200: "#c2ead3",
          300: "#94d9b2",
          400: "#5ec08a",
          500: "#36a368",  // Primary moss green
          600: "#278351",
          700: "#216843",
          800: "#1e5337",
          900: "#1a442f",
          950: "#092518",  // Darkest moss green
        },
        // Warm stone background color
        stone: {
          warm: "#f7f6f3",
        },
      },
      // Custom animations for UI elements
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards", // Fade up animation
      },
      // Keyframes for custom animations
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" }, // Start state
          "100%": { opacity: "1", transform: "translateY(0)" },   // End state
      },
    },
  },
},
}