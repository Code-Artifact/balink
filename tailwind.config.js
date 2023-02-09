/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "alibaba",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "alibaba",
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "alibaba",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      screens: {
        mob: "450px",
        "mob-sm": "350px",
      },
      spacing: {
        mob: "450px",
        "mob-sm": "350px",
      },
      colors: {
        pri: "#474888",
        "pri-dark": "#3A3B74",
        sec: "#CC8E34",
        "sec-dark": "#A77327",
        wh: "#F1F1F1",
        notif: "#cc8e3454",
        "notif-border": "#CC8E34",
        "notif-t": "#A6742B",
        pur: "#8854D0",
        greenblue: "#2D98DA",
        blueJean: "#4B6584",
        pinkred: "#EB3B5A",
        purpleblue: "#3867D6",
        yellowgreen: "#20BF6B",
      },
      inset: {
        "9n": "2.4rem",
        16: "3.7rem",
        58: "14.5rem",
        "9/10": "90.333333%",
        "8/10": "80.333333%",
        "85/100": "85%",
      },
      fontSize: {
        "2xs": [
          "0.6rem",
          {
            lineHeight: "0.25rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
