/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
            white: 'hsl(0, 0%, 100%)',
            pink: { light: 'hsl(275, 100%, 97%)' },
            purple: {
                DEFAULT: '#d000f5',
                grayish: 'hsl(292, 16%, 49%)',
                dark: 'hsl(292, 42%, 14%)',
            },
        },
        fontFamily: {
            base: 'Work Sans',
        },
        backgroundImage: {
            mobile: "url('/src/assets/images/background-pattern-mobile.svg')",
            desktop: "url('/src/assets/images/background-pattern-desktop.svg')",
        },
    },
    plugins: [],
}
