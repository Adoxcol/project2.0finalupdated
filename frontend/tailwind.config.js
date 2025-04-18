module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
      colors: {
        border: 'rgb(var(--border)',
        input: 'rgb(var(--input)',
        ring: 'rgb(var(--ring)',
        background: 'rgb(var(--background)',
        foreground: 'rgb(var(--foreground)',
        primary: {
          DEFAULT: 'rgb(var(--primary)',
          foreground: 'rgb(var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary)',
          foreground: 'rgb(var(--secondary-foreground)',
        },
        // ... other color mappings
      },
    },
  },
  plugins: [],
}