module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
        fontFamily: {
            Antic: ['Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')],
}
