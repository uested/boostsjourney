/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
        wink: "wink 4s ease 1",
        walk: "walk 0.7s ease 3",
        ripple: "ripple 2s ease-in-out",
      },

      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        wink: {
          "0%, 100%": {
            "background-image": "url('../src/assets/imgs/stand.png')",
          },
          "5%": {
            "background-image": "url('../src/assets/imgs/standSleep.png')",
          },
          "50%": {
            "background-image": "url('../src/assets/imgs/standSleep.png')",
          },
          "95%": {
            "background-image": "url('../src/assets/imgs/standSleep.png')",
          },
        },
        walk: {
          "0%, 50%": {
            "background-image": "url('../src/assets/imgs/walk1.png')",
          },
          "70%, 80%, 90%, 100%": {
            "background-image": "url('../src/assets/imgs/walk2.png')",
          },
        },

        ripple: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
