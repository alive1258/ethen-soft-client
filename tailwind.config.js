/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // text color  declaration
      textColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        secondary: {
          base: `var(--color-secondary-base)`,
        },
        info: {
          base: `var(--color-info-base)`,
          muted: `var(--color-info-muted)`,
        },
        warning: {
          base: `var(--color-warning-base)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
        black: {
          base: `var(--color-black-base)`,
          solid: `var(--color-black-solid)`,
          muted: `var(--color-black-muted)`,
        },
      },
      // background color  declaration
      backgroundColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        secondary: {
          base: `var(--color-secondary-base)`,
          muted: `var(--color-info-muted)`,
        },
        info: {
          base: `var(--color-info-base)`,
        },
        warning: {
          base: `var(--color-warning-base)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
        black: {
          base: `var(--color-black-base)`,
          solid: `var(--color-black-solid)`,
          muted: `var(--color-black-muted)`,
        },
      },
      // border color  declaration
      borderColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        secondary: {
          base: `var(--color-secondary-base)`,
        },
        info: {
          base: `var(--color-info-base)`,
          muted: `var(--color-info-muted)`,
        },
        warning: {
          base: `var(--color-warning-base)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
      },
      boxShadow: {
        primary: "0px 0px 16px rgba(49, 186, 174, 0.56)",
        "custom-box-shadow": "0 8px 30px rgba(0, 0, 0, 0.08)",
        "custom-5px": "0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
        "custom-10px": "0px 12px 16px -4px rgba(16, 24, 40, 0.1)",
        large: "4px 7px 11px 0px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/assets/images/banner.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
